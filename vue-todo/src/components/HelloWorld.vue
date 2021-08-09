<template>
    <div class="hello">
        <h1>{{ title }}</h1>
        <p>{{ msg }}</p>
        <Counter />
        <button @click="books = !books">Change Books</button>
        <p>Has Books: {{ hasBooksMessage }}</p>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Counter from './counter.vue';

@Options({
    props: {
        msg: String,
        title: String,
    },
    data: () => {
        return {
            books: false,
        };
    },
    components: {
        Counter,
    },
    computed: {
        hasBooksMessage() {
            return this.books ? 'Yes' : 'No';
        },
    },
})
export default class HelloWorld extends Vue {
    msg!: string;
    title!: string;
    books?: boolean = false;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
