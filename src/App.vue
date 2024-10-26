<template>
  <div id="app">
    <router-view :posts="posts"/>
  </div>
</template>

<script>
import posts from '@/assets/data/sample-posts'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      posts: posts
    }
  }
}
</script>

<style>
/* 전역 스타일을 여기에 추가합니다 */
</style>
