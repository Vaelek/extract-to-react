var he = require('he'),
    htmlStringToNodesArray = require('./html-string-to-nodes');

module.exports = function prettyPrintHtml(html, cropLength = 20, delimiter = '...') {
  return htmlStringToNodesArray(html).map(el => {
    var wrappingTags = el.outerHTML.split(el.innerHTML);
    // TODO: Do this in CSS with overflow:elipses
    if (wrappingTags[0].length > cropLength) {
      wrappingTags[0] = wrappingTags[0].slice(0, cropLength - (delimiter.length + 1)) + delimiter + '>';
    }
    var shortHtml = wrappingTags.join(delimiter);
    return he.escape(shortHtml);
  })
}