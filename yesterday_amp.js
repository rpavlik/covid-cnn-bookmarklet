!function(){"use strict";
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
// Copyright 2020, Ryan Pavlik <ryan.pavlik@gmail.com>
// SPDX-License-Identifier: MIT
window.location=
/** Get the desktop article URL.
 *
 * Contains a call to getArticle() which does the complicated (varied)
 * part of the job. This part of the URL template seems fixed.
 *
 * @param {Date} d Date for article URL.
 *
 * @return {String} url, like https://www.cnn.com/world/live-news/coronavirus-pandemic-04-02-20-intl/
 */
/** Get the AMP article URL.
 *
 * Contains a call to getArticle() which does the complicated (varied)
 * part of the job. This part of the URL template seems fixed.
 *
 * @param {Date} d Date for article URL.
 *
 * @return {String} url
 */
function(t){return"https://amp.cnn.com/cnn/world/live-news/"+function(t){return["coronavirus-pandemic",String(t.getMonth()+1).padStart(2,"0"),String(t.getDate()).padStart(2,"0"),"20-intl"].join("-")}
/** Get a Date for today.
 * @return {Date}
*/
/** Get a Date for tomorrow.
 * @return {Date}
 */
/** Get a Date for yesterday.
 * @return {Date}
 */(t)+"/"}(function(){const t=new Date(Date.now());return t.setDate(t.getDate()-1),t}())}();