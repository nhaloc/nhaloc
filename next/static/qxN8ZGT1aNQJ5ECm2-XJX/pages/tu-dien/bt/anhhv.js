(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"3OM0":function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),a=n("q1tI"),r=n.n(a),s=n("17x9"),c=n.n(s),l=n("TSYQ"),u=n.n(l),h=n("33Jr"),d=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:d,order:d,offset:d})]),p={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:h.m,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},b=function(e){var t=e.className,n=e.cssModule,a=e.hidden,s=e.widths,c=e.tag,l=e.check,d=e.size,f=e.for,p=Object(i.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];s.forEach((function(t,o){var i=e[t];if(delete p[t],i||""===i){var a,r=!o;if(Object(h.g)(i)){var s,c=r?"-":"-"+t+"-";a=m(r,t,i.size),g.push(Object(h.i)(u()(((s={})[a]=i.size||""===i.size,s["order"+c+i.order]=i.order||0===i.order,s["offset"+c+i.offset]=i.offset||0===i.offset,s))),n)}else a=m(r,t,i),g.push(a)}}));var b=Object(h.i)(u()(t,!!a&&"sr-only",!!l&&"form-check-label",!!d&&"col-form-label-"+d,g,!!g.length&&"col-form-label"),n);return r.a.createElement(c,Object(o.a)({htmlFor:f},p,{className:b}))};b.propTypes=p,b.defaultProps=g,t.a=b},HLdI:function(e,t,n){var o=n("vwuL"),i=n("U+KD"),a=n("B+OT"),r=n("Y7ZC"),s=n("93I4"),c=n("5K7Z");r(r.S,"Reflect",{get:function e(t,n){var r,l,u=arguments.length<3?t:arguments[2];return c(t)===u?t[n]:(r=o.f(t,n))?a(r,"value")?r.value:void 0!==r.get?r.get.call(u):void 0:s(l=i(t))?e(l,n,u):void 0}})},"JHy+":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var o=n("kOwS"),i=n("9Jkg"),a=n.n(i),r=n("ln6h"),s=n.n(r),c=n("0iUn"),l=n("MI3g"),u=n("AT/M"),h=n("sLSF"),d=n("Tit0"),f=n("a7VT"),p=n("KogW"),g=n("q1tI"),m=n.n(g),b=n("WWLJ"),v=n.n(b),w=n("1Yj4"),x=n("ok1R"),O=n("jrRI"),y=n("3OM0"),j=n("rhny"),C=n("vDqi"),z=n.n(C),H=n("o5PN"),_=n("Acaz"),k=n("O+DW"),M=(n("kIZS"),n("LvQh")),R=n("kMCw"),S=m.a.createElement;function N(e,t){var n,o,i,a="",r=0;for(r=0;r<t.length;r++)(i=e[t[r]])?(n=i.hv.trim()).indexOf(" ")>0&&(n="("+n+")"):(n="",o+=","+t[r]),a+=n+" ";return o&&(k.c("Report","newWordImport",o),console.log("T\u1eeb \u0111i\u1ec3n thi\u1ebfu",o)),a.trim()}var L=function(e){function t(e){var n;Object(c.a)(this,t),n=Object(l.a)(this,Object(f.a)(t).call(this,e));e.words;return n.state={loading:!0,content:"",chinesse:"1\tmarketing concept\t\u8425\u9500\u89c2\u5ff5\tkh\xe1i ni\u1ec7m ti\u1ebfp th\u1ecb",hanViet:"",bacKinh:"",dict:{}},z.a.get("https://raw.githubusercontent.com/thanglamhuu/nddhp.github.io/master/dictClient.json").then((function(e){n.setState({dict:e.data,loading:!1})})),n.onChangeHandlerChuHan=n.onChangeHandlerChuHan.bind(Object(u.a)(n)),n}return Object(d.a)(t,e),Object(h.a)(t,null,[{key:"getInitialProps",value:function(e){var n,o,i;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.req,o=e.query,Object(p.a)(Object(f.a)(t),"getInitialProps",this).call(this,{req:n,query:o}),a.next=4,s.a.awrap(Object(p.a)(Object(f.a)(t),"getInitialProps",this).call(this,{req:n}));case 4:return(i=a.sent).word=o.id,a.abrupt("return",i);case 7:case"end":return a.stop()}}),null,this)}}]),Object(h.a)(t,[{key:"onChangeHandlerChuHan",value:function(e){var t=this.state.dict,n=e.target.value,o=[],i=n.split("\n"),r=[],s="",c=0;for(c=0;c<i.length;c++)try{"",r=(s=i[c].trim()).split("\t"),o.push({chuHan:r[2].trim(),hanViet:N(t,r[2].trim()),bacKinh:v()(r[2].trim()),nghia:r[3].trim()})}catch(e){console.log(s,r,e)}this.setState({chinesse:n,chuHans:Object(R.g)(a()(o),"},{","},\n{")})}},{key:"render",value:function(){var e=this.state,t=e.chuHans,n=e.chinesse;return k.d("bt-convert"),S(M.a,Object(o.a)({},this.props,{navmenu:!1,container:!1}),S(w.a,null,S(x.a,null,S("h2",{className:"h1Title"},"T\u1ea1o danh s\xe1ch t\u1eeb import")),S(x.a,null,S(O.a,{style:{width:"100%"}},S(y.a,{for:"inputChuHan"},"Nh\u1eadp n\u1ed9i dung ch\u1eef H\xe1n"),S(H.a,{className:"txtAutoSize",id:"inputChuHan",placeholder:"Ch\u1eef H\xe1n",value:n,onChange:this.onChangeHandlerChuHan}))),S(j.a,null,S("h4",null,"K\u1ebft qu\u1ea3"),S("span",null,"Vui l\xf2ng click l\xean t\u1eebng ch\u1eef \u0111\u1ec3 xem t\u1eeb \u0111i\u1ec3n"),S(H.a,{className:"txtAutoSize",id:"inputChuHan",placeholder:"Ch\u1eef H\xe1n",value:t}))))}}]),t}(_.a)},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},KogW:function(e,t,n){"use strict";var o=n("Jo+v"),i=n.n(o),a=n("j+vE"),r=n.n(a),s=n("a7VT");function c(e,t,n){return(c="undefined"!==typeof Reflect&&r.a?r.a:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(s.a)(e)););return e}(e,t);if(o){var a=i()(o,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}n.d(t,"a",(function(){return c}))},PXqa:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tu-dien/bt/anhhv",function(){return n("JHy+")}])},SRBb:function(e,t,n){n("HLdI"),e.exports=n("WEpk").Reflect.get},WWLJ:function(e,t,n){e.exports=n("FGuI").default},dI71:function(e,t,n){"use strict";function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return o}))},"j+vE":function(e,t,n){e.exports=n("SRBb")},jrRI:function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),a=n("q1tI"),r=n.n(a),s=n("17x9"),c=n.n(s),l=n("TSYQ"),u=n.n(l),h=n("33Jr"),d={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:h.m,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,n=e.cssModule,a=e.row,s=e.disabled,c=e.check,l=e.inline,d=e.tag,f=Object(i.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(h.i)(u()(t,!!a&&"row",c?"form-check":"form-group",!(!c||!l)&&"form-check-inline",!(!c||!s)&&"disabled"),n);return"fieldset"===d&&(f.disabled=s),r.a.createElement(d,Object(o.a)({},f,{className:p}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},o5PN:function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),a=n("JX7q"),r=n("dI71"),s=n("q1tI"),c=(n("17x9"),!!document.documentElement.currentStyle),l={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},u=["letter-spacing","line-height","font-family","font-weight","font-size","font-style","tab-size","text-rendering","text-transform","width","text-indent","padding-top","padding-right","padding-bottom","padding-left","border-top-width","border-right-width","border-bottom-width","border-left-width","box-sizing"],h={},d=document.createElement("textarea"),f=function(e){Object.keys(l).forEach((function(t){e.style.setProperty(t,l[t],"important")}))};function p(e,t,n,o,i){void 0===n&&(n=!1),void 0===o&&(o=null),void 0===i&&(i=null),null===d.parentNode&&document.body.appendChild(d);var a=function(e,t,n){void 0===n&&(n=!1);if(n&&h[t])return h[t];var o=window.getComputedStyle(e);if(null===o)return null;var i=u.reduce((function(e,t){return e[t]=o.getPropertyValue(t),e}),{}),a=i["box-sizing"];if(""===a)return null;c&&"border-box"===a&&(i.width=parseFloat(i.width)+parseFloat(o["border-right-width"])+parseFloat(o["border-left-width"])+parseFloat(o["padding-right"])+parseFloat(o["padding-left"])+"px");var r=parseFloat(i["padding-bottom"])+parseFloat(i["padding-top"]),s=parseFloat(i["border-bottom-width"])+parseFloat(i["border-top-width"]),l={sizingStyle:i,paddingSize:r,borderSize:s,boxSizing:a};n&&(h[t]=l);return l}(e,t,n);if(null===a)return null;var r=a.paddingSize,s=a.borderSize,l=a.boxSizing,p=a.sizingStyle;Object.keys(p).forEach((function(e){d.style[e]=p[e]})),f(d),d.value=e.value||e.placeholder||"x";var g=-1/0,m=1/0,b=d.scrollHeight;"border-box"===l?b+=s:"content-box"===l&&(b-=r),d.value="x";var v=d.scrollHeight-r,w=Math.floor(b/v);return null!==o&&(g=v*o,"border-box"===l&&(g=g+r+s),b=Math.max(g,b)),null!==i&&(m=v*i,"border-box"===l&&(m=m+r+s),b=Math.min(m,b)),{height:b,minHeight:g,maxHeight:m,rowCount:Math.floor(b/v),valueRowCount:w}}d.setAttribute("tab-index","-1"),d.setAttribute("aria-hidden","true"),f(d);var g=function(){},m=0,b=function(e){function t(t){var n;return(n=e.call(this,t)||this)._onRef=function(e){n._ref=e;var t=n.props.inputRef;"function"!==typeof t?t.current=e:t(e)},n._onChange=function(e){n._controlled||n._resizeComponent(),n.props.onChange(e,Object(a.a)(n))},n._resizeComponent=function(e){void 0===e&&(e=g);var t=p(n._ref,n._uid,n.props.useCacheForDOMMeasurements,n.props.minRows,n.props.maxRows);if(null!==t){var o=t.height,i=t.minHeight,a=t.maxHeight,r=t.rowCount,s=t.valueRowCount;n.rowCount=r,n.valueRowCount=s,n.state.height===o&&n.state.minHeight===i&&n.state.maxHeight===a?e():n.setState({height:o,minHeight:i,maxHeight:a},e)}else e()},n.state={height:t.style&&t.style.height||0,minHeight:-1/0,maxHeight:1/0},n._uid=m++,n._controlled=void 0!==t.value,n._resizeLock=!1,n}Object(r.a)(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=(e.inputRef,e.maxRows,e.minRows,e.onHeightChange,e.useCacheForDOMMeasurements,Object(i.a)(e,["inputRef","maxRows","minRows","onHeightChange","useCacheForDOMMeasurements"]));return t.style=Object(o.a)({},t.style,{height:this.state.height}),Math.max(t.style.maxHeight||1/0,this.state.maxHeight)<this.state.height&&(t.style.overflow="hidden"),Object(s.createElement)("textarea",Object(o.a)({},t,{onChange:this._onChange,ref:this._onRef}))},n.componentDidMount=function(){var e=this;this._resizeComponent(),this._resizeListener=function(){e._resizeLock||(e._resizeLock=!0,e._resizeComponent((function(){e._resizeLock=!1})))},window.addEventListener("resize",this._resizeListener)},n.componentDidUpdate=function(e,t){e!==this.props&&this._resizeComponent(),this.state.height!==t.height&&this.props.onHeightChange(this.state.height,this)},n.componentWillUnmount=function(){window.removeEventListener("resize",this._resizeListener),function(e){delete h[e]}(this._uid)},t}(s.Component);b.defaultProps={inputRef:g,onChange:g,onHeightChange:g,useCacheForDOMMeasurements:!1},t.a=b},ok1R:function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),a=n("q1tI"),r=n.n(a),s=n("17x9"),c=n.n(s),l=n("TSYQ"),u=n.n(l),h=n("33Jr"),d=c.a.oneOfType([c.a.number,c.a.string]),f={tag:h.m,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,s=e.tag,c=e.form,l=e.widths,d=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];l.forEach((function(t,n){var o=e[t];if(delete d[t],o){var i=!n;f.push(i?"row-cols-"+o:"row-cols-"+t+"-"+o)}}));var p=Object(h.i)(u()(t,a?"no-gutters":null,c?"form-row":"row",f),n);return r.a.createElement(s,Object(o.a)({},d,{className:p}))};g.propTypes=f,g.defaultProps=p,t.a=g}},[["PXqa",1,2,6,13,0,3,4,5,7,9,8]]]);