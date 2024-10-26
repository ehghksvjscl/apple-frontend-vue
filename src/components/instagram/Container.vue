<template>
    <div>
        <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>
  
<script>
import Post from '@/components/instagram/Post.vue'
import sample_posts from '@/assets/data/sample-insta-post.js'


export default {
name: 'ContainerView',
data() {
    return {
        posts: sample_posts
    }
},
components: {
    Post,
},
}
</script> 

<style>

</style>
