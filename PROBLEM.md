# Problem

You maintain a public-facing API used by both your own web app and a handful of
external partners who consume it directly. Traffic has grown a lot recently, and
a few of those partners occasionally hammer the API with far more requests than
intended — sometimes it's a buggy retry loop on their end. This is starting to
degrade response times for everyone else.

You need a way to cap how many requests any single client can make in a given
window, and respond sensibly when they go over it.

Assume the service currently runs as a single process, but that may not stay
true for long.

---

The API starter is in `src/`. Build your solution on top of it.

```bash
npm install
npm run dev
```
