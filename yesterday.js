!function(){"use strict";
// Copyright 2020, Ryan Pavlik <ryan.pavlik@gmail.com>
// SPDX-License-Identifier: MIT
/** Get a Date for today.
 * @return {Date}
*/
/** Get a Date for tomorrow.
 * @return {Date}
 */
/** Get a Date for yesterday.
 * @return {Date}
 */
/** Get the AMP article URL.
 * @param {Date} d Date for article URL.
 *
 * @return {String} url
 */
// Object.assign(exports, {
//   today,
//   tomorrow,
//   yesterday,
//   getArticle,
//   getAMPUrl,
//   getMainUrl,
// });
// Copyright 2020, Ryan Pavlik <ryan.pavlik@gmail.com>
// SPDX-License-Identifier: MIT
window.location=
/** Get the desktop article URL.
 * @param {Date} d Date for article URL.
 *
 * @return {String} url, like https://www.cnn.com/world/live-news/coronavirus-pandemic-04-02-20-intl/
 */
function(t){return"https://www.cnn.com/world/live-news/"+
/** Get the last component of the article URL.
 * @param {Date} d Date for article URL.
 *
 * @return {String} last component of the article URL
 */
function(t){return"coronavirus-pandemic-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0")+"-20/"}(t)}(function(){const t=new Date(Date.now());return t.setDate(t.getDate()-1),t}())}();