import INITIAL_DATA from './initial_data.json'
import Vue from 'vue'

// function so simulate an asynchronous API call
export function fetchPostsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts)
    }, 0)
  })
}

export const state = () => {
  return {
    items: []
  }
}

// getters are similar to computed properties, but for Vuex
export const getters = {
  hasEmptyItems(state) {
    return state.items.length === 0
  }
}

// good place to send a request to a server
// usually actions resolve into some data
export const actions = {
  fetchPosts({ commit }) {
    return fetchPostsAPI().then((posts) => {
      commit('setPosts', posts)
    })
  },
  createPost({ commit }, postData) {
    // create post on a server, or persist data in some way
    postData._id = Math.random().toString(36).substr(2, 7)
    postData.createdAt = new Date().getTime()
    postData.isRead = false

    return this.$axios.$post('/api/posts', postData)
      .then((res) => {
        console.log(res)
        commit('addPost', postData)
        return postData
      })
  },
  updatePost({ commit, state }, postData) {
    const index = state.items.findIndex(post => {
      return post._id === postData._id
    })
    if (index !== -1) {
      return this.$axios.$patch(`/api/posts/${postData._id}`, postData)
        .then(res => {
          console.log(res)
          commit('replacePost', { post: postData, index })
          return postData
        })
    }
  }
}

// mutations are simple functions that have access to a state
// mutations are used to assign values to a state
export const mutations = {
  setPosts(state, posts) {
    state.items = posts
  },
  addPost(state, post) {
    state.items.push(post)
  },
  replacePost(state, { post, index }) {
    Vue.set(state.items, index, post)
  }
}