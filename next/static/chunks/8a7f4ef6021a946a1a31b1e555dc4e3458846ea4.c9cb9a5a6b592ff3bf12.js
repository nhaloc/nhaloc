(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0b+E":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"initialize",(function(){return Z})),n.d(r,"ga",(function(){return G})),n.d(r,"set",(function(){return R})),n.d(r,"send",(function(){return W})),n.d(r,"pageview",(function(){return U})),n.d(r,"modalview",(function(){return Y})),n.d(r,"timing",(function(){return Q})),n.d(r,"event",(function(){return $})),n.d(r,"exception",(function(){return H})),n.d(r,"plugin",(function(){return X})),n.d(r,"outboundLink",(function(){return B})),n.d(r,"testModeAPI",(function(){return K})),n.d(r,"default",(function(){return ee}));var a=n("q1tI"),o=n.n(a),i=n("17x9"),s=n.n(i);function c(e){console.warn("[react-ga]",e)}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h="_blank",y=1,v=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return r=this,a=(e=p(t)).call.apply(e,[this].concat(i)),n=!a||"object"!==u(a)&&"function"!==typeof a?g(r):a,m(g(n),"handleClick",(function(e){var r=n.props,a=r.target,o=r.eventLabel,i=r.to,s=r.onClick,c=r.trackerNames,u={label:o},l=a!==h,f=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===y);l&&f?(e.preventDefault(),t.trackLink(u,(function(){window.location.href=i}),c)):t.trackLink(u,(function(){}),c),s&&s(e)})),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},f(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===h&&(n.rel="noopener noreferrer"),delete n.eventLabel,delete n.trackerNames,o.a.createElement("a",n)}}])&&d(n.prototype,r),a&&d(n,a),t}(a.Component);function w(e){return e.replace(/^\s+|\s+$/g,"")}m(v,"trackLink",(function(){c("ga tracking not enabled")})),m(v,"propTypes",{eventLabel:s.a.string.isRequired,target:s.a.string,to:s.a.string,onClick:s.a.func,trackerNames:s.a.arrayOf(s.a.string)}),m(v,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var O=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;var j="REDACTED (Potential Email Address)";function k(e,t){return function(e){return"string"===typeof e&&-1!==e.indexOf("@")}(e)?(c("This arg looks like an email address, redacting."),j):t?w(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(O)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})):e}var x=function(e){var t,n,r,a,o,i,s,c="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?c=e.gaAddress:e&&e.debug&&(c="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",a=c,o="ga",t.GoogleAnalyticsObject=o,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,i=n.createElement(r),s=n.getElementsByTagName(r)[0],i.async=1,i.src=a,s.parentNode.insertBefore(i,s)};function E(e){console.info("[react-ga]",e)}var N=[],A={calls:N,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];N.push([].concat(t))},resetCalls:function(){N.length=0}};function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var C="undefined"===typeof window||"undefined"===typeof document,L=!1,q=!0,z=!1,M=!0,V=function(){var e;return z?A.ga.apply(A,arguments):!C&&(window.ga?(e=window).ga.apply(e,arguments):c("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function _(e){return k(e,q)}function F(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0];if("function"===typeof V){if("string"!==typeof a)return void c("ga command must be a string");!M&&Array.isArray(e)||V.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){V.apply(void 0,D(["".concat(e,".").concat(a)].concat(n.slice(1))))}))}}function J(e,t){e?t&&(t.debug&&!0===t.debug&&(L=!0),!1===t.titleCase&&(q=!1),t.useExistingGa)||(t&&t.gaOptions?V("create",e,t.gaOptions):V("create",e,"auto")):c("gaTrackingID is required in initialize()")}function Z(e,t){if(t&&!0===t.testMode)z=!0;else{if(C)return!1;t&&!0===t.standardImplementation||x(t)}return M=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach((function(e){"object"===S(e)?J(e.trackingId,e):c("All configs must be an object")})):J(e,t),!0}function G(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(V.apply(void 0,t),L&&(E("called ga('arguments');"),E("with arguments: ".concat(JSON.stringify(t))))),window.ga}function R(e,t){e?"object"===S(e)?(0===Object.keys(e).length&&c("empty `fieldsObject` given to .set()"),F(t,"set",e),L&&(E("called ga('set', fieldsObject);"),E("with fieldsObject: ".concat(JSON.stringify(e))))):c("Expected `fieldsObject` arg to be an Object"):c("`fieldsObject` is required in .set()")}function W(e,t){F(t,"send",e),L&&(E("called ga('send', fieldObject);"),E("with fieldObject: ".concat(JSON.stringify(e))),E("with trackers: ".concat(JSON.stringify(t))))}function U(e,t,n){if(e){var r=w(e);if(""!==r){var a={};if(n&&(a.title=n),F(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},a)),L){E("called ga('send', 'pageview', path);");var o="";n&&(o=" and title: ".concat(n)),E("with path: ".concat(r).concat(o))}}else c("path cannot be an empty string in .pageview()")}else c("path is required in .pageview()")}function Y(e,t){if(e){var n,r="/"===(n=w(e)).substring(0,1)?n.substring(1):n;if(""!==r){var a="/modal/".concat(r);F(t,"send","pageview",a),L&&(E("called ga('send', 'pageview', path);"),E("with path: ".concat(a)))}else c("modalName cannot be an empty string or a single / in .modalview()")}else c("modalName is required in .modalview(modalName)")}function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,a=e.label,o=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"===typeof r){var i={hitType:"timing",timingCategory:_(t),timingVar:_(n),timingValue:r};a&&(i.timingLabel=_(a)),W(i,o)}else c("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,a=e.value,o=e.nonInteraction,i=e.transport,s=T(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:_(t),eventAction:_(n)};r&&(l.eventLabel=_(r)),"undefined"!==typeof a&&("number"!==typeof a?c("Expected `args.value` arg to be a Number."):l.eventValue=a),"undefined"!==typeof o&&("boolean"!==typeof o?c("`args.nonInteraction` must be a boolean."):l.nonInteraction=o),"undefined"!==typeof i&&("string"!==typeof i?c("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&c("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=i)),Object.keys(s).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){l[e]=s[e]})),Object.keys(s).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){l[e]=s[e]})),W(l,u)}else c("args.category AND args.action are required in event()")}function H(e,t){var n=e.description,r=e.fatal,a={hitType:"exception"};n&&(a.exDescription=_(n)),"undefined"!==typeof r&&("boolean"!==typeof r?c("`args.fatal` must be a boolean."):a.exFatal=r),W(a,t)}var X={require:function(e,t,n){if(e){var r=w(e);if(""!==r){var a=n?"".concat(n,".require"):"require";if(t){if("object"!==S(t))return void c("Expected `options` arg to be an Object");0===Object.keys(t).length&&c("Empty `options` given to .require()"),G(a,r,t),L&&E("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else G(a,r),L&&E("called ga('require', '".concat(r,"');"))}else c("`name` cannot be an empty string in .require()")}else c("`name` is required in .require()")},execute:function(e,t){var n,r;if(1===(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!==typeof e)c("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)c("Expected `action` arg to be a String.");else{var a="".concat(e,":").concat(t);n=n||null,r&&n?(G(a,r,n),L&&(E("called ga('".concat(a,"');")),E('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(G(a,n),L&&(E("called ga('".concat(a,"');")),E("with payload: ".concat(JSON.stringify(n))))):(G(a),L&&E("called ga('".concat(a,"');")))}}};function B(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:_(e.label)},a=!1,o=setTimeout((function(){a=!0,t()}),250);r.hitCallback=function(){clearTimeout(o),a||t()},W(r,n)}else c("args.label is required in outboundLink()");else c("hitCallback function is required")}var K=A,ee={initialize:Z,ga:G,set:R,send:W,pageview:U,modalview:Y,timing:Q,event:$,exception:H,plugin:X,outboundLink:B,testModeAPI:A};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"initialize",(function(){return re})),n.d(t,"ga",(function(){return ae})),n.d(t,"set",(function(){return oe})),n.d(t,"send",(function(){return ie})),n.d(t,"pageview",(function(){return se})),n.d(t,"modalview",(function(){return ce})),n.d(t,"timing",(function(){return ue})),n.d(t,"event",(function(){return le})),n.d(t,"exception",(function(){return fe})),n.d(t,"plugin",(function(){return de})),n.d(t,"outboundLink",(function(){return pe})),n.d(t,"testModeAPI",(function(){return ge})),n.d(t,"OutboundLink",(function(){return be}));var re=Z,ae=G,oe=R,ie=W,se=U,ce=Y,ue=Q,le=$,fe=H,de=X,pe=B,ge=K;v.origTrackLink=v.trackLink,v.trackLink=B;var be=v;t.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(n,!0).forEach((function(t){ne(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{OutboundLink:be})},"1Yj4":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),i=n.n(o),s=n("17x9"),c=n.n(s),u=n("TSYQ"),l=n.n(u),f=n("33Jr"),d={tag:f.m,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.fluid,s=e.tag,c=Object(a.a)(e,["className","cssModule","fluid","tag"]),u="container";!0===o?u="container-fluid":o&&(u="container-"+o);var d=Object(f.i)(l()(t,u),n);return i.a.createElement(s,Object(r.a)({},c,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},"33Jr":function(e,t,n){"use strict";n.d(t,"l",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return f})),n.d(t,"m",(function(){return p})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return b})),n.d(t,"h",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return y})),n.d(t,"e",(function(){return v}));var r,a=n("17x9"),o=n.n(a);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function c(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function l(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function f(e,t){for(var n,r=Array.isArray(t)?t:[t],a=r.length,o={};a>0;)o[n=r[a-=1]]=e[n];return o}var d="object"===typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof d))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var p=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),g={Fade:150,Collapse:350,Modal:300,Carousel:600},b=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],m={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},h=!("undefined"===typeof window||!window.document||!window.document.createElement);function y(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}var v=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},Acaz:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("ln6h"),a=n.n(r),o=n("kOwS"),i=n("0iUn"),s=n("sLSF"),c=n("MI3g"),u=n("a7VT"),l=n("Tit0"),f=n("q1tI"),d=n.n(f),p=n("LvQh"),g=n("O+DW"),b=d.a.createElement,m=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(c.a)(this,Object(u.a)(t).call(this,e)),g.b(),n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"setupGA",value:function(){window.GA_INITIALIZED||(g.a(),window.GA_INITIALIZED=!0)}},{key:"adminAccessOnly",value:function(){return b(p.a,Object(o.a)({},this.props,{navmenu:!1}),b("div",{className:"text-center pt-5 pb-5"},b("h1",{className:"display-4 mb-5"},"Access Denied"),b("p",{className:"lead"},"You must be signed in as an administrator to access this page.")))}}],[{key:"getInitialProps",value:function(e){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.req,t.abrupt("return",{lang:"en"});case 2:case"end":return t.stop()}}))}}]),t}(d.a.Component)},LvQh:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n("ln6h"),a=n.n(r),o=n("0iUn"),i=n("MI3g"),s=n("a7VT"),c=n("AT/M"),u=n("sLSF"),l=n("Tit0"),f=n("MX0m"),d=n.n(f),p=n("q1tI"),g=n.n(p),b=(n("nOHt"),n("YFqc")),m=n.n(b),h=n("1Yj4"),y=n("rhny"),v=n("kiQV"),w=n("Foj8"),O=g.a.createElement,j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={navOpen:!1,modal:!1,providers:null},n.toggleModal=n.toggleModal.bind(Object(c.a)(n)),n}return Object(l.a)(t,e),Object(u.a)(t,null,[{key:"propTypes",value:function(){return{session:g.a.PropTypes.object.isRequired,providers:g.a.PropTypes.object.isRequired,children:g.a.PropTypes.object.isRequired,fluid:g.a.PropTypes.boolean,navmenu:g.a.PropTypes.boolean,signinBtn:g.a.PropTypes.boolean}}}]),Object(u.a)(t,[{key:"toggleModal",value:function(e){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e&&e.preventDefault(),this.state.modal,this.setState({providers:this.state.providers,modal:!this.state.modal});case 3:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){return this.props.nobaner||O("div",{className:"text-light rounded-0 jumbot",style:{backgroundColor:"rgba(73,155,234,1)",background:"radial-gradient(ellipse at center, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%)",boxShadow:"inset 0 0 100px rgba(0,0,0,0.1)",padding:5,marginLeft:"30px"}},O(h.a,{className:"mt-2 mb-2"},O("h1",{style:{fontWeight:300},className:"jsx-4249578830 display-2 mb-3"},O("span",{style:{fontWeight:300},className:"jsx-4249578830"},O("span",{className:"jsx-4249578830 mr-3"},"\u25b2"),O("br",{className:"jsx-4249578830 v-block d-sm-none"}),"T\u1eeb \u0111i\u1ec3n"),O("br",{className:"jsx-4249578830 v-block d-lg-none"})," d\u1ecbch \u0111o\u1ea1n"),O(d.a,{id:"4249578830"},[".display-2.jsx-4249578830{border-radius:0.2rem;text-shadow:0 5px 10px rgba(0,0,0,0.3);color:rgba(255,255,255,0.9);font-size:3em;}",".lead.jsx-4249578830{font-size:2em;opacity:0.7;}","@media (max-width:767px){.display-2.jsx-4249578830{font-size:2em;margin-bottom:1em;}.lead.jsx-4249578830{font-size:1.5em;}}"]))),O(g.a.Fragment,null,O(w.a,null),O(k,{navmenu:this.props.navmenu,fluid:this.props.fluid,container:this.props.container},this.props.children),O(h.a,{fluid:this.props.fluid},O("hr",{className:"mt-3"}),O("p",{className:"text-muted small"},O(m.a,{href:"https://github.com/iaincollins/nextjs-starter"},O("a",{className:"text-muted font-weight-bold"},O("span",{className:"icon ion-logo-github"})," T\u1eeb \u0110i\u1ec3n D\u1ecbch ",v.version)),O("span",null," x\xe2y d\u1ef1ng b\u1edfi \u0110\u1ee9c C\u01b0\u1eddng "),O(m.a,{href:"mailto:tudiendich@gmail.com"},O("a",{className:"text-muted font-weight-bold"},"tudiendich@gmail.com")),O("span",null," Trang web h\u1ecdc ch\u1eef H\xe1n mi\u1ec5n ph\xed  "),O(m.a,{href:"http://nhidonghocphat.com"},O("a",{className:"text-muted font-weight-bold",target:"blank"},"http://nhidonghocphat.com")),".",O("span",{className:"ml-2"},"\xa9 ",(new Date).getYear()+1900,"."))))}}]),t}(g.a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return!1===this.props.container?O(g.a.Fragment,null,this.props.children):!1===this.props.navmenu?O(h.a,{fluid:this.props.fluid,style:{marginTop:"1em"}},this.props.children):O(h.a,{fluid:this.props.fluid,style:{marginTop:"1em"}},O(y.a,{xs:"12",md:"9",lg:"10"},this.props.children))}}]),t}(g.a.Component)},"O+DW":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s}));var r;n("kMCw");r=n("0b+E");var a=function(){window.GA_INITIALIZED||(o(),window.GA_INITIALIZED=!0)},o=function(){window.GA_INITIALIZED||(r.initialize("UA-127429119-4",{titleCase:!1}),window.GA_INITIALIZED=!0)},i=function(e,t,n){r&&r.event({category:e,action:t,label:n})},s=function(e){r&&r.pageview(e)}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},UXZV:function(e,t,n){e.exports=n("UbbE")},UbbE:function(e,t,n){n("o8NH"),e.exports=n("WEpk").Object.assign},kIZS:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),i=n("a7VT"),s=n("Tit0"),c=n("MX0m"),u=n.n(c),l=n("q1tI"),f=n.n(l),d=f.a.createElement,p=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return this.props.fullscreen?d(f.a.Fragment,null,d(u.a,{id:"3321740257"},[".circle-loader{position:absolute;top:50%;left:50%;width:50%;z-index:100;text-align:center;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}",".circle-loader .circle{fill:transparent;stroke:rgba(0,0,0,0.2);stroke-width:4px;-webkit-animation:dash 2s ease infinite,rotate 2s linear infinite;animation:dash 2s ease infinite,rotate 2s linear infinite;}","@-webkit-keyframes dash{0%{stroke-dasharray:1,95;stroke-dashoffset:0;}50%{stroke-dasharray:85,95;stroke-dashoffset:-25;}100%{stroke-dasharray:85,95;stroke-dashoffset:-93;}}","@keyframes dash{0%{stroke-dasharray:1,95;stroke-dashoffset:0;}50%{stroke-dasharray:85,95;stroke-dashoffset:-25;}100%{stroke-dasharray:85,95;stroke-dashoffset:-93;}}","@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","@keyframes rotate{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]),d("span",{className:"jsx-3321740257 circle-loader"},d("svg",{width:"60",height:"60",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"jsx-3321740257 circle"},d("circle",{cx:"30",cy:"30",r:"15",className:"jsx-3321740257"})))):d(f.a.Fragment,null,d(u.a,{id:"2337374762"},[".circle-loader{display:block;text-center;padding-left:50%;}",".circle-loader .circle{position:relative;left:-30px;fill:transparent;stroke:rgba(0,0,0,0.2);stroke-width:4px;-webkit-animation:dash 2s ease infinite,rotate 2s linear infinite;animation:dash 2s ease infinite,rotate 2s linear infinite;}","@-webkit-keyframes dash{0%{stroke-dasharray:1,95;stroke-dashoffset:0;}50%{stroke-dasharray:85,95;stroke-dashoffset:-25;}100%{stroke-dasharray:85,95;stroke-dashoffset:-93;}}","@keyframes dash{0%{stroke-dasharray:1,95;stroke-dashoffset:0;}50%{stroke-dasharray:85,95;stroke-dashoffset:-25;}100%{stroke-dasharray:85,95;stroke-dashoffset:-93;}}","@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","@keyframes rotate{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]),d("span",{className:"jsx-2337374762 circle-loader"},d("svg",{width:"60",height:"60",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"jsx-2337374762 circle"},d("circle",{cx:"30",cy:"30",r:"15",className:"jsx-2337374762"}))))}}]),t}(f.a.Component)},kOwS:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("UXZV"),a=n.n(r);function o(){return(o=a.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},kiQV:function(e){e.exports=JSON.parse('{"name":"TuDienDich","version":"1.0.10","description":"T\u1eeb \u0110i\u1ec3n D\u1ecbch, c\xf4ng c\u1ee5 h\u1ed7 tr\u1ee3 d\u1ecbch v\u0103n b\u1ea3n thu\u1eadn ti\u1ec7n","author":"\u0110\u1ee9c C\u01b0\u1eddng <tudiendich@gmail.com>","scripts":{"lint":"eslint --fix --ext .js action components lib pages reducer saga utils","lint:watch":"esw -w --fix action components lib pages reducer saga util","start":"NODE_ENV=production PORT=3003 node tudien.js","dev":"node tudien.js","build":"next build","be":"next build && next export","beo":"next build && next export -o docs","mp3":"node speech.js && cd /Volumes/data/Works/english/srcEng/eng-story/english/mp3/ && git add -A && git commit -m \'update\' && git push origin master && cd /Volumes/data/VNDS/rd/cash-flow"},"license":"ISC","dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.29","@fortawesome/free-solid-svg-icons":"^5.13.1","@fortawesome/react-fontawesome":"^0.1.11","accounting":"^0.4.1","axios":"^0.19.2","bootstrap":"^4.4.1","chinese-to-pinyin":"^1.3.1","dotenv":"^8.2.0","download-file":"^0.1.5","express":"^4.17.1","google-tts-api":"^0.0.4","ionicons":"^5.0.1","isomorphic-fetch":"^2.2.1","lodash":"^4.17.15","lodash.keys":"^4.2.0","next":"latest","next-redux-saga":"^4.1.2","next-redux-wrapper":"^4.0.1","next-routes":"^1.4.2","node-sass":"^4.11.0","raw-loader":"^0.5.1","react":"^16.12.0","react-dom":"^16.12.0","react-ga":"^2.7.0","react-redux":"^7.1.3","react-render-html":"^0.6.0","react-syntax-highlighter":"^12.2.1","react-textarea-autosize":"^7.1.2","reactstrap":"^8.4.1","redux":"^4.0.5","redux-devtools-extension":"^2.13.8","redux-saga":"^1.1.3","sass-loader":"^8.0.2","styled-components":"^5.0.1"},"devDependencies":{"eslint":"^6.8.0","eslint-plugin-react":"^7.18.3"}}')},o8NH:function(e,t,n){var r=n("Y7ZC");r(r.S+r.F,"Object",{assign:n("kwZ1")})},rhny:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),i=n.n(o),s=n("17x9"),c=n.n(s),u=n("TSYQ"),l=n.n(u),f=n("33Jr"),d=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:d,offset:d})]),g={tag:f.m,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,o=e.widths,s=e.tag,c=Object(a.a)(e,["className","cssModule","widths","tag"]),u=[];o.forEach((function(t,r){var a=e[t];if(delete c[t],a||""===a){var o=!r;if(Object(f.g)(a)){var i,s=o?"-":"-"+t+"-",d=m(o,t,a.size);u.push(Object(f.i)(l()(((i={})[d]=a.size||""===a.size,i["order"+s+a.order]=a.order||0===a.order,i["offset"+s+a.offset]=a.offset||0===a.offset,i)),n))}else{var p=m(o,t,a);u.push(p)}}})),u.length||u.push("col");var d=Object(f.i)(l()(t,u),n);return i.a.createElement(s,Object(r.a)({},c,{className:d}))};h.propTypes=g,h.defaultProps=b,t.a=h},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);