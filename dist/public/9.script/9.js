webpackJsonp([9],{

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
	  login: function login(user) {
	    return new _promise2.default(function (resolve, reject) {
	      (0, _util.$http)({
	        method: 'POST',
	        url: '/login',
	        data: user,
	        load: function load(res) {
	          res.status == 200 ? resolve(res.data.msg) : reject(res);
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
//# sourceMappingURL=9.js.map