import { INITIAL_DATA } from './index'

// function so simulate an asynchronous API call
export function fetchPostsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts)
    }, 200)
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
    postData.createdAt = new Date()
    commit('addPost', postData)
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
  }
}