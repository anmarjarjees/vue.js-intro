<!-- 
  We can build the general/core content of this file 
  based on the Vue template file "HelloWorld.vue"
 -->
<template>
  <div class="main-content">
    <h1>{{ mainHeading }}</h1>
    <p>
      To learn more about Java modules and packages
      <a href="https://docs.oracle.com/en/java/javase/17/docs/api/index.html" target="_blank" rel="noopener">
        Java17 API Docs
      </a>.
    </p>
  </div>
</template>

<script>
/*
Inside the script element:
- We define our options object
- Then exporting the object as a JavaScript module to be impored inside App.vue
expoer defalut => then the options object { }
*/
export default {
  // Giving our component a name (which is the same name as the file similar to Vue template code):
  name: 'PackageName',
  // Adding the props as object properties (Like Vue template) or as an array elements as we did:
  // Just having the "name" prop in the array:
  /*   
  props: {
      msg: String
  }, 
  */
  props: ['mainHeading']
}
</script>

<!-- 
  We can use the style section for adding "component specific css"
  
  Based on Vue comment we can add "scoped" attribute to limit CSS to this component only
  so the styles below doesn't affect anything outside of this component
 -->
<style scoped>
/* Adding some custom CSS */
.main-content {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: rgb(246, 240, 233);
  max-width: 1200px;
  margin: auto;
  box-sizing: border-box;
  padding: 5px;
}




a {
  color: #42b983;
}
</style>
