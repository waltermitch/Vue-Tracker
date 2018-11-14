import Api from '@/services/Api'

export default {
    register(credentials){
        return Api().post('register', credentials)
    },

    login(credentials){
        return Api().post('login', credentials)
    }
}

/*usage
AuthenticationService.register({
    email: 'test@gmail.com',
    password: 'test@!'
})
*/