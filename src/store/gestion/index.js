
import axios from 'axios'

const namespaced = true

const state = {
    gestion: null,
    detalle_gestion: [],
    persona: null
}

const mutations = {
    setGestion(state, payload){
        state.gestion = payload
    },
    setDetalleGestion(state, payload){
        state.detalle_gestion = payload
    },
    setPersona(state, payload){
        state.persona = payload
    }
}

const actions = {

    detalleGestion({state, commit}, payload){

        commit('setGestion', payload)

        const data = {
            gestion: state.gestion
        }

        axios.post(
            process.env.VUE_APP_API_URL + 'detalle_gestion',
            data
        ).then((response) => {
            commit('setDetalleGestion', response.data.detalle_gestion)
            commit('setPersona', response.data.persona)
        })

    }

}

export default {
    namespaced,
    state,
    mutations,
    actions
}