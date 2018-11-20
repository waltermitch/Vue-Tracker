<template>
    <panel title="Register">
        <v-text-field label="Email" type="text" v-model="email"></v-text-field>
        <v-text-field label="Password" v-model="password" type="password"></v-text-field>

        <v-btn class="cyan" dark @click="handleRegister()" type="submit">Create User</v-btn>
    </panel>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
    components :{
        Panel
    },
    data () {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods : {
        async handleRegister(){
            let credentials = {email: this.email, password: this.password}
            try {
                const response = await AuthenticationService.register(credentials)
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    }
}
</script>
<style scoped>
</style>
