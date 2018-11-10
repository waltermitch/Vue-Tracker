import Api from '@/services/Api'

export default {
    register(credentials){
        return Api().post('register', credentials)
    }
}

/*useage
AuthenticationService.register({
    email: 'test@gmail.com',
    password: 'test@!'
})
*/