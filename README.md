# vue-simple-toaster
# Install
`npm install vue-simple-toaster`
# How to use
Step 1. `import Toaster from 'vue-simple-toaster'`
Step 2. `import 'vue-simple-toaster/vue-simple-toaster.css'`
Step 3. `Vue.use(Toaster);`
# Syntax
Now in your vue components, you can use `this.$toaster(message, position, animation) ` to show a toast, just like this
```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <button @click="test">Test</button>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  methods:{
    test(){
      this.$toaster('hello world! this is a test','top-center','fadeIn');
    }
  }
}
</script>
```
