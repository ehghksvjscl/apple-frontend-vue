Za<template>
    <div style="padding: 10px">
        <h4>팔로워</h4>
        <input @input="search" placeholder="검색어를 입력하세요" />
        
        <!-- followers 대신 search_followers를 사용 -->
        <div class="post-header" v-for="follower in search_followers" :key="follower.id">
            <div class="profile" :style="{ backgroundImage: 'url('+ follower.image + ')' }"></div>
            <span class="profile-name">{{ follower.name }}</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
    name: 'MyPageView',
    setup() {
        let followers = ref([]);
        let search_followers = ref([]);

        function search(e) {
            let search_keyword = e.target.value.toLowerCase();
            search_followers.value = followers.value.filter((follower) =>
                follower.name.toLowerCase().includes(search_keyword)
            );
        }

        onMounted(() => {
            axios.get('/follower.json').then((res) => {
                followers.value = res.data;
                search_followers.value = res.data;
            });
        });

        return { followers, search, search_followers };
    }
};
</script>

<style src="@/assets/styles/insta-post.css"></style>