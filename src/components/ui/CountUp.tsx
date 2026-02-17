'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

type Props = {
    value: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
    decimals?: number;
};

export default function CountUp({ value, duration = 1, prefix = '', suffix = '', className, decimals = 0 }: Props) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 100,
        damping: 30,
        duration: duration * 1000,
    });
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(latest);
            if (ref.current) {
                // Using textContent for direct DOM update for performance during fast animation
                // However, react state is okay for this simple use case, but let's stick to state for simplicity/safety first.
                // Ref approach:
                ref.current.textContent = `${prefix}${latest.toLocaleString('en-US', {
                    minimumFractionDigits: decimals,
                    maximumFractionDigits: decimals,
                })}${suffix}`;
            }
        });
        return unsubscribe;
    }, [springValue, prefix, suffix, decimals]);

    // Initial render placeholder
    return <span ref={ref} className={className}>{prefix}{value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
}
