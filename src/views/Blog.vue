<template>
    <Nav/>
    <Post 
      v-for="(post, idx) in posts" :key="idx" :post="post" :idx="idx"
    />
    
</template>
  
  <script>
    import Post from '@/components/blog/Post.vue'
    import Nav from '@/components/blog/Nav.vue'

    import posts from '@/assets/data/sample-posts'
  export default {
    name: 'BlogView',
    components: {
        Post,
        Nav,
    },
    data() {
        return {
            posts: posts
        }
    },
  }
  </script> 
  
  <style>

  </style>
  