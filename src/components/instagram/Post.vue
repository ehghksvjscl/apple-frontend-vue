<template>
    <div class="post">
        <div class="post-header">
        <div class="profile" :style="{backgroundImage: 'url('+ post.userImage + ')'}"></div>
        <span class="profile-name">{{ post.name }}</span>
        </div>
        <div :class="post.filter" class="post-body" :style="{backgroundImage: 'url('+post.postImage+')'}" @click="setLikes(post)"></div>
        <div class="post-content">
        <p>{{ post.likes }}</p>
        <p><strong>{{ post.name }}</strong> {{post.content}}</p>
        <p class="date">{{ post.date }}</p>
        </div>
    </div> 
</template>
  
<script>
import { mapMutations } from 'vuex';

export default {
        name: 'PostView',
        props: {
            post: Object
        },
        methods: {
            ...mapMutations(['setLikes']),
        }
}
</script> 

<style src='@/assets/styles/insta-post.css'></style>
