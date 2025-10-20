---
title: "Why I Switched to Nuxt — or How I Got Tired of TSX"
description: "After several years of working with React, I grew tired of TSX and its verbosity. Switching to Vue and Nuxt brought me back to simplicity, structure, and the joy of writing code. This article is about why Nuxt became more than just a framework to me — it became a natural extension of my engineering mindset."
date: 2025-09-05
tags: ["Nuxt", "Vue", "Frontend", "Web Development", "Developer Experience"]
draft: false
cover: "/img/blog/why-I-chose-nuxt-4.jpg"
---

For a long time, I lived inside the React ecosystem.  
It was a familiar, proven path — dozens of projects, layouts, integrations, all running like clockwork.  
I used React both standalone and alongside WordPress, and for years it felt like a universal solution.

But gradually, I caught myself spending more time **fighting the syntax than writing code**.  
TSX, JSX, endless imports, type declarations, abstractions for the sake of abstractions — all of it started to wear me down.  
At some point, I realized that **I wanted to write in a human language again, not in a machine shorthand**.

---

## From React to Vue: Coming Back to Myself

Ironically, **Vue** was the very first framework I ever touched when I started my frontend journey.  
Back then, it was just experiments — simple projects with no deep understanding.  
Later I moved to React, because everyone did, and it became the de facto standard for commercial projects.  
But the longer I worked with it, the more I felt tired of its “heaviness.”

When I came back to Vue, I was struck by how logical, natural, and _humanly structured_ everything felt.  
**script — logic, template — view, style — design.**  
Three simple blocks forming a complete project.  
No JSX, no confusion. Everything is readable, everything predictable.  
I realized how much I had missed that feeling — when code doesn’t get in the way of thinking.

---

## Nuxt: Universality and Integrity

The next step was **Nuxt**.  
It felt like more than just a framework for Vue — almost like a philosophy.  
Nuxt is a way to build applications **holistically**, without splitting frontend and backend into two camps, without wasting time configuring rendering, routing, or project structure.

> It’s frontend and backend in one bottle.

That universality was the deciding factor.  
You can spin up a prototype with SSR, API routes, and deployment — all in one day, without feeling like you’re fighting the tool.  
Nuxt gives you architecture “by default,” yet never restricts you.  
If you want full control — you’ve got it. If you prefer conventions — they’re ready out of the box.

---

## What Hooked Me

The most impressive thing was the **project structure and ecosystem**.  
Nuxt is designed so you don’t have to reinvent the wheel.  
**pages**, **layouts**, **components**, **composables**, **plugins** — everything is neatly organized, predictable, and scales naturally as your project grows.  
The documentation is top-tier — clear, practical, full of live examples.

Nuxt also supports multiple rendering modes: SPA, SSR, SSG, Hybrid.  
That freedom lets you design architectures flexibly, without committing to a single model too early.

> I was hooked by the almost-ready project structure, rich documentation, multiple rendering modes, modularity, and ecosystem.

---

## SSR Without the Pain

Rendering is probably the one part that initially feels confusing.  
Understanding **when and where code executes** takes time.  
I spent quite a while digging into SSR mechanics, generation, and hydration — and at first, it seemed complicated.

But over time, I realized the simplicity behind it: **the server renders the template, the client hydrates reactivity, and then Vue takes over**.  
Once you grasp that inner process, Nuxt stops being a “black box” and becomes a tool you can trust.

> It felt complex back then, but now I see that everything truly brilliant is simple.

---

## Architecture and Common Sense

I don’t build massive corporate systems with hundreds of directories and dozens of microservices.  
My projects are usually compact, but engineered with care.  
And that’s exactly what Nuxt is about — **rational minimalism**.

At the core, I follow the same set of principles:  
**SOLID**, **dependency inversion**, **KISS**, **DRY**.  
I sometimes experiment — I’ve tried FSD (Feature-Sliced Design), for instance — but for my projects, it’s overkill.

> In my opinion, FSD makes sense for large teams with no constraints on time or budget.

Nuxt doesn’t demand architectural acrobatics.  
You build systems naturally — without losing control, and without drowning in boilerplate.

---

## Development Became Simpler — and More Enjoyable

After moving to Nuxt, my **Developer Experience** improved significantly.  
Building complex projects no longer feels like a grind.  
Components interact naturally, reactivity is transparent, and the project structure helps keep everything clean and manageable.

> It became much easier to build complex projects and apply modern patterns. Working with components now feels genuinely enjoyable.

Everything that used to require dozens of imports and config lines now happens automatically.  
Need a page? Create a file in **pages**.  
Need a composable? Drop it in **composables**, and it’s instantly available.  
This “magical order” saves time — without turning into magical chaos.

---

## On Auto Imports and Complexity

It’s not perfect, of course.  
The auto-import system introduced in version 2 is both a blessing and a curse.  
On one hand, less boilerplate. On the other — **less control**.  
Sometimes, after deleting or moving components, the imports don’t refresh fast enough, and you need to restart the dev server.

> It’s both syntactic sugar and a headache — it’s easy to lose track of dependencies.

Even with that, Nuxt remains an honest tool.  
It doesn’t break your logic or force its style — it just demands a bit of attentiveness.  
Auto imports aren’t a bug; they’re the cost of convenience.  
And once you understand how they work, they hardly cause any issues.

---

## Why Nuxt Specifically

In short — **because of Vue**.  
I love its straightforward concept: three segments — code, template, and styles.  
No gimmicks, no surprises.  
Mustache templates look clean, and computed properties feel intuitive.

> Unlike React, it doesn’t feel monstrous.

Nuxt simply expands Vue’s philosophy — turning it from a UI framework into a complete platform.  
It’s not about competing with React, but about choosing a path of **structural simplicity and engineering elegance**.

---

## Conclusion: Conscious Comfort

For me, switching to Nuxt wasn’t just changing tools — it was returning to a natural work rhythm.  
When a project reads like a book.  
When a template is a template, not a render function.  
When you can think about logic again instead of syntax.

**Nuxt isn’t a trendy choice — it’s an engineering one.**  
It has nothing unnecessary, yet everything you need to write clean, fast, and enjoyable code.
