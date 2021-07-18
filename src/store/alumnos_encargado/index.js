import axios from 'axios'

const namespaced = true

const state = {
    alumnos: []
}

const mutations = {
    
    setAlumnos(state, payload){
        state.alumnos = payload
    }
}

const actions = {

    obtener_alumnos({commit}){

        const usuario = JSON.parse(localStorage.getItem('app-colegio'))

        const data = {
            persona_id: usuario.persona.id
        }

        axios.post(
            process.env.VUE_APP_API_URL + 'alumnos_encargado',
            data
        ).then((response) => {

            commit('setAlumnos', response.data)

        })

    }

}

export default {
    namespaced,
    state,
    mutations,
    actions
}

