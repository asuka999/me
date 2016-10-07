<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>
<style>
  html {
    min-height: 100%;
    position: relative;
    line-height: 1.41176471;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    color: #404040;
    //font-family: "Helvetica Neue", Helvetica, sans-serif;
  }

  body{
    background-color: #fff;
  }
  
  textarea {
    resize: none;
  }

  .container {
    margin-right: auto;
    margin-left: auto;
    padding : 0 0.625rem;

    &:after {
      content: '';
      clear: both;
      height: 0;
      display: block;
    }

    @media (min-width: 768px) {
      max-width: 750px;
    }
    @media (min-width: 992px) {
      max-width: 970px;
    }
    @media (min-width: 1200px) {
      max-width: 1170px;
    }
  }
  
  input.ui[type="reset"]{
    display: none;
  }

  img {
    max-width: 100%;
  }
  
  [disabled]{
    opacity: .5;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

</style>
<script>
  import 'normalize.css'
  import '../assets/icomoon/index.css'
  export default {}
</script>
