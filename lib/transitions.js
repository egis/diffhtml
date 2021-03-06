/**
 * Transition states
 * =================
 *
 * - attached - For when elements come into the DOM. The callback triggers
 * ------------ immediately after the element enters the DOM. It is called with
 *              the element as the only argument.
 *
 * - detached - For when elements are removed from the DOM. The callback
 * ------------ triggers just before the element leaves the DOM. It is called
 *              with the element as the only argument.
 *
 * - replaced - For when elements are replaced in the DOM. The callback
 * ------------ triggers after the new element enters the DOM, and before the
 *              old element leaves. It is called with old and new elements as
 *              arguments, in that order.
 *
 * - attributeChanged - Triggered when an element's attribute has changed. The
 * -------------------- callback triggers after the attribute has changed in
 *                      the DOM. It is called with the element, the attribute
 *                      name, old value, and current value.
 *
 * - textChanged - Triggered when an element's `textContent` chnages. The
 * --------------- callback triggers after the textContent has changed in the
 *                 DOM. It is called with the element, the old value, and
 *                 current value.
 */
export var transitionStates = {
  attached: [],
  detached: [],
  replaced: [],
  attributeChanged: [],
  textChanged: []
};
