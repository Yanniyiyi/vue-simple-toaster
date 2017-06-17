# vue-simple-toaster
# Install
`npm install vue-simple-toaster`
# How to use
Step 1. `import Toaster from 'vue-simple-toaster'`    
Step 2. `import 'vue-simple-toaster/vue-simple-toaster.css'`      
Step 3. `Vue.use(Toaster);`
# Example
Now in your vue components, you can use `this.$toaster(message, position, animation) ` to show a toast, just like this
Note: the `position` and `animation` parameters are not necessary.
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
      this.$toaster('hello world! this is a test');
    }
  }
}
</script>
```
# Document
## Default options
The toaster has some default options
```
    position: 'top-left',
    duration: 2500,
    animation:'fadeIn'
```
You can change the default options by passing an options object
```
Vue.use(Toaster, {
    position: 'top-left',
    duration: 3000,
    animation:'slideDown'})
```   
Available positions are: `'top'`,`'top-left'`,`'top-center'`,`'top-right'`,`'center'`,`'center-left'`,`'center-right'`,`'bottom'`,`'bottom-left'`,`'bottom-center'` and `'bottom-right'`    
Available animations are: `'slideDown'`,`'slideUp'` and `fadeIn`.
## Change default options
You can change default options by the method `this.$toaster.options(options)`
## Change at running time
Also, if you want to use other positions or animations for just one time, you can pass the animations, and positions when you invoke the `this.$toaster(message, position, animation)` method. 
## Toast type
The `$toaster` method could receive a `type` parameter, which could change the alter outlook. Available types are `'normal'` which is set as default, `'alert'`, `'error'`, `'warn'` and `'success'`
Example `this.$toaster('hello world! this is a test','top-center','fadeIn','warn');`
Also, you can use a built in function based on toast type like this
```
this.$toaster.alert('hello world! this is a test','top-center','fadeIn');
this.$toaster.error('hello world! this is a test','top-center','fadeIn');
this.$toaster.warn('hello world! this is a test','top-center','fadeIn');
this.$toaster.success('hello world! this is a test','top-center','fadeIn');
```
### If you wish to use your own CSS style. Download the css file and replce the content with your own code. But please do not change the class name. Just modify the style content. After that import your own css file.
# To-do list
- toaster's position should be more accurate.

