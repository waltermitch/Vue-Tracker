<template>
    <v-layout row>
        <v-flex xs6 offset-xs3>
            <v-alert :value="error" color="error" icon="warning" class="mb-2">{{error}}</v-alert>
            <div class="white elevation-2">
                <v-toolbar flat dense dark class="cyan">
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <v-text-field v-model="email" label="Email" type="email"></v-text-field>
                    <v-text-field v-model="password" label="Password" type="password"></v-text-field>
                    <v-btn class="cyan" dark @click="handleLogin()">Login</v-btn>
                </div>
            </div>
        </v-flex>
    </v-layout>    
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
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
