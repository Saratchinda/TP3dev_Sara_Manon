<script setup>
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
    <base-button
      :disabled="isPending"
      :color="color"
      @click.stop.prevent="handleClick"
    >
      <font-awesome-icon
        v-if="isPending"
        :icon="['fas', 'circle-notch']"
        pulse
      />
      <slot v-else />
    </base-button>
</template>

<script>
export default {
    name: 'AsyncButton',
    components: {
        BaseButton,
        FontAwesomeIcon
    },

    props: {
        color: {
            type: String,
            default: 'primary'
        }
    },

    data () {
        return {
            isPending: false
        }
    },

    methods: {
        handleClick() {
            this.isPending = true
            setTimeout(() => {
                this.isPending = false
            }, 2000)
        }
    }
}

</script>