// Copyright 2020, Ryan Pavlik <ryan.pavlik@gmail.com>
// SPDX-License-Identifier: MIT

/** Get a Date for today.
 * @return {Date}
*/
export function today() {
  return new Date(Date.now());
}
/** Get a Date for tomorrow.
 * @return {Date}
 */
export function tomorrow() {
  const d = new Date(Date.now());
  d.setDate(d.getDate() + 1);
  return d;
}
/** Get a Date for yesterday.
 * @return {Date}
 */
export function yesterday() {
  const d = new Date(Date.now());
  d.setDate(d.getDate() - 1);
  return d;
}

/** Get the last component of the article URL.
 * @param {Date} d Date for article URL.
 *
 * @return {String} last component of the article URL
 */
export function getArticle(d) {
  return [
    'coronavirus-pandemic-intl',
    String(d.getMonth() + 1).padStart(2, '0'),
    String(d.getDate()).padStart(2, '0'),
    '20/',
  ].join('-');
}

/** Get the desktop article URL.
 * @param {Date} d Date for article URL.
 *
 * @return {String} url, like https://www.cnn.com/world/live-news/coronavirus-pandemic-04-02-20-intl/
 */
export function getMainUrl(d) {
  return 'https://www.cnn.com/world/live-news/' + getArticle(d);
}

/** Get the AMP article URL.
 * @param {Date} d Date for article URL.
 *
 * @return {String} url
 */
export function getAMPUrl(d) {
  return 'https://amp.cnn.com/cnn/world/live-news/' + getArticle(d);
}

// Object.assign(exports, {
//   today,
//   tomorrow,
//   yesterday,
//   getArticle,
//   getAMPUrl,
//   getMainUrl,
// });
