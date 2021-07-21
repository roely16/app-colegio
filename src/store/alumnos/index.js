import axios from 'axios'

import Swal from 'sweetalert2'

const namespaced = true

const state = {
    alumno: {},
    encargado: {},
    nuevo_encargado: null,
    papeleria: {},
    valid_alumno: false,
    valid_encargado: false,
    valid_papeleria: false,
    tab: 0,
    items: [],
    headers: [],
    page: 1,
    pageCount: null,
    search: null,
    toggle: 0,
    saving: false,
    estados_alumno: [],
    info_alumno: {}
}

const mutations = {
    setAlumno(state, paylaod){
        state.alumno = paylaod
    },
    setEncargado(state, payload){
        state.encargado = payload
    },
    setPapeleria(state, payload){
        state.papeleria = payload
    },
    setValidAlumno(state, payload){
        state.valid_alumno = payload
    },
    setValidEncargado(state, payload){
        state.valid_encargado = payload
    },
    setValidPapeleria(state, payload){
        state.valid_papeleria = payload
    },
    setTab(state, payload){
        state.tab = payload
    },
    setDataTable(state, payload){
        state.items = payload.items
        state.headers = payload.headers
    },
    setItem(state, payload){
        state.items.push(payload)
    },
    setPage(state,payload){
        state.page = payload
    },
    setPageCount(state, payload){
        state.pageCount = payload
    },
    setNuevoEncargado(state, payload){
        state.nuevo_encargado = payload
    },
    setSearch(state, payload){
        state.search = payload
    },
    setToggle(state, payload){
        state.toggle = payload
    },
    setSaving(state, payload){
        state.saving = payload
    },
    setEstadosAlumno(state, payload){
        state.estados_alumno = payload
    },
    setInfoAlumno(state, payload){
        state.info_alumno = payload
    }
}

const actions = {
    registrarAlumno({commit}){

        commit('setSaving', true)
        commit('modal/setPersistent', true, {root: true})

        const data = {
            alumno: this.state.alumnos.alumno,
            encargado: this.state.alumnos.encargado,
        }

        axios.post(
            process.env.VUE_APP_API_URL + 'registrar_alumno',
            data
        )
        .then((response) => {

            // Subir los archivos

            Swal.fire(response.data.message)
            .then(() => {
                commit('modal/setShow', false, {root: true})
                commit('setSaving', false)
                commit('modal/setPersistent', false, {root: true})
            })

            commit('setItem', response.data.alumno)
            
            
        })

    },
    obtenerAlumnos({commit, state}){

        const data = {
            matricula: state.toggle === 1 ? true : false
        }

        axios.post(process.env.VUE_APP_API_URL + 'obtener_alumnos', data)
        .then((response) => {
            commit('setDataTable', response.data)
        })

    },
    resetForm({commit}){
        commit('setAlumno', {})
        commit('setEncargado', {})
        commit('setPapeleria', {})
        commit('setValidAlumno', false)
        commit('setValidEncargado', false)
        commit('setValidPapeleria', false)
    },
    subirArchivos(){
        
    },
    eliminarAlumno(state, payload){

        console.log(payload.id)

        Swal.fire({
            title: '¿Está seguro?',
            text: "Una vez eliminado no se podrá recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#F44336',
            cancelButtonColor: '#616161',
            confirmButtonText: 'SI, ELIMINAR!',
            cancelButtonText: 'CANCELAR'
          }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
            
        })

    },
    detalleAlumno(state, payload){

        const data = {
            persona_id: payload.id
        }

        axios.post(
            process.env.VUE_APP_API_URL + 'detalle_alumno',
            data
        ).then((response) => {
            console.log(response.data)
        })

    },
    estadosAlumno({commit}, payload){

        const data = {
            gestion_id: payload.gestion,
            persona_id: payload.id
        }

        axios.post(
            process.env.VUE_APP_API_URL + 'estados_alumno',
            data
        ).then((response) => {

            commit('setEstadosAlumno', response.data)

        })

    },
    actualizarGestion({state, dispatch}, payload){

        const data = {
            estado_id: payload,
            gestion_id: state.alumno.gestion,
            persona_id: state.alumno.id
        }

        axios.post(
            process.env.VUE_APP_API_URL + 'actualizar_gestion',
            data
        ).then((response) => {

            Swal.fire(response.data.message)
            .then(() => {

                dispatch('obtenerAlumnos')

            })
        })

    },
    infoAlumno({commit}, payload){

        const data = {
            alumno_id: payload
        }

        axios.post(
            process.env.VUE_APP_API_URL + 'detalle_alumno',
            data
        ).then((response) => {

            commit('setInfoAlumno', response.data)

        })

    }
}

const getters = {
    getValidAlumno: state => state.valid_alumno,
    getValidEncargado: state => state.valid_encargado,
    getValidPapeleria: state => state.valid_papeleria,
    getAlumno: state => state.alumno,
    getEncargado: state => state.encargado,
    getPapeleria: state => state.papeleria,
    getTab: state => state.tab,
    getItemsAlumnos: state => state.items,
    getHeadersAlumnos: state => state.headers
}

export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
}