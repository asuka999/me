webpackJsonp([19],{

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(16)
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/widget/slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./slider.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./slider.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".slider {\n  position: relative;\n}\n.slider .slider-ctrl-left,\n.slider .slider-ctrl-right {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n}\n.slider .slider-ctrl-left {\n  left: 0%;\n}\n.slider .slider-ctrl-right {\n  right: 0%;\n}\n.slider-indicators {\n  padding-left: 0;\n  margin-bottom: 0;\n  margin-top: 0;\n  list-style: none;\n  position: absolute;\n  bottom: 0.625rem;\n  text-align: center;\n  width: 100%;\n}\n.slider-list {\n  list-style: none;\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n}\n.slider-list > li {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n}\n.slider-list > li.active {\n  position: static;\n  display: block;\n}\n.slider.ui {\n  min-height: 10rem;\n}\n.slider.ui .slider-list,\n.slider.ui .slider-list li,\n.slider.ui .slider-list img {\n  width: 100%;\n}\n.slider.ui .slider-ctrl-left,\n.slider.ui .slider-ctrl-right {\n  background-color: rgba(0, 0, 0, 0.1);\n  color: rgba(255, 255, 255, 0.64);\n  height: 4rem;\n  width: 2.75rem;\n  line-height: 4rem;\n  text-align: center;\n}\n.slider.ui .slider-ctrl-left:hover,\n.slider.ui .slider-ctrl-right:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n  color: rgba(255, 255, 255, 0.72);\n}\n.slider.ui .slider-ctrl-left {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.slider.ui .slider-ctrl-right {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.slider.ui .slider-indicators {\n  font-size: 0;\n}\n.slider.ui .slider-indicators li {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.72);\n  border-radius: 3px;\n  padding: 2px;\n}\n.slider.ui .slider-indicators li:not(:first-child) {\n  margin-left: 0.25rem;\n}\n.slider.ui .slider-indicators li.active:after {\n  width: 100%;\n  height: 100%;\n  display: block;\n  content: '';\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 2px;\n}\n.slider.ui-trans .slider-list > li {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  left: 0;\n  -webkit-transition: -webkit-transform 0.6s ease-in-out;\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n}\n.slider.ui-trans .slider-list > li.left {\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  display: block;\n  position: absolute;\n}\n.slider.ui-trans .slider-list > li.right {\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n  display: block;\n  position: absolute;\n}\n", "", {"version":3,"sources":["/./src/widget/slider.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;CACpB;AACD;;EAEE,mBAAmB;EACnB,SAAS;EACT,sCAA8B;UAA9B,8BAA8B;CAC/B;AACD;EACE,SAAS;CACV;AACD;EACE,UAAU;CACX;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,cAAc;EACd,OAAO;EACP,QAAQ;CACT;AACD;EACE,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,kBAAkB;CACnB;AACD;;;EAGE,YAAY;CACb;AACD;;EAEE,qCAAqC;EACrC,iCAAiC;EACjC,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,mBAAmB;CACpB;AACD;;EAEE,qCAAqC;EACrC,iCAAiC;CAClC;AACD;EACE,6BAA6B;EAC7B,gCAAgC;CACjC;AACD;EACE,4BAA4B;EAC5B,+BAA+B;CAChC;AACD;EACE,aAAa;CACd;AACD;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,4CAA4C;EAC5C,mBAAmB;EACnB,aAAa;CACd;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,YAAY;EACZ,2CAA2C;EAC3C,mBAAmB;CACpB;AACD;EACE,wCAAwC;EACxC,gCAAgC;EAChC,QAAQ;EACR,uDAAuD;EAEvD,+CAAuC;EAAvC,uCAAuC;EAAvC,2EAAuC;CACxC;AACD;EACE,4CAA4C;EAC5C,oCAAoC;EACpC,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,2CAA2C;EAC3C,mCAAmC;EACnC,eAAe;EACf,mBAAmB;CACpB","file":"slider.vue","sourcesContent":[".slider {\n  position: relative;\n}\n.slider .slider-ctrl-left,\n.slider .slider-ctrl-right {\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.slider .slider-ctrl-left {\n  left: 0%;\n}\n.slider .slider-ctrl-right {\n  right: 0%;\n}\n.slider-indicators {\n  padding-left: 0;\n  margin-bottom: 0;\n  margin-top: 0;\n  list-style: none;\n  position: absolute;\n  bottom: 0.625rem;\n  text-align: center;\n  width: 100%;\n}\n.slider-list {\n  list-style: none;\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n}\n.slider-list > li {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n}\n.slider-list > li.active {\n  position: static;\n  display: block;\n}\n.slider.ui {\n  min-height: 10rem;\n}\n.slider.ui .slider-list,\n.slider.ui .slider-list li,\n.slider.ui .slider-list img {\n  width: 100%;\n}\n.slider.ui .slider-ctrl-left,\n.slider.ui .slider-ctrl-right {\n  background-color: rgba(0, 0, 0, 0.1);\n  color: rgba(255, 255, 255, 0.64);\n  height: 4rem;\n  width: 2.75rem;\n  line-height: 4rem;\n  text-align: center;\n}\n.slider.ui .slider-ctrl-left:hover,\n.slider.ui .slider-ctrl-right:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n  color: rgba(255, 255, 255, 0.72);\n}\n.slider.ui .slider-ctrl-left {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.slider.ui .slider-ctrl-right {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.slider.ui .slider-indicators {\n  font-size: 0;\n}\n.slider.ui .slider-indicators li {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.72);\n  border-radius: 3px;\n  padding: 2px;\n}\n.slider.ui .slider-indicators li:not(:first-child) {\n  margin-left: 0.25rem;\n}\n.slider.ui .slider-indicators li.active:after {\n  width: 100%;\n  height: 100%;\n  display: block;\n  content: '';\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 2px;\n}\n.slider.ui-trans .slider-list > li {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  left: 0;\n  -webkit-transition: -webkit-transform 0.6s ease-in-out;\n  -o-transition: -o-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n}\n.slider.ui-trans .slider-list > li.left {\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  display: block;\n  position: absolute;\n}\n.slider.ui-trans .slider-list > li.right {\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n  display: block;\n  position: absolute;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 18:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },

/***/ 20:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="slider ui ui-trans"
	//   v-on:mouseover="pause(true)"
	//   v-on:mouseout="pause()" >
	//   <ul class="slider-list" v-el:list>
	//     <slot>
	//       <li v-for="img of imgs" track-by="$index">
	//         <img v-bind:src="img" alt="img">
	//       </li>
	//     </slot>
	//     </ul>
	//     <div class="slider-ctrls">
	//       <span class="slider-ctrl-left" v-on:click="to('left')"><i class="ui ic-chevron-left lg"></i></span>
	//       <span class="slider-ctrl-right" v-on:click="to('right')"><i class="ui ic-chevron-right lg"></i></span>
	//       <ul class="slider-indicators" v-el:indicators v-on:click="_handleIndicator">
	//         <li v-for="img of imgs" track-by="$index" v-bind:class="{active : $index==index}" ></li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <style lang="less">
	//   @import '../less/style.less';
	//   .slider {
	//     position: relative;
	//     .slider-ctrl-left, .slider-ctrl-right{
	//       position: absolute;
	//       top: 50%;
	//       transform: translate(0, -50%);
	//     }
	//     .slider-ctrl-left{
	//       left: 0%;
	//     }
	//     .slider-ctrl-right{
	//       right: 0%;
	//     }
	//   }
	//
	//   .slider-indicators {
	//     padding-left: 0;
	//     margin-bottom: 0;
	//     margin-top: 0;
	//     list-style: none;
	//     position: absolute;
	//     bottom: 0.625rem;
	//     text-align: center;
	//     width: 100%;
	//   }
	//   .slider-list{
	//     list-style: none;
	//     padding-left: 0;
	//     margin-top: 0;
	//     margin-bottom: 0;
	//     display: inline-block;
	//     overflow: hidden;
	//     position: relative;
	//     > li {
	//       position: absolute;
	//       display: none;
	//       top: 0;
	//       left: 0;
	//       &.active {
	//         position: static;
	//         display: block;
	//       }
	//     }
	//   }
	//
	//   .slider.ui {
	//     min-height: 10rem;
	//     .slider-list , .slider-list li, .slider-list img{
	//       width:100%;
	//     }
	//
	//     .slider-ctrl-left, .slider-ctrl-right{
	//       background-color: rgba(0, 0, 0, 0.1);
	//       color: rgba(255, 255, 255, 0.64);
	//       height : @ui-lg;
	//       width : @ui-md;
	//       line-height: @ui-lg;
	//       text-align: center;
	//       &:hover {
	//         background-color: rgba(0, 0, 0, 0.3);
	//         color: rgba(255, 255, 255, 0.72);
	//       }
	//     }
	//     .slider-ctrl-left{
	//       border-top-right-radius: 6px;
	//       border-bottom-right-radius: 6px;
	//     }
	//     .slider-ctrl-right {
	//       border-top-left-radius: 6px;
	//       border-bottom-left-radius: 6px;
	//     }
	//     .slider-indicators {
	//       font-size: 0;
	//       li {
	//         display: inline-block;
	//         width: 8px;
	//         height: 8px;
	//         border: 1px solid rgba(255, 255, 255, 0.72);
	//         border-radius: 3px;
	//         padding: 2px;
	//         &:not(:first-child){
	//           margin-left :  0.25rem;
	//         }
	//         &.active:after {
	//           width: 100%;
	//           height: 100%;
	//           display: block;
	//           content: '';
	//           background-color: rgba(255, 255, 255, 0.8);
	//           border-radius: 2px;
	//         }
	//       }
	//     }
	//   }
	//
	//
	//   .slider.ui-trans .slider-list > li {
	//     -webkit-transform: translate3d(0, 0, 0);
	//     transform: translate3d(0, 0, 0);
	//     left: 0;
	//     -webkit-transition: -webkit-transform 0.6s ease-in-out;
	//     -o-transition: -o-transform 0.6s ease-in-out;
	//     transition: transform 0.6s ease-in-out;
	//     &.left {
	//       -webkit-transform: translate3d(-100%, 0, 0);
	//       transform: translate3d(-100%, 0, 0);
	//       display: block;
	//       position: absolute;
	//     }
	//     &.right {
	//       -webkit-transform: translate3d(100%, 0, 0);
	//       transform: translate3d(100%, 0, 0);
	//       display: block;
	//       position: absolute;
	//     }
	//   }
	//
	// </style>
	// <script>
	
	//static
	var arr = {
	  left: ['right', 'left'], //<-
	  right: ['left', 'right'] //->
	},
	    TRANSTIME = 600,
	    CYCLETIME = 5000;
	
	exports.default = {
	  props: ['on', 'imgs'],
	  methods: {
	    cycle: function cycle(time, direction) {
	      var target = this;
	      target.cycleTime = time || target.cycleTime;
	      target.direction = direction || target.direction;
	      target.interval = setInterval(function () {
	        if (this.sliding) return;
	        target.to(target.direction);
	      }, target.cycleTime);
	    },
	    pause: function pause(isPaused) {
	      if (isPaused) {
	        // this.on = false
	        this.interval = clearInterval(this.interval);
	      } else {
	        // this.on = true;
	        this.cycle();
	      }
	    },
	    to: function to(direction) {
	      if (this.sliding) return;
	      // this.$el.querySelector('ul.slider-list .active');
	      console.log('to', this.$els.list.children.length);
	      if (this.index == direction || this.$els.list.children.length <= 1) return;
	      var next = void 0,
	          cur = this.$els.list.children[this.index];
	
	      if (typeof direction === "number") {
	        var nextI = direction;
	        direction = this.index < nextI ? 'right' : 'left';
	        this.index = nextI;
	        next = cur.parentElement.children[nextI];
	      } else {
	        if (direction === 'left') {
	          if (this.index == 0) {
	            this.index = this.imgs.length - 1;
	            next = cur.parentElement.lastElementChild;
	          } else {
	            this.index--;
	            next = cur.previousElementSibling;
	          }
	        } else {
	          if (this.index == this.imgs.length - 1) {
	            this.index = 0;
	            next = cur.parentElement.firstElementChild;
	          } else {
	            this.index++;
	            next = cur.nextElementSibling;
	          }
	        }
	      }
	      next.classList.add(arr[direction][1]);
	      next.offsetWidth;
	      next.classList.add('active');
	      next.classList.remove(arr[direction][1]);
	      cur.classList.remove('active');
	      cur.classList.add(arr[direction][0]);
	      this.sliding = cur;
	    },
	    _handleTransEnd: function _handleTransEnd(e) {
	      if (this.sliding === e.target) {
	        e.target.classList.remove('left');
	        e.target.classList.remove('right');
	        this.sliding = null;
	      }
	    },
	    _handleIndicator: function _handleIndicator(e) {
	      if (e.target === this) return;
	      this.to(Array.prototype.indexOf.call(e.target.parentElement.children, e.target));
	    }
	  },
	  ready: function ready() {
	    this.pause(!this.on);
	    var list = this.$els.list;
	    !this.imgs && (this.imgs = new Array(list.children.length));
	
	    list.children[this.index] && list.children[this.index].classList.add('active');
	    for (var i = 0; i < list.children.length; i++) {
	      list.children[i].addEventListener('transitionend', this._handleTransEnd);
	    }
	  },
	  data: function data() {
	    return {
	      cur: null,
	      sliding: null,
	      cycleTime: 5000,
	      direction: 'right',
	      interval: undefined,
	      index: 0
	    };
	  },
	  beforeDestroy: function beforeDestroy() {
	    clearInterval(this.interval);
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },

/***/ 21:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"slider ui ui-trans\"\nv-on:mouseover=\"pause(true)\"\nv-on:mouseout=\"pause()\" >\n<ul class=\"slider-list\" v-el:list>\n  <slot>\n    <li v-for=\"img of imgs\" track-by=\"$index\">\n      <img v-bind:src=\"img\" alt=\"img\">\n    </li>\n  </slot>\n  </ul>\n  <div class=\"slider-ctrls\">\n    <span class=\"slider-ctrl-left\" v-on:click=\"to('left')\"><i class=\"ui ic-chevron-left lg\"></i></span>\n    <span class=\"slider-ctrl-right\" v-on:click=\"to('right')\"><i class=\"ui ic-chevron-right lg\"></i></span>\n    <ul class=\"slider-indicators\" v-el:indicators v-on:click=\"_handleIndicator\">\n      <li v-for=\"img of imgs\" track-by=\"$index\" v-bind:class=\"{active : $index==index}\" ></li>\n    </ul>\n  </div>\n</div>\n";

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(28);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _promise = __webpack_require__(81);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _util = __webpack_require__(99);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  get: function get(query) {
	    return new _promise2.default(function (resolve, reject) {
	      (0, _util.$http)({
	        url: '/post',
	        data: query,
	        load: function load(res) {
	          if (res.status == 200) {
	            var a = res.data.data;
	            a.date = new Date(a.date);
	            a.updateDate = new Date(a.updateDate);
	            resolve(a);
	          } else reject(res);
	        },
	
	        error: reject
	      });
	    });
	  },
	  query: function query(_query) {
	    return new _promise2.default(function (resolve, reject) {
	      (0, _util.$http)({
	        url: '/post',
	        data: _query,
	        load: function load(res) {
	          if (res.status == 200) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	              for (var _iterator = (0, _getIterator3.default)(res.data.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var a = _step.value;
	
	                console.log('sdasd');
	                a.date = new Date(a.date);
	                a.updateDate = new Date(a.updateDate);
	              }
	            } catch (err) {
	              _didIteratorError = true;
	              _iteratorError = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                  _iterator.return();
	                }
	              } finally {
	                if (_didIteratorError) {
	                  throw _iteratorError;
	                }
	              }
	            }
	
	            resolve(res.data.data);
	          } else reject(res);
	        },
	
	        error: reject
	      });
	    });
	  },
	  photo: function photo(post, token) {
	    post.type = "photo";
	    return new _promise2.default(function (resolve, reject) {
	      var i = 0,
	          imgs = [],
	          errfiles = [];
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(post.content), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var f = _step2.value;
	
	          var fd = new FormData();
	          fd.append('file', f.file);
	          fd.append('token', token);
	          (0, _util.$http)({
	            method: 'POST',
	            url: "http://upload.qiniu.com",
	            data: fd,
	            load: function load(res) {
	              i++;
	              res.status == 200 ? imgs.push(res.data.url) : errfiles.push(f);
	              if (i === post.content.length) {
	                imgs.length && resolve(imgs);
	                errfiles.length && reject(errfiles);
	              }
	            },
	            error: reject
	          });
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }).then(function (imgs) {
	      post.content = imgs;
	      return new _promise2.default(function (resolve, reject) {
	        (0, _util.$http)({
	          method: 'POST',
	          url: '/post',
	          data: post,
	          load: function load(res) {
	            res.status == 200 ? resolve(res.data) : reject(res);
	          },
	
	          error: reject
	        });
	      });
	    });
	  },
	  markdown: function markdown(md) {
	    return new _promise2.default(function (resolve, reject) {
	      (0, _util.$http)({
	        method: 'POST',
	        url: '/post',
	        data: md,
	        load: function load(res) {
	          res.status == 200 ? resolve(res.data) : reject(res);
	        },
	
	        error: reject
	      });
	    });
	  }
	};

/***/ },

/***/ 137:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (el) {
	  var d = document,
	      s = d.createElement('script');
	  s.src = '//ibreakme.disqus.com/embed.js';
	  s.setAttribute('data-timestamp', +new Date());
	  (el || d.head || d.body).appendChild(s);
	  return s;
	};

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(189)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/photo.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(190)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./photo.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _disqus = __webpack_require__(137);
	
	var _disqus2 = _interopRequireDefault(_disqus);
	
	var _slider = __webpack_require__(15);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _post = __webpack_require__(27);
	
	var _post2 = _interopRequireDefault(_post);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    Slider: _slider2.default
	  },
	  route: {
	    activate: function activate(transition) {
	      var _this = this;
	
	      if (this.$root.share$.photo) {
	        this.post = this.$root.share$.photo;
	        transition.next();
	      } else if (this.$route.params.id) {
	        _post2.default.get({ _id: this.$route.params.id }).then(function (data) {
	          if (data) {
	            _this.post = data;
	            transition.next();
	          } else {
	            _this.$route.go({ path: '/' });
	          }
	        });
	      } else this.$route.go({ path: '/' });
	    }
	  },
	  filters: {
	    date: function date(val) {
	      return val && val.toLocaleString().slice(0, -3);
	    }
	  },
	  data: function data() {
	    return {
	      post: {},
	      disqusScript: undefined,
	      isPreview: undefined
	    };
	  },
	  ready: function ready() {
	    this.disqusScript = (0, _disqus2.default)(this.$el);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.disqusScript.remove();
	  }
	};
	// </script>
	// </script>
	/* generated by vue-loader */
	// <template>
	//   <div class="post-view">
	//     <div class="container">
	//       <div class="head">
	//       <h2 v-text="post.title" class="ui"></h2>
	//         <div class="tb post-view-date">
	//         <div class="tc" v-text="post.date | date"></div>
	//          <!--  <div class="tc full">跟新于：<span v-text="md.updateDate | date "></span></div>
	//           <div class="tc"><div class="ui">编辑</div></div> -->
	//         </div>
	//       </div>
	//       <div class="content" v-else>
	//         <div class="photo-item-wrap" v-show="!isPreview">
	//           <div v-for="photo of post.content" class="photo-item" v-on:click="isPreview = true" >
	//             <div class="photo-item-inner" v-bind:style="{'background-image' : 'url(' + photo + ')'}"></div>
	//           </div>
	//         </div>
	//         <div v-show="isPreview">
	//           <span class="ui" v-on:click="isPreview = false" >收起</span>
	//           <slider v-if="post.content" :imgs="post.content" on="false"></slider>
	//         </div>
	//       </div>
	//       <div class="comment">
	//         <div id="disqus_thread"></div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	// <script>

/***/ },

/***/ 190:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"post-view\">\n  <div class=\"container\">\n    <div class=\"head\">\n    <h2 v-text=\"post.title\" class=\"ui\"></h2>\n      <div class=\"tb post-view-date\">\n      <div class=\"tc\" v-text=\"post.date | date\"></div> \n       <!--  <div class=\"tc full\">跟新于：<span v-text=\"md.updateDate | date \"></span></div> \n        <div class=\"tc\"><div class=\"ui\">编辑</div></div> -->\n      </div>\n    </div>\n    <div class=\"content\" v-else>\n      <div class=\"photo-item-wrap\" v-show=\"!isPreview\">\n        <div v-for=\"photo of post.content\" class=\"photo-item\" v-on:click=\"isPreview = true\" >\n          <div class=\"photo-item-inner\" v-bind:style=\"{'background-image' : 'url(' + photo + ')'}\"></div>\n        </div>\n      </div>\n      <div v-show=\"isPreview\">\n        <span class=\"ui\" v-on:click=\"isPreview = false\" >收起</span>\n        <slider v-if=\"post.content\" :imgs=\"post.content\" on=\"false\"></slider> \n      </div>\n    </div>\n    <div class=\"comment\">\n      <div id=\"disqus_thread\"></div>\n    </div>\n  </div>\n</div>\n";

/***/ }

});
//# sourceMappingURL=19.js.map