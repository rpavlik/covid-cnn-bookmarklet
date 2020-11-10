// Copyright 2020, Ryan Pavlik <ryan.pavlik@gmail.com>
// SPDX-License-Identifier: MIT

/** Get the last component of the article URL.
 *
 * This is the function that needs to be updated if the links start giving an
 * error 404. It appears as though the URL creation is at least somewhat manual
 * on CNN's side: they usually follow the pattern for at least a few days, but
 * then may modify it slightly.
 *
 * @param {Date} d Date for article URL.
 *
 * @return {String} last component of the article URL
 */
export function getArticle(d) {
  return [
    'coronavirus-pandemic',
    String(d.getMonth() + 1).padStart(2, '0'),
    String(d.getDate()).padStart(2, '0'),
    '20-intl',
  ].join('-');
}

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


/** Get the desktop article URL.
 *
 * Contains a call to getArticle() which does the complicated (varied)
 * part of the job. This part of the URL template seems fixed.
 *
 * @param {Date} d Date for article URL.
 *
 * @return {String} url, like https://www.cnn.com/world/live-news/coronavirus-pandemic-04-02-20-intl/
 */
export function getMainUrl(d) {
  return 'https://www.cnn.com/world/live-news/' + getArticle(d) + '/';
}

/** Get the AMP article URL.
 *
 * Contains a call to getArticle() which does the complicated (varied)
 * part of the job. This part of the URL template seems fixed.
 *
 * @param {Date} d Date for article URL.
 *
 * @return {String} url
 */
export function getAMPUrl(d) {
  return 'https://amp.cnn.com/cnn/world/live-news/' + getArticle(d) + '/';
}
