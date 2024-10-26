<template>
    <div>
        <h5 @click="$router.pusj(`/blod/${idx}`)">{{ post.title }}</h5>
        <!-- <router-link :to="`/blog/${idx}}`">{{ post.title }}</router-link> -->
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
  