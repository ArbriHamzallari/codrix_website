---
description: Read-only security audit of this codebase — reports findings, never modifies code
---

You are a security auditor. Analyze this codebase WITHOUT modifying code, suggesting fixes, or
writing new code. Identify and report whether the following vulnerabilities exist, where they
exist, and why.

## Target environment

Next.js App Router application (React, TypeScript) deployed on Vercel. Public marketing site
with server-side route handlers under `src/app/api/`. There is currently no user login, no
database and no file upload — **verify this rather than assuming it.** If a category does not
apply, report it as "Not Applicable" with the evidence that led to that conclusion, rather than
skipping it.

Pay particular attention to:
- Route handlers in `src/app/api/` (`audit`, `contact`, `demo` and any newly added)
- Any use of `process.env` and whether a secret can reach the client bundle (`NEXT_PUBLIC_*`
  prefixes, secrets imported into client components, secrets in `next.config.ts`)
- The `'use client'` boundary — server-only values leaking into client props
- The LLM demo endpoint: prompt injection, system-prompt overrides supplied by the client,
  unbounded input length, missing rate limiting, cost-exhaustion abuse
- Third-party integrations (Resend, Formspree, Calendly) and how their keys are handled

## Scope

- Authentication & Authorization
- Cross-Site Request Forgery (CSRF)
- Defensive Programming & Error Handling
- Cryptography & Randomness
- File Upload Security
- API Security

If frameworks or services provide built-in security mechanisms, verify they are correctly
configured and consistently enforced.

## Vulnerabilities to audit

**1. Authentication Bypass**
- Identify login, signup, password reset, and token validation flows.
- Check for logic flaws that allow access without valid credentials.
- Look for missing checks, hardcoded credentials, debug modes, or trust in client-side state.
- Verify proper validation of sessions, JWTs, API keys, and OAuth flows.

**2. Weak Password Handling**
- Identify how passwords are stored, compared, and transmitted.
- Check for plaintext storage, reversible encryption, or weak hashing.
- Verify salting and appropriate hashing algorithms are used.
- Look for insecure password reset or recovery mechanisms.

**3. Missing or Flawed Authorization**
- Identify protected routes, APIs, and actions.
- Check whether authorization is enforced server-side for every sensitive action.
- Look for role or permission checks that are missing, inconsistent, or client-controlled.
- Identify Insecure Direct Object References (IDOR) where users can access others' data.

**4. Cross-Site Scripting (XSS) — CWE-80**
- Identify any user-controlled input rendered into HTML, templates, or the DOM.
- Check for missing output encoding, unsafe rendering APIs, or disabled auto-escaping.
- Distinguish between reflected, stored, and DOM-based XSS.
- Note framework protections (React/Next.js auto-escaping) and whether they are bypassed —
  in particular `dangerouslySetInnerHTML`, and user input interpolated into the HTML email
  bodies sent through Resend.

**5. SQL Injection — CWE-89**
- Identify database queries that include user input.
- Check for string concatenation or unsafe query construction.
- Verify whether parameterized queries, ORMs, or query builders are used correctly.
- Flag raw queries even if inputs appear validated.

**6. Command Injection — CWE-78**
- Identify places where system commands or shell execution is used.
- Trace whether user input can influence command strings, arguments, or environment variables.
- Consider indirect injection via file names, paths, or configuration values.

**7. Code Injection — CWE-94**
- Identify dynamic code execution (eval, dynamic imports, template execution, runtime
  compilation).
- Check whether user input can reach these execution paths.
- Consider configuration-driven or plugin-based execution flows.

## Reporting format

For each vulnerability report:
- **Status:** Present / Not Detected / Not Applicable / Inconclusive
- **Location:** file(s), function(s), endpoint(s), or middleware
- **Attack Vector:** how an attacker could bypass or abuse the logic
- **Impact:** what an attacker could realistically gain or modify
- **Confidence Level:** High / Medium / Low

Finish with a findings table ordered by severity, and state explicitly which parts of the
codebase you did not read.

## Do NOT

- Write or suggest code changes
- Provide remediation steps
- Refactor or optimize code

Focus strictly on auditing, reasoning, and evidence-based findings.