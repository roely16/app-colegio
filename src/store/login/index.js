
import axios from 'axios'

import router from '@/router'

const state = {

    login: {
        user: null,
        pass: null
    },
    statusLogin: false,
    loginData: {},
    messageError: null

}

const mutations = {

    setLogin(state, payload){

        state.login.user = payload.user
        state.login.pass = payload.pass

    },
    setLoginData(state, payload){

        state.loginData = payload

    },
    setMessageError(state, payload){

        state.messageError = payload

    }

}

const actions = {

    doLogin(state, payload){

        this.commit('setLogin', payload)

        // Petición

        axios.post(process.env.VUE_APP_API_URL + 'login', this.getters.getLogin)
        .then((response) => {

            if (response.data.status != 100) {
                
                localStorage.setItem('app-colegio', JSON.stringify(response.data))

                router.push('/home')

                return 

            }

            this.commit('setMessageError', response.data.message)
            
        })

    }

}

const getters = {

    getLogin: state => state.login,
    getMessageError: state => state.messageError,
    getLoginData: state => state.loginData

}

export default {
    state,
    mutations,
    actions,
    getters
}