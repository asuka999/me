webpackJsonp([16],{

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

/***/ 25:
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
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
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
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(81);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _util = __webpack_require__(99);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  theme: function theme() {
	    return new _promise2.default(function (resolve, reject) {
	      (0, _util.$http)('/theme', {
	        load: function load(res) {
	          res.status == 200 ? resolve(res.data.data) : reject(res);
	        },
	
	        error: reject
	      });
	    });
	  },
	  login: function login(user) {
	
	    return new _promise2.default(function (resolve, reject) {
	      (0, _util.$http)({
	        method: 'POST',
	        url: '/login',
	        data: user,
	        load: function load(res) {
	          res.status == 200 ? resolve(res.data.data) : reject(res);
	        }
	      });
	    });
	  },
	  insertImg: function insertImg(file) {
	    return new _promise2.default(function (resolve, reject) {
	      var fd = new FormData();
	      fd.append('file', file);
	      fd.append('token', token);
	      (0, _util.$http)({
	        method: 'POST',
	        url: "http://upload.qiniu.com",
	        data: fd,
	        load: function load(res) {
	
	          res.status == 200 ? resolve(res.data.url) : reject(res);
	        },
	        error: reject
	      });
	    }).then(function (url) {
	      return new _promise2.default(function (resolve, reject) {
	        (0, _util.$http)({
	          method: 'post',
	          url: '/user/img',
	          data: url,
	          load: function load(res) {
	            console.log('insert img', res);
	            res.status == 200 ? resolve(res.data.msg) : reject(res);
	          }
	        });
	      });
	    });
	  },
	  deleteImg: function deleteImg(img) {
	    return new _promise2.default(function (resolve, reject) {
	      (0, _util.$http)({
	        method: 'delete',
	        url: '/user/img',
	        data: img,
	        load: function load(res) {
	          console.log('delete img', res);
	          res.status == 200 ? resolve(res.data.msg) : reject(res);
	        }
	      });
	    });
	  },
	  profile: function profile(p) {
	    return new _promise2.default(function (resolve, reject) {
	      (0, _util.$http)({
	        method: 'delete',
	        url: '/user/profile',
	        data: p,
	        load: function load(res) {
	          console.log('profile', res);
	          res.status == 200 ? resolve(res.data.msg) : reject(res);
	        }
	      });
	    });
	  }
	};

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(184)
	__vue_script__ = __webpack_require__(186)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/setting.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(187)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./setting.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(185);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(25)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./setting.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./setting.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".preview {\n  width: 100%;\n  padding-top: 33.3%;\n  position: relative;\n}\n.preview .preview-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(99);
	
	var _user = __webpack_require__(182);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _service = __webpack_require__(131);
	
	var _service2 = _interopRequireDefault(_service);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  route: {
	    activate: function activate(t) {
	      if (this.$root.share$.user) {
	        this.user = (0, _util.$extend)({}, this.$root.share$.user);
	        t.next();
	      } else {
	        this.$router.go({ path: '/login' });
	      }
	    }
	  },
	  methods: {
	    add: function add(e) {
	      this.post.preview && URL.revokeObjectURL(this.post.preview);
	      this.post.file = e.targer.files[0];
	      this.post.preview = URL.creataObjectURL(this.post.file, this.token);
	    },
	    insertImg: function insertImg() {
	      var _this = this;
	
	      _user2.default.insertImg(this.post.file).then(function (data) {
	        URL.revokeObjectURL(_this.post.preview);
	        _this.post.preview = undefined;
	        _this.post.file = undefined;
	      });
	    },
	    deleteImg: function deleteImg(img) {
	      _user2.default.deleteImg(img).then(function (data) {
	        console.log('delete', data);
	      });
	    },
	    profile: function profile() {
	      _user2.default.profile(this.user).then(function (data) {
	        console.log(data);
	      });
	    }
	  },
	  data: function data() {
	    var _this2 = this;
	
	    _service2.default.token().then(function (data) {
	      return _this2.token = data;
	    });
	    return {
	      user: undefined,
	      token: token
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="container">
	//
	//     <div class="module">
	//       <div><input type="text" class="ui" placeholder="string1" v-model="user.string1" ></div>
	//       <div><input type="text" class="ui" placeholder="string2" v-model="user.string2"></div>
	//       <div><span v-on:click="profile" class="ui">保存</span></div>
	//     </div>
	//     <div class="module">
	//       <div class="photo-item-wrap">
	//         <div class="photo-item" v-for="img of user.imgs">
	//           <span v-on:click="deleteImg(img)"><i class="ui ic-cross"></i></span>
	//           <div class="photo-item-inner"></div>
	//         </div>
	//       </div>
	//       <div>
	//         <div class="preview">
	//            <div class="preview-inner" v-bind:style="{'background-image':post.preview? 'url('+post.preview+')' : undefined }"></div>
	//         </div>
	//         <div class="tb">
	//           <div class="tc"><div class="file"><span class="ui">添加照片</span><input type="file" class="ui" v-on:change="insertImg"></div></div>
	//           <div class="tc"><span class="ui" v-on:click="insertImg">确定</span></div>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	// <style>
	//   .preview{
	//     width : 100%;
	//     padding-top: 33.3%;
	//     position: relative;
	//     .preview-inner{
	//       position: absolute;
	//       top:0;
	//       left:0;
	//       width:100%;
	//       height:100%;
	//       background-size: cover;
	//       background-repeat: no-repeat;
	//       background-position: center;
	//     }
	//   }
	// </style>
	// <script>

/***/ },

/***/ 187:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container\">\n\n  <div class=\"module\">\n    <div><input type=\"text\" class=\"ui\" placeholder=\"string1\" v-model=\"user.string1\" ></div>\n    <div><input type=\"text\" class=\"ui\" placeholder=\"string2\" v-model=\"user.string2\"></div>\n    <div><span v-on:click=\"profile\" class=\"ui\">保存</span></div>\n  </div>\n  <div class=\"module\">\n    <div class=\"photo-item-wrap\">\n      <div class=\"photo-item\" v-for=\"img of user.imgs\">\n        <span v-on:click=\"deleteImg(img)\"><i class=\"ui ic-cross\"></i></span>\n        <div class=\"photo-item-inner\"></div>\n      </div>\n    </div>\n    <div>\n      <div class=\"preview\">\n         <div class=\"preview-inner\" v-bind:style=\"{'background-image':post.preview? 'url('+post.preview+')' : undefined }\"></div>\n      </div>\n      <div class=\"tb\">\n        <div class=\"tc\"><div class=\"file\"><span class=\"ui\">添加照片</span><input type=\"file\" class=\"ui\" v-on:change=\"insertImg\"></div></div>\n        <div class=\"tc\"><span class=\"ui\" v-on:click=\"insertImg\">确定</span></div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }

});
//# sourceMappingURL=16.js.map