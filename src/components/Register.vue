<template>
    <v-layout row>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense class="cyan" dark>
                <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <v-alert :value="true" type="info">
                    This is a error alert.
                </v-alert>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <!--
                    <v-input type="email" v-model="email" name="email" id="email" placeholder="Email Address"> </v-input><br>
                    <v-input type="password" v-model="password" name="passowrd" id="password" placeholder="Enter Password"> </v-input><br>
                    -->
                    <v-text-field label="Email Address" v-model="email"></v-text-field>
                    <v-text-field label="Password" v-model="password" type="password"></v-text-field>
                    <!--<div class="error" v-html="error"></div>-->
                    
                    <v-btn class="cyan" @click="handleRegister()" type="submit">Create User</v-btn>
                </div>
            </div>
        </v-flex>
    </v-layout>
    
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
