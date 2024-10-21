<template>
    <div>
        <router-link :to="`/blog/${idx}}`">{{ post.title }}</router-link>
    </div>
</template>
  
  <script>
  export default {
    name: 'BlogPost',
    props: {
      post: Object,
      idx: Number,
    },
  }
  </script> 
  
  <style>

  </style>
  