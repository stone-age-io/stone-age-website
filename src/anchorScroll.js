/**
 * Scrolling to an in-page anchor, underneath the sticky header.
 *
 * Two call sites used to hardcode 80px for this, one of them commented "fixed
 * header height" when the header is neither fixed nor a fixed height: it
 * measures 72px on a phone and 84px on a desktop, and it publishes whichever
 * it currently is as --header-height (see TheHeader). Read that instead of
 * guessing, and anything landed by this function clears the header at any size.
 */

/** Space to leave between the header and the top of the target. */
const BREATHING_ROOM = 16;

/**
 * Current header height in pixels, from the variable TheHeader publishes.
 * Falls back to the value in theme.css, and then to a number, so a caller
 * during the first frame still lands somewhere sane.
 */
export function headerOffset() {
  const published = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
  return parseInt(published, 10) || 72;
}

/**
 * Scroll an element into view below the header.
 *
 * @param {Element} el - the target
 */
export function scrollToElement(el) {
  const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset() - BREATHING_ROOM;
  window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Scroll to an element by id, if it exists yet.
 *
 * @param {string} id - element id, without the leading hash
 * @returns {boolean} whether the element was found
 */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  scrollToElement(el);
  return true;
}
