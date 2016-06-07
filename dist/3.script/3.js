webpackJsonp([3],{

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(136)
	__vue_script__ = __webpack_require__(138)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] web-app/components/setting.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(140)
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

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(137);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
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

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".preview {\n  width: 100%;\n  padding-top: 75%;\n  position: relative;\n}\n.preview .preview-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(101);
	
	var _user = __webpack_require__(133);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _service = __webpack_require__(139);
	
	var _service2 = _interopRequireDefault(_service);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: ['share$'],
	  route: {
	    activate: function activate(t) {
	      if (this.share$.user && this.share$.user.name) {
	        this.user = (0, _util.$extend)({ imgs: [] }, this.share$.user);
	        t.next();
	      } else {
	        this.$router.go({ path: '/login' });
	      }
	    }
	  },
	  methods: {
	    add: function add(e) {
	      this.preview && URL.revokeObjectURL(this.preview);
	      this.file = e.target.files[0];
	      this.preview = URL.createObjectURL(this.file, this.token);
	    },
	    insertImg: function insertImg() {
	      var _this = this;
	
	      _user2.default.insertImg(this.file, this.token).then(function (data) {
	        URL.revokeObjectURL(_this.preview);
	        _this.preview = undefined;
	        _this.file = undefined;
	        _this.user.imgs.push(data);
	        _this.$dispatch('theme.imgs.add', data);
	      });
	    },
	    deleteImg: function deleteImg(img) {
	      var _this2 = this;
	
	      _user2.default.deleteImg(img).then(function (data) {
	
	        _this2.$dispatch('theme.imgs.del', img);
	      });
	    },
	    profile: function profile() {
	      var _this3 = this;
	
	      _user2.default.profile(this.user).then(function (data) {
	        _this3.$dispatch('profile', data);
	      });
	    }
	  },
	  data: function data() {
	    var _this4 = this;
	
	    _service2.default.token().then(function (data) {
	      return _this4.token = data;
	    });
	    return {
	      preview: undefined,
	      file: undefined,
	      user: undefined,
	      token: undefined
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="container" v-if="user">
	//     <div class="module">
	//       <div><input type="text" class="ui" placeholder="string1" v-model="user.profile1" ></div>
	//       <div><input type="text" class="ui" placeholder="string2" v-model="user.profile2"></div>
	//       <div><span v-on:click="profile" class="ui">保存</span></div>
	//     </div>
	//     <div class="module">
	//       <div class="photo-item-wrap">
	//         <div class="photo-item" v-for="img of user.imgs" >
	//
	//           <div class="photo-item-inner" v-bind:style="{'background-image': img? 'url('+ img+')' : undefined }"></div>
	//            <span class="btn-remove" v-on:click="deleteImg(img)"><i class="ui ic-cross"></i></span>
	//         </div>
	//       </div>
	//       <div>
	//         <div class="preview">
	//            <div class="preview-inner" v-bind:style="{'background-image': preview? 'url('+ preview+')' : undefined }"></div>
	//         </div>
	//         <div class="tb">
	//           <div class="tc"><div class="file"><span class="ui">添加照片</span><input type="file" class="ui" accept="image/*" v-on:change="add"></div></div>
	//           <div class="tc full"><span class="ui" v-on:click="insertImg">确定</span></div>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	// <style>
	//   .preview{
	//     width : 100%;
	//     padding-top: 75%;
	//     position: relative;
	//     .preview-inner{
	//       position: absolute;
	//       top:0;
	//       left:0;
	//       width:100%;
	//       height:100%;
	//       background-size: contain;
	//       background-repeat: no-repeat;
	//       background-position: center;
	//     }
	//   }
	// </style>
	// <script>

/***/ },

/***/ 140:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container\" v-if=\"user\">\n  <div class=\"module\">\n    <div><input type=\"text\" class=\"ui\" placeholder=\"string1\" v-model=\"user.profile1\" ></div>\n    <div><input type=\"text\" class=\"ui\" placeholder=\"string2\" v-model=\"user.profile2\"></div>\n    <div><span v-on:click=\"profile\" class=\"ui\">保存</span></div>\n  </div>\n  <div class=\"module\">\n    <div class=\"photo-item-wrap\">\n      <div class=\"photo-item\" v-for=\"img of user.imgs\" >\n       \n        <div class=\"photo-item-inner\" v-bind:style=\"{'background-image': img? 'url('+ img+')' : undefined }\"></div>\n         <span class=\"btn-remove\" v-on:click=\"deleteImg(img)\"><i class=\"ui ic-cross\"></i></span>\n      </div>\n    </div>\n    <div>\n      <div class=\"preview\">\n         <div class=\"preview-inner\" v-bind:style=\"{'background-image': preview? 'url('+ preview+')' : undefined }\"></div>\n      </div>\n      <div class=\"tb\">\n        <div class=\"tc\"><div class=\"file\"><span class=\"ui\">添加照片</span><input type=\"file\" class=\"ui\" accept=\"image/*\" v-on:change=\"add\"></div></div>\n        <div class=\"tc full\"><span class=\"ui\" v-on:click=\"insertImg\">确定</span></div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }

});
//# sourceMappingURL=3.js.map