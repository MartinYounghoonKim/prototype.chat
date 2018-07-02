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

    .signin-wrapper form {
        width: 100%;
        text-align: center;
        border: none;
    }
    .signin-wrapper form fieldset {
        margin: 0;
        padding: 0;
        border: 0;
    }

    .signin-wrapper form input {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #000;
        outline: none;
        padding-bottom: 15px;
        text-align: center;
        width: 400px;
        font-size: 20px;
    }
</style>
