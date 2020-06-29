<template>
  <Modal>
    <template #actionButton>
      <a class="button is-danger is-block is-bold">
        <span class="compose">Create</span>
      </a>
    </template>
    <form class="post-form">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input type="text" placeholder="Awesome Title" class="input" />
        </div>
      </div>
      <div class="field">
        <label class="label">Subtitle</label>
        <div class="control">
          <input type="email" placeholder="Awesome subtitle" class="input" />
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea class="textarea" placeholder="Awesome content"></textarea>
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
  }
};
</script>

<style lang="scss" scoped>
</style>