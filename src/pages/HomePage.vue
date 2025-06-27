<script setup>
import BaseButton from '../components/BaseButton.vue'
import AsyncButton from '../components/AsyncButton.vue';
</script>

<template>
  <div>
    <p>Here comes the content of the HomePage.</p>

    <async-button @click="handleButtonClick">Disable and animated for 2 seconds if cliked</async-button>

    <base-button style="margin: 1rem;">BaseButton</base-button>
    <base-button disabled>BaseButton disabled</base-button>
    <base-button color="danger" style="margin: 1rem;">BaseButton with color props</base-button>
    <base-button color="warn">BaseButton with color props</base-button>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    components: {
      AsyncButton,
    },
    methods: {
      handleButtonClick() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      },
    },
  };
</script>

<style scoped>
div {
  text-align: center;
}
</style>
