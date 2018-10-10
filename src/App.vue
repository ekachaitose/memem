<template>
  <div id="app">
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentUser: localStorage.getItem('currentUser'),
        showNav: false,
        name: 'demoniis',
        dDate: '',
        dropFiles: [],
        url: null
      }
    },
    methods: {
      checkLogIn() {
        let _logIn = localStorage.getItem('currentUser')
        if(_logIn !== null){
          
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>