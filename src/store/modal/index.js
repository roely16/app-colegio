const namespaced = true

const state = {
    show: false,
    persistent: false
}

const mutations = {
    setShow(state, payload){
        state.show = payload
    },
    setPersistent(state, payload){
        state.persistent = payload
    }
}

const actions = {}

export default {
    state,
    mutations,
    actions,
    namespaced
}