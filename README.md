# Social Gym

Free, offline-friendly training for people skills: small talk, real conversations, storytelling, dating, negotiation and interviews.

**Live:** https://aditya2375.github.io/social-gym/

## What it is

Six tracks of five-minute lessons, five branching practice conversations where your replies get scored and explained, and a ten-question scorecard that tells you where to start. No account, no paywall, no ads, no tracking. Progress lives in your browser's local storage and never leaves your device.

## Why it exists

Most social-skills apps lock everything behind a subscription. This one doesn't. Everything is free, and it works offline once loaded.

## Inside

- **18 lessons** across 6 tracks: small talk, real conversations, storytelling, dating and flirting, negotiation and assertiveness, interviews and work. Each lesson: the idea, why it works, say-this-not-that examples, common mistakes, and a real-world drill for the day.
- **5 practice reps**: branching conversations (a cafe opener, repairing with a friend, a first date, asking for a raise, a job interview) with per-choice feedback.
- **Scorecard**: ten questions that point you at the track that will pay off first.
- **Streaks and progress**, stored locally only.

## Tech

Plain HTML, CSS and JavaScript. No build step, no dependencies, no backend. Installable as a PWA with a service worker for offline use.

## Run locally

Any static file server works:

```
npx serve .
```

or just open `index.html` in a browser.
