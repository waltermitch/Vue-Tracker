<template>
    <div>
        <h1>REGISTER</h1>

        <form method="post" >
            <input type="email" v-model="email" name="email" id="email" placeholder="Email Address"> <br>
            <input type="password" v-model="password" name="passowrd" id="password" placeholder="Enter Password"> <br>
            <button @click="handleRegister()" type="submit">Create User</button>
        </form>
    </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods : {
        async handleRegister(){
            //e.preventDefault()
            const response =  await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
            console.log(response.data)
        }
    }
}
</script>
<style scoped>

</style>
