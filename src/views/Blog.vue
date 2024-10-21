<template>
    <router-link v-for="(post, idx) in posts" :key=idx :to="`/blog/${idx}`" :post="post">{{ post.title }}
      <br>
    </router-link>
    
</template>
  
  <script>
  export default {
    name: 'BlogView',
    props: {
      posts: Array,
    },
  }
  </script> 
  
  <style>

  </style>
  