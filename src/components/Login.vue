<template>
    <panel title="Login">
        <v-text-field v-model="email" label="Email" type="email"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
        <v-btn class="cyan" dark @click="handleLogin()">Login</v-btn>
    </panel>  
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
    components:{
        Panel
    },
    data() {
        return {
            email: null,
            password: '',
            error: null
        }
    },
    methods: {
        async handleLogin(){
            let credentials = {email: this.email, password: this.password}
            try {
                const response = await AuthenticationService.login(credentials)
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
            } catch (err) {
                this.error = err.response.data.error
            }
        }
    }
    
}
</script>

<style scoped>

</style>
