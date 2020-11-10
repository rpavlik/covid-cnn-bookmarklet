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
window.location="https://amp.cnn.com/cnn/world/live-news/"+function(n){return["coronavirus-pandemic",String(n.getMonth()+1).padStart(2,"0"),String(n.getDate()).padStart(2,"0"),"20-intl"].join("-")}
/** Get a Date for today.
 * @return {Date}
*/(new Date(Date.now()))+"/"}();