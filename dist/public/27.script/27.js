webpackJsonp([27],{

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
	    var list = this.$els.list;
	    if (list.children.length > 0) {
	      !this.imgs && (this.imgs = new Array(list.children.length));
	      this.pause(!this.on);
	      list.children[this.index].classList.add('active');
	      for (var i = 0; i < list.children.length; i++) {
	        list.children[i].addEventListener('transitionend', this._handleTransEnd);
	      }
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
	
	var _post = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../service/post.service\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _post2 = _interopRequireDefault(_post);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    Slider: _slider2.default
	  },
	  route: {
	    props: ['share$'],
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
//# sourceMappingURL=27.js.map