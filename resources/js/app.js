/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import VueSweetalert2 from 'vue-sweetalert2'

window.Vue = require('vue');

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}

Vue.use(VueSweetalert2, options)
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('tasks-table', require('./components/TasksTableComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  el: '#app',
  data: {
    newKeep: "",
    errors: [],
    fillKeep: { 'id': '', 'keep': '' },
    keeps: []
  },
  created() {
    this.getKeeps()
  },
  methods: {
    getKeeps() {
      const URL_GET_KEEPS = "tasks";
      axios
        .get(URL_GET_KEEPS)
        .then(res => {
          this.keeps = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    editKeep(keep) {
      this.fillKeep.id = keep.id
      this.fillKeep.keep = keep.keep
      $('#edit').modal('show')
    },
    updateKeep(id) {
      const URL_UPDATE_KEEPS = `tasks/${id}`
      axios.put(URL_UPDATE_KEEPS, this.fillKeep)
        .then((res) => {
          this.getKeeps();
          this.fillKeep = { 'id': '', 'keep': '' }
          this.errors = []
          $('#edit').modal('hide')
          this.$swal.fire({
            position: "top-end",
            type: "success",
            title: "Tarea actualizada con Éxito",
            showConfirmButton: false,
            toast: true,
            timer: 2500
          });
        }).catch((err) => {
          this.errors = err.response.data
        });
    },
    createKeep() {
      const URL_CREATE_KEEP = `tasks`;
      axios
        .post(URL_CREATE_KEEP, {
          keep: this.newKeep
        })
        .then(res => {
          this.getKeeps();
          this.newKeep = "";
          this.errors = [];
          $("#create").modal("hide");
          this.$swal.fire({
            position: "top-end",
            type: "success",
            title: "Tarea creada con Éxito",
            showConfirmButton: false,
            toast: true,
            timer: 2500
          });
        })
        .catch(err => {
          this.errors = err.response.data
        });
    },
    deleteKeep(keep) {
      const URL_DELETE_KEEP = `tasks/${keep.id}`;
      axios
        .delete(URL_DELETE_KEEP)
        .then(res => {
          this.getKeeps();
          this.$swal.fire({
            position: "top-end",
            type: "success",
            title: "Eliminado correctamente",
            showConfirmButton: false,
            toast: true,
            timer: 2500
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
