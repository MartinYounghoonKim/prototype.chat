<template>
    <div class="signin-wrapper">
        <div>
            <h1>Typing your nickname</h1>
            <form @submit.prevent="submit">
                <fieldset>
                    <input type="text" v-model="nickname">
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Signin',
        data() {
            return {
                nickname: ''
            }
        },
        methods: {
            submit () {
                console.log(this.nickname);
            }
        }
    }
</script>

<style scoped>
    .signin-wrapper {
        height: 100%;
    }
    .signin-wrapper > div {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        flex-flow: row wrap;
    }
    .signin-wrapper > div h1 {
        flex-flow: row wrap;
        margin-bottom: 20px;
    }
    h1, h2 {
        font-weight: normal;
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
