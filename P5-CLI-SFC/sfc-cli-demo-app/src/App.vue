<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- Commenting the HelloWorld Vue default template -->
  <HelloWorld msg="Welcome to Your Vue.js App" />

  <!-- 
    Adding our custom template 
    With Vue/CLI we can use the PascalCase => PackageName
    instead of kebab-case (as we did with our HTML template) => package-name

    Our template "PackageName" was created with props "mainHeading"
    so we can initialize it also: mainHeading="Learning about Java Packages"

    NOTE:
    1. Since the value of the props "mainHeading" is just a simple string "Learning about Java Packages"
    there is no any JS or Vue experssion so we can just write mainHeading (not :mainHeading)
    2. We can add the closing tag </PackageName> or just an empty element with self-closing <PacakgeName />
  -->
  <!-- <PackageName mainHeading="Learning about Java Packages" /> -->
</template>

<script>
// We comment the line below for importing the HelloWorld to practice our .vue file:
import HelloWorld from './components/HelloWorld.vue'

// Instead we are importing our .vue file: 
// import PackageName from './components/PackageName.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
    // Register "PackageName" to be a local component:
    // PackageName
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
