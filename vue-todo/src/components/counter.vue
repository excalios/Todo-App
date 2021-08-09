<template>
    <button @click="increaseCounter" class="btn">+</button>
    <button @click="decreaseCounter" class="btn">-</button>
    <p>{{ counter }}</p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    data: () => {
        return {
            counter: 0,
        };
    },
    methods: {
        increaseCounter() {
            this.counter++;
        },
        decreaseCounter() {
            if (this.counter <= 0) {
                alert('It cannot decrease anymore');
            } else {
                this.counter--;
            }
        },
    },
})
export default class Counter extends Vue {
    counter?: number = 0;
}
</script>

<style lang="scss" scoped>
.btn {
    margin: 0.4rem;
    border-radius: 5px;
}
</style>
