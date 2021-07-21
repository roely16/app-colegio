
import axios from 'axios'

const namespaced = true

const state = {
    gestion: null,
    detalle_gestion: [],
    persona: null,
    gestiones: [],
    headers: []
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
    },
    setTable(state, payload){
        state.gestiones = payload.items
        state.headers = payload.headers
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

    },
    gestionesAlumno({commit}, payload){

        axios.post(
            process.env.VUE_APP_API_URL + 'gestiones_alumno',
            {
                alumno_id: payload
            }
        ).then((response) => {
            commit('setTable', response.data)
        })

    }

}

export default {
    namespaced,
    state,
    mutations,
    actions
}