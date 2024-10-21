<template>
  <div id="app">
    <Nav/>
    <router-view :posts="posts"/>
  </div>
</template>

<script>
import Nav from '@/components/blog/Nav.vue'
import posts from '@/assets/data/sample-posts'

export default {
  name: 'App',
  components: {
    Nav,
  },
  data() {
    return {
      posts: posts
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smmothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 전역 스타일을 여기에 추가합니다 */
</style>
