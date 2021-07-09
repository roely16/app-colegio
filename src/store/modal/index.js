const namespaced = true

const state = {
    show: false,
    persistent: false,
    title: null,
    width: 500,
    content: null
}

const mutations = {
    setShow(state, payload){
        state.show = payload
    },
    setPersistent(state, payload){
        state.persistent = payload
    },
    setTitle(state, payload){
        state.title = payload
    },
    setWidth(state, payload){
        state.width = payload
    },
    setContent(state, payload){
        state.content = payload
    }
}

const actions = {}

export default {
    state,
    mutations,
    actions,
    namespaced
}