const INITIAL_DATA = {
  posts: [
    {
      title: "My First Post",
      subtitle: "My First Subtitle",
      _id: 1,
      createdOn: new Date(),
      isRead: false
    },
    {
      title: "My Second Post",
      subtitle: "My Second Subtitle",
      _id: 2,
      createdOn: new Date(),
      isRead: true
    }
  ]
}

// function so simulate an asynchronous API call
function fetchPostsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts)
    }, 1000)
  })
}

export const state = () => {
  return {
    posts: []
  }
}

// good place to send a request to a server
// usually actions resolve into some data
export const actions = {
  fetchPosts({ commit }) {
    return fetchPostsAPI().then((posts) => {
      commit('setPosts', posts)
    })
  }
}

// mutations are simple functions that have access to a state
// mutations are used to assign values to a state
export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  }
}