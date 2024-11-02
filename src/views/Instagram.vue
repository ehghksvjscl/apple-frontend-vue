<template>
    <div class="header">
        <ul class="header-button-left">
        <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
        <li v-if="step==1" @click="step++">Next</li>
        <li v-if="step==2" @click="add_post">Push</li>
        </ul>
        <img src="@/assets/logo.png" class="logo" />
    </div>
    <Container :step="step" :add_image_url="add_image_url" :posts="posts" @write_post="write_content=$event"/>

    <div class="footer">
        <ul class="footer-button-plus">
        <input @change="upload_img" type="file" id="file" accept="image/*" class="inputfile" />
        <label for="file" class="input-plus">+</label>
        </ul>
    </div>
</template>
  
<script>
import Container from '@/components/instagram/Container.vue';
import { mapState, mapMutations } from 'vuex'

function add_post() {
    let id = this.posts.length
    let new_post_data = {
      id: id,
      name: "New User",
      userImage: this.add_image_url,
      postImage: this.add_image_url,
      likes: 0,
      date: "Apr 4",
      liked: false,
      content: this.write_content,
      filter: this.change_filter
    }
    this.addPost(new_post_data)
    this.step = 0
}

function upload_img(e) {
    let files = e.target.files
    this.add_image_url = URL.createObjectURL(files[0])
    this.step = 1
}

export default {
    name: 'InstagramView',
    data() {
        return {
            step: 3,
            add_image_url:'',
            write_content: '',
            change_filter: '',
        }
    },
    components: {
        Container,
    },
    mounted() {
        this.emitter.on('fire', (filter) => {
            this.change_filter = filter
        })
    },
    computed: {
        ...mapState(['posts']),
    },
    methods: {
        add_post,
        upload_img,
        ...mapMutations(['addPost']),
  },
}
</script> 

<style>
    body {
    margin: 0;
    box-sizing: content-box;
    }
    ul {
    padding: 5px;
    list-style-type: none;
    }
    .logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
    }
    .header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
    }
    .header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
    }
    .header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
    }
    .footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
    }
    .footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
    }
    .sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
    }
    .inputfile {
    display: none;
    }
    .input-plus {
    cursor: pointer;
    }

</style>
