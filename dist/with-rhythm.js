var e=["h6","h5","h4","h3","h2","h1"],t="-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, “Fira Sans”, “Droid Sans”, “Helvetica Neue”, Arial, sans-serif",i=/px|r?em$/,n={goldenRatio:1.618,perfectFifth:1.5,augmentedFourth:1.414,perfectFourth:1.333,minorThird:1.2,majorSecond:1.125};exports.scales=n,exports.toString=function(e){return void 0===e&&(e={}),Object.keys(e).reduce(function(t,i){return t+(i+": ")+e[i]+";"},"")},exports.default=function(r){void 0===r&&(r={});var o=r.baseFontSize;void 0===o&&(o="16px");var a=r.baseLineHeight;void 0===a&&(a=1.5);var s=r.basefontWeight;void 0===s&&(s=400);var u=r.headerFontWeight;void 0===u&&(u=600);var v=r.baseLetterSpacing;void 0===v&&(v="-.005em");var d=r.headerLetterSpacing;void 0===d&&(d="-.025em");var h=r.headingFont;void 0===h&&(h=t);var l=r.bodyFont;void 0===l&&(l=t);var c=r.scale;void 0===c&&(c=n.perfectFourth);var f=function(e){return{value:Number.parseFloat(e),unit:i.exec(e)[0]||""}}(o),g=.8*a,p=e.reduce(function(e,t,i){var n=i+1,r=Math.pow(c,n),o=(f.value*r).toFixed(2);return e[t]={"font-family":h,"font-weight":u,"letter-spacing":d,"font-size":""+o+f.unit,"line-height":g,margin:"0 0 "+f.value*n+f.unit+" 0 "},e},{});return Object.assign({root:{"font-smoothing":"antialiased","text-rendering":"optimizeLegibility","font-style":"normal","font-family":l,"line-height":a,"font-weight":s,"letter-spacing":v}},p)};
//# sourceMappingURL=with-rhythm.js.map