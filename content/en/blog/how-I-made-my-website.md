---
title: "How I Built My Website — or Three Years of Reflection"
description: "Three years, four rebuilds, and dozens of rethought decisions — the journey to my personal website turned out to be less about code and more about awareness. This is a story of how a simple idea of 'building a portfolio' evolved into an attempt to create a digital reflection of myself: simple, honest, and engineered with intent."
date: 2025-08-20
tags: ["frontend", "nuxt", "personal_website", "webdev", "portfolio"]
draft: false
cover: "/img/blog/how-I-made-my-website.jpg"
---

I’ve been living with the idea of a personal website since 2022.  
At first, it seemed simple: pick a design, choose a stack, build a portfolio.  
In practice, it turned into something entirely different — not a quick “build and forget,” but a long journey of experimentation, rejection, and reflection.

That journey shaped the site into what it is today — modern, minimal, fast, and an honest reflection of who I am as an engineer.

---

## The Vision: Not “Another Site,” but a Digital Legacy

The original motive was practical: I needed a place to send people — a business card, a project list, a blog.  
But soon, that wasn’t enough. I wanted something deeper: a place that didn’t just list my work but **represented my principles and approach**.

I went through hundreds of references, but none of them really fit.  
The takeaway: references can inspire you, but they can’t replace your own perspective.  
A personal website shouldn’t just show _what_ you’ve done — it should reveal _how_ you think.

---

## Early Versions: Useful Dead Ends

The first version ran on WordPress — a logical choice: a built-in admin panel, flexible configuration, and plenty of ready-made solutions.  
In reality, it felt heavy-handed. The whole setup — WP + theme + database + deployment — was too much for a personal project.

Next, I tried **Eleventy (11ty)** — a static site generator.  
It appealed to me for its simplicity and the way it was warmly discussed in the _Web Standards_ podcast.  
But that attempt also faded away when other projects took priority.

I don’t see those stages as failures. They were reconnaissance missions — experiments in design, stack, and mindset.  
Each iteration ended the same way: after three or four rebuilds, I scrapped everything and started over.  
It was frustrating, but honest — and it helped crystallize my requirements.

---

## Evolution: From Portfolio to Self-Presentation

Over three years, the idea became clearer: the site shouldn’t just show my projects or posts — it should **show me**.  
How I feel interfaces. How I make technical decisions. What kind of simplicity I value, and what kind of engineering rigor I stand by.

I’ve gone through WordPress, Eleventy, pure static builds — and eventually landed on **Nuxt**.  
I’ve been comfortable with Vue for years, so I decided to go deeper: static generation with **Nuxt 4**.  
We used a similar setup at my previous company for a corporate website, so this was a deliberate decision, not a random experiment.

My approach evolved too — more system, less magic, a focus on readability, scalability, and predictable behavior.  
Colleagues and mentors helped sharpen my sense of engineering simplicity — and I’m grateful for that.

The final self-definition: I’m stubborn, principled, and demanding — of myself and my environment.  
I care about flow, growth, and having a clear rationale behind every decision.

---

## The Current Stack: Nuxt 4, Vue 3, and Static Generation

Today, the site runs on **Nuxt 4** (powered by **Vue 3**) with full static generation.  
The architecture doesn’t try to impress with complexity — it’s intentionally flat, to make reading and maintenance fast.

That said, it’s built **with care**: modular isolation, clean data handling, and clear naming and structural conventions.  
The repository is open — you can explore the details in the code and commits: [github.com/anpilogov-pw/anpilogov.pw](https://github.com/anpilogov-pw/anpilogov.pw).

---

### Performance and Metrics

Performance balance is something I monitor constantly.  
I regularly run Lighthouse audits, track metrics, and I’m not afraid to remove visual “decorations” if they hurt the _First Meaningful Paint_ or inflate the bundle size.

In static builds, details like critical CSS, chunking, and lazy loading matter the most.

---

### SEO and Administration

I handle SEO myself — without dogmatism.  
The focus is on **technical hygiene**: correct meta tags, structured data, sitemap/robots, clean URLs, and predictable titles.

There’s no CMS — I **administer everything through Git**.  
That’s a deliberate choice for a static site: fewer points of failure, more control, and full version history.

---

### Accessibility

Yes, I might have “overdone” accessibility — and I’m not ashamed of it.  
I firmly believe there’s no such thing as _too much accessibility_: semantics, focus styles, contrast, visible labels, clear states.

It disciplines design and improves UX for everyone — not just for users with assistive needs.  
I still have plenty of ideas here and will keep improving this area as the site evolves.

---

### “Don’t Reinvent the Wheel”

I consciously prefer ready-made components and libraries when they accelerate delivery without harming performance or security.  
But that doesn’t mean “install everything.”  
Each dependency goes through an audit. The goal is **minimal overhead, maximum control**.  
A library should save time — not hijack architecture.

---

## Principles That Stuck

Over the years, several principles have become non-negotiable — I now carry them into every project:

- **Long-term thinking.**  
  Even a “small” personal website has room to grow — content, localization, integrations. I plan for expansion early.

- **Scalability without obsession.**  
  No microservices for the sake of microservices — but no monolithic soup either. Just the right amount of modularity.

- **KISS and DRY.**  
  Simple code, clear conventions, minimal duplication. Faster reviews, easier onboarding, predictable behavior.

- **Metrics over opinions.**  
  Decisions must be measurable. If the numbers don’t match the hypothesis — I fix the hypothesis, not the numbers.

If I were starting today, I’d **begin with a plan** — clear goals, functional core, readiness criteria, and a technical checklist — _before_ picking a stack.  
That alone saves months.

---

## A Note to Those “Waiting for the Perfect Moment”

Here’s the truth: you’re not postponing — you just haven’t reached the level of clarity you need to build what you want.  
And that’s okay.

The solution is simple: clear the noise, write down your goal and checklist, limit your stack decision time, and launch something minimal.  
The “perfect moment” won’t come — but real feedback from a live release will.

---

## The Future: Growing Calmly

The site does its current job well — a business card with a small blog.  
Next steps: more content, gradual UX and accessibility improvements, a stronger visual language.  
But no “revolutions for the sake of revolutions.”

For me, architectural stability and process predictability matter far more than flashy effects.

---

After three years, I understand myself better, I’ve learned a lot, and I’ve come a long way.  
I’m proud that what finally emerged isn’t just a website — it’s an honest projection of my engineering values.  
A small but solid piece of digital legacy — and a good starting point for anyone who wants to understand how I think and how I work.
