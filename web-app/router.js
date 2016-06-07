'use strict'

export default {
  '/' :{
    component: function (resolve) {
      require(['./components/home.vue'], resolve)
    }
  },
  '/login': {
    component: function (resolve) {
      require(['./components/login.vue'], resolve)
    }
  },
  '/setting': {
    component :function(resolve){
      require(['./components/setting.vue'],resolve)
    }
  },
  '/markdown/:id': {
    component :function(resolve){
      require(['./components/markdown.vue'],resolve)
    }
  },
  '/markdown' : {
     component :function(resolve){
      require(['./components/markdownList.vue'],resolve)
    }
  },

  '/photo/:id' : {
     component :function(resolve){
      require(['./components/photo.vue'],resolve)
    }
  },
  '/photo' : {
     component :function(resolve){
      require(['./components/photoList.vue'],resolve)
    }
  },
  '/markdown-edit' : {
    component: function (resolve) {
      require(['./components/markdownEdit.vue'], resolve)
    }
  },
  '/markdown-edit/:id' : {
    component: function (resolve) {
      require(['./components/markdownEdit.vue'], resolve)
    }
  }
}