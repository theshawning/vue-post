<template>
  <div>
    <Navbar />
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>Newest Posts</h1>
                  <hr />
                </div>
                <PostItem
                  v-for="post in posts"
                  :title="post.title"
                  :subtitle="post.subtitle"
                  :key="post.id"
                  :date="post.createdOn"
                  :isRead="post.isRead"
                />
              </div>
              <!-- end of post -->
            </div>
            <!-- end of side bar -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import PostItem from "~/components/PostItem";
export default {
  data() {
    return {
      title: "My Title from Index",
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
          isRead: true
        }
      ]
    };
  },
  components: {
    Navbar,
    PostItem
  }
};
</script>
<style>
</style>