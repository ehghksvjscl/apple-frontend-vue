import { createStore } from 'vuex'
import sample_posts from '@/assets/data/sample-insta-post.js'
import axios from 'axios'

export default createStore({
  state: {
    posts: sample_posts
  },
  mutations: {
    addPost(state, post) {
        state.posts.unshift(post)
    },
    setLikes(state, post) {
      let post_idx = post.id - 1
      let post_obj = state.posts[post_idx]
      let like_state = post_obj.liked

      if (like_state == false) {
        post_obj.likes++
        post_obj.liked = true
      } else {
        post_obj.likes--
        post_obj.liked = false
      }
    }
  },
  actions: {
    getPost(context) {
      axios.get(`https://codingapple1.github.io/vue/more1.json`)
      .then((res) => {
          context.commit('addPost', res.data)
          console.log(res.data)
      }).catch(() => {
          console.log('error')
      })
    }
  },
})
