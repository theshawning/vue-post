<template>
  <div>
    <div @click="isActive = true">
      <slot name="actionButton">
        <button class="button is-primary">Open</button>
      </slot>
    </div>
    <div class="modal" :class="{'is-active': isActive}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button @click="isActive = false" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <slot />
        </section>
        <footer class="modal-card-foot">
          <button @click="emitModalSubmit" class="button is-success">Save changes</button>
          <button @click="isActive = false" class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    emitModalSubmit() {
      this.$emit("modalSubmitted", this.closeModal);
    },
    closeModal() {
      this.isActive = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>