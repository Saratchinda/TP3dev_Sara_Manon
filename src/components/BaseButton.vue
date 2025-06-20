<template>
  <button
    class="base-btn"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  disabled: Boolean
})
</script>

<style scoped>
.base-btn {
  background-color: #42b983;
  color: white;
  padding: 0.6em 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.base-btn:hover {
  background-color: #369f6b;
  transform: scale(1.03);
}

.base-btn:focus {
  outline: 2px solid #2c7a59;
}

.base-btn:disabled {
  background-color: #cfd8dc;
  color: #777;
  cursor: not-allowed;
  transform: none;
}
</style>
