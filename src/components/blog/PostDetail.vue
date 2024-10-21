<template>
    <div>
        <h5>{{ posts[$route.params.id].title }}</h5>
        <p>{{ posts[$route.params.id].content }}</p>
        <p>{{ posts[$route.params.id].date }}</p>
        <p>{{ posts[$route.params.id].number }}</p>
    </div>
</template>
  
  <script>
  export default {
    name: 'BlogPostDetail',
    props: {
      posts: Array,
    },
  }
  </script> 
  
  <style>

  </style>
  