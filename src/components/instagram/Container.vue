<template>
    <div v-if="step==0">
        <div>
            <Post v-for="post in posts" :key="post.id" :post="post" />
        </div>
        <div>
            <button @click="more">More</button>
            <button @click="$store.dispatch('getPost')">More Vuex</button>
        </div>
        </div>
    <!-- 필터선택페이지 -->
    <div v-if="step==1">
        <div :class="change_filter" class="upload-image" :style="{backgroundImage: 'url('+ add_image_url + ')'}"></div>
        <div class="filters">
            <FilterBox :add_image_url="add_image_url" v-for="(filter, idx) in filters" :key="idx" :filter="filter">
                <span>{{filter}}</span>
            </FilterBox>
        </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step==2">
        <div :class="change_filter" class="upload-image" :style="{backgroundImage: 'url('+ add_image_url + ')'}"></div>
        <div class="write">
            <textarea class="write-box" @input="$emit('write_post', $event.target.value)">write!</textarea>
        </div>
    </div>

    <!-- MyPage -->
     <div v-if="step==3">
        <MyPage/>
    </div>
</template>
  
<script>
import Post from '@/components/instagram/Post.vue'
import FilterBox from '@/components/instagram/FilterBox.vue'
import MyPage from '@/components/instagram/MyPage.vue'
import axios from 'axios'

function more() {
    axios.get(`https://codingapple1.github.io/vue/more${this.add_post_idx}.json`)
    .then((res) => {
        this.posts.push(res.data)
        this.add_post_idx++
    }).catch(() => {
        console.log('error')
    })
}

export default {
    name: 'ContainerView',
    data() {
        return {
            add_post_idx : 0,
            filters: [
                 "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                 "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                 "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"
            ],
            change_filter: ''
        }
    },
    components: {
        Post,
        FilterBox,
        MyPage,
    },
    methods: {
        more
    },
    props: {
        posts: Array,
        step: Number,
        add_image_url: String
    },
    mounted() {
        this.emitter.on('fire', (filter) => {
            this.change_filter = filter
        })
    }
}
</script> 

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>
