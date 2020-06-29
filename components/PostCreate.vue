<template>
  <Modal @modalSubmitted="createPost">
    <template #actionButton>
      <a class="button is-danger is-block is-bold">
        <span class="compose">Create</span>
      </a>
    </template>
    <form class="post-form">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input v-model="form.title" type="text" placeholder="Awesome Title" class="input" />
        </div>
      </div>
      <div class="field">
        <label class="label">Subtitle</label>
        <div class="control">
          <input v-model="form.subtitle" type="text" placeholder="Awesome subtitle" class="input" />
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea v-model="form.content" class="textarea" placeholder="Awesome content"></textarea>
        </div>
      </div>
    </form>
  </Modal>
</template>

<script>
import Modal from "./shared/Modal";
export default {
  components: {
    Modal
  },
  data() {
    return {
      form: {
        title: "",
        subtitle: "",
        content: ""
      }
    };
  },
  methods: {
    createPost({ closeModal, data }) {
      // dispatch action with our form data
      this.$store.dispatch("post/createPost", { ...this.form });
      closeModal();
      this.resetForm();
    },
    resetForm() {
      this.form.title = "";
      this.form.subtitle = "";
      this.form.content = "";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>