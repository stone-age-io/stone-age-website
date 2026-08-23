<template>
  <a href="/" @click="handleClick">
    <slot />
  </a>
</template>

<script setup>
/**
 * A link to the home page that knows when it is already there.
 *
 * Every logo and wordmark on the site points home, and home is a real URL, so
 * this renders href="/" rather than href="#": middle-click, cmd-click and
 * "copy link address" then all give the home page instead of whatever page the
 * reader happens to be on, which is exactly what "#" gets wrong.
 *
 * On the home page itself there is nowhere to navigate to, so scroll to the top
 * instead of reloading, and drop a leftover hash so the URL stops claiming a
 * section the reader has just left. A modified click means "open this somewhere
 * else" and is left to the browser.
 *
 * Callers pass their own classes and aria-label; both fall through to the
 * anchor. A caller with extra work to do on the click — the mobile menu has to
 * close itself — can bind @click as well, and both handlers run.
 */

/**
 * Paths that already are the home page. Vercel is configured with cleanUrls,
 * so the deployed home is "/" and index.html is only reachable that way; the
 * dev server also answers "/index.html" directly.
 */
const HOME_PATHS = ['/', '/index.html'];

const handleClick = (event) => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (!HOME_PATHS.includes(window.location.pathname)) return;

  event.preventDefault();
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
  }

  // After the rest of this click's handlers, not during them: the mobile menu
  // holds the page with body overflow hidden and only releases it in its own
  // handler, which runs second. Scrolling a locked page is at best a coin flip.
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
};
</script>
