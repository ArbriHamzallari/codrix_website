'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { Bell, Check, Sparkles, RotateCcw } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import type { Dict } from '@/i18n';

/**
 * Section 02 — the problem, and its answer, in one interaction.
 *
 * Three states, no explanatory copy:
 *   idle    the bell, badged with the unread count
 *   flood   the same nine real messages stack up, counter climbing
 *   handled Biseda AI has replied and routed each one to a team
 *
 * `flood` advances to `handled` on its own once the last row lands, so the
 * whole story plays from a single press. Pressing again replays it.
 *
 * The message text, senders, channels and timestamps are fixed content and are
 * never touched by the state machine — only the surrounding status changes.
 */

// Fixed reference instant, not `Date.now()`, so the server and the client build
// byte-identical timestamps — a live clock here would desync the two renders
// and trip a hydration mismatch on every load.
const REFERENCE = new Date('2026-01-01T21:47:00.000Z').getTime();

type Phase = 'idle' | 'flood' | 'handled';

export default function ProblemOverload({ dict }: { dict: Dict }) {
  const p = dict.problemOverload;
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>('idle');
  const [landed, setLanded] = useState(0); // rows that have arrived, drives the counter
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const items = useMemo(
    () =>
      p.notifications.map((n, i) => {
        const minutes = n.minutesAgo;
        const stamp =
          minutes < 2
            ? p.timeNow
            : minutes < 60
              ? `${minutes} ${p.timeMinutes}`
              : `${Math.round(minutes / 60)} ${p.timeHours}`;
        return {
          id: i,
          title: `${n.channel} · ${n.from}`,
          message: n.message,
          stamp,
          assignee: n.assignee,
          // Retained so the fixed reference above stays the single source of
          // truth for the stamps rather than a second, drifting formatter.
          at: new Date(REFERENCE - minutes * 60_000),
        };
      }),
    [p]
  );

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  // Rows land on a stagger that tightens as it goes, so the pile reads as
  // arriving faster than anyone could answer it.
  const rowDelay = useCallback(
    (i: number) => (reduce ? 0 : 0.1 * i - 0.0035 * i * i),
    [reduce]
  );

  /** Runs the flood, then hands over to Biseda AI once the last row lands. */
  const play = useCallback(() => {
    clearTimers();
    setPhase('flood');
    setLanded(reduce ? items.length : 0);

    if (!reduce) {
      items.forEach((_, i) => {
        timers.current.push(setTimeout(() => setLanded(i + 1), rowDelay(i) * 1000 + 180));
      });
    }
    const settled = reduce ? 250 : rowDelay(items.length - 1) * 1000 + 1500;
    timers.current.push(setTimeout(() => setPhase('handled'), settled));
  }, [clearTimers, reduce, items, rowDelay]);

  const reset = useCallback(() => {
    clearTimers();
    setPhase('idle');
    setLanded(0);
  }, [clearTimers]);

  /** The bell opens the story, or closes it if it's already running. */
  const toggle = useCallback(() => {
    if (phase === 'idle') play();
    else reset();
  }, [phase, play, reset]);

  /** Replay has to unmount the card first — the row entrance animations only
   *  fire on mount, so restarting in place would show nothing move. */
  const replay = useCallback(() => {
    reset();
    timers.current.push(setTimeout(play, 380));
  }, [reset, play]);

  const open = phase !== 'idle';
  const handled = phase === 'handled';
  const unread = handled ? 0 : items.length;

  return (
    // `reducedMotion="user"` lets framer drop the transform animations for
    // anyone who asks, without the props themselves differing between the
    // server and the client — which is what broke hydration when these were
    // branched by hand.
    <MotionConfig reducedMotion="user">
      <section id="problemi" className="section-y px-6 sm:px-8 lg:px-16 border-t border-border">
        <Reveal className="max-w-[680px] mx-auto text-center">
          <span className="type-label uppercase font-medium text-ink-muted">{p.eyebrow}</span>
          <h2 className="font-heading font-bold text-ink mt-4 text-[2rem] leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
            <span className="block">{p.title.line1}</span>
            <span className="block">
              <span className="text-primary">{p.title.line2Number}</span>{' '}
              {p.title.line2Rest}
            </span>
          </h2>
        </Reveal>

        {/* Bell — the whole interaction hangs off this one control. */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <motion.button
            type="button"
            onClick={toggle}
            aria-label={p.bellLabel}
            aria-expanded={open}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 420, damping: 26 }}
            className="relative w-16 h-16 rounded-full bg-white border border-border text-ink shadow-soft hover:shadow-elevated hover:border-ink/20 transition-[box-shadow,border-color] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {/* Halo, hover only — signals the control without animating forever. */}
            <span className="absolute inset-0 rounded-full bg-primary/0 hover:bg-primary/[0.06] transition-colors" aria-hidden />

            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              animate={open && !reduce ? { rotate: [0, -12, 10, -6, 0] } : { rotate: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              aria-hidden
            >
              <Bell size={26} strokeWidth={1.75} />
            </motion.span>

            {/* Badge. The container is static and only re-tints, so the pulse can
                loop forever without ever sitting on an element `AnimatePresence`
                has to swap — an infinitely repeating animation there never
                "completes", so the exit never resolves and the incoming child
                never mounts. Only the finite content animates. */}
            <span
              className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-500 ${
                handled
                  ? 'bg-primary text-white shadow-[0_2px_8px_rgba(109,53,242,0.35)]'
                  : 'bg-ink text-white'
              }`}
            >
              {/* Hidden for reduced motion in CSS, never by a render branch:
                  `useReducedMotion()` is false during SSR and true on the client,
                  so branching the DOM on it here mismatched hydration. */}
              {!handled && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-ink motion-reduce:hidden"
                  animate={reduce ? undefined : { scale: [1, 1.45], opacity: [0.3, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
                  aria-hidden
                />
              )}

              <AnimatePresence mode="wait" initial={false}>
                {handled ? (
                  <motion.span
                    key="done"
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 24 }}
                    className="relative flex"
                  >
                    <Check size={13} strokeWidth={3} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="count"
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.2 }}
                    className="relative text-xs font-medium tabular-nums"
                  >
                    {unread}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </motion.button>
        </div>

        {/* The card. Kept in normal flow so it can never be scroll-clipped. */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="card"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.985 }}
              transition={{ duration: reduce ? 0.15 : 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 mx-auto w-full max-w-[520px] rounded-card border border-border bg-white shadow-soft overflow-hidden text-left"
            >
              {/* Header — morphs from the pile to the resolution. */}
              <div
                className={`flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 border-b border-border transition-colors duration-500 ${
                  handled ? 'bg-primary/[0.05]' : 'bg-white'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={handled ? 'h' : 'f'}
                    initial={{ opacity: 0, y: reduce ? 0 : 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduce ? 0 : -5 }}
                    transition={{ duration: reduce ? 0 : 0.22 }}
                    className="min-w-0"
                  >
                    {handled ? (
                      <div className="flex items-center gap-2 min-w-0">
                        <Sparkles size={15} className="text-primary shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-ink">{p.handledTitle}</p>
                          {/* Wraps rather than truncates — on a 342px card this is
                              the one line that names what the AI actually did. */}
                          <p className="text-xs text-ink-muted leading-snug">{p.handledCaption}</p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm font-medium text-ink">{p.floodTitle}</p>
                    )}
                  </motion.div>
                </AnimatePresence>

                <span className="shrink-0 text-xs text-ink-muted tabular-nums">
                  {handled ? (
                    <button
                      type="button"
                      onClick={replay}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 hover:border-ink/25 hover:text-ink transition-colors cursor-pointer"
                    >
                      <RotateCcw size={11} />
                      {p.replayLabel}
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cream border border-border px-2.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden />
                      {landed} {p.floodCountLabel}
                    </span>
                  )}
                </span>
              </div>

              <ul className="divide-y divide-border">
                {items.map((n, i) => (
                  <motion.li
                    key={n.id}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: reduce ? 0.12 : 0.34,
                      delay: rowDelay(i),
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="px-4 sm:px-5 py-3.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        {/* Unread marker — gone the moment it's been answered. */}
                        <AnimatePresence initial={false}>
                          {!handled && (
                            <motion.span
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ duration: reduce ? 0 : 0.2 }}
                              className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                              aria-hidden
                            />
                          )}
                        </AnimatePresence>
                        <h3 className="text-sm font-medium text-ink truncate">{n.title}</h3>
                      </div>
                      <time
                        dateTime={n.at.toISOString()}
                        className="text-xs text-ink-muted shrink-0 tabular-nums"
                      >
                        {n.stamp}
                      </time>
                    </div>

                    <p className="text-[13px] leading-relaxed text-ink-muted mt-1">{n.message}</p>

                    {/* Status — the only thing that changes about a message. */}
                    <AnimatePresence initial={false}>
                      {handled && (
                        <motion.div
                          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -4, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: reduce ? 0.12 : 0.28,
                            delay: reduce ? 0 : 0.05 * i,
                            ease: 'easeOut',
                          }}
                          className="overflow-hidden"
                        >
                          <div className="flex items-center gap-2 flex-wrap pt-2.5">
                            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary text-[11px] font-medium px-2 py-0.5">
                              <Check size={11} strokeWidth={3} />
                              {p.statusReplied}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] text-ink-muted">
                              <span aria-hidden>→</span>
                              {n.assignee}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
          </AnimatePresence>
      </section>
    </MotionConfig>
  );
}
