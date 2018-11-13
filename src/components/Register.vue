<template>
    <v-app>
        <v-layout row>
            <v-flex xs6 offset-xs3>
                <v-alert :value="error" color="error" icon="warning" class="mb-2">
                    {{error}}
                </v-alert>
                <div class="white elevation-2">
                    <v-toolbar flat dense class="cyan" dark>
                    <v-toolbar-title>Register</v-toolbar-title>
                    </v-toolbar>
                    <div class="pl-4 pr-4 pt-2 pb-2">
                        <v-text-field label="Email Address" type="text" v-model="email"></v-text-field>
                        <v-text-field label="Password" v-model="password" type="password"></v-text-field>

                        <v-btn class="cyan" @click="handleRegister()" type="submit">Create User</v-btn>
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </v-app>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data () {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods : {
        async handleRegister(){
            try {
                await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                })
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    }
}
</script>
<style scoped>
</style>
