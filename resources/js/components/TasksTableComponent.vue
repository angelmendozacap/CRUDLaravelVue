<template>
  <table class="table table-hover table-striped table-dark">
    <thead>
      <tr>
        <th>ID</th>
        <th>Tarea</th>
        <th colspan="2">&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(keep,index) in keeps" :key="index">
        <td width="10px">{{ keep.id }}</td>
        <td>{{ keep.keep }}</td>
        <td>
          <a href="#" class="btn btn-outline-warning btn-small">Editar</a>
        </td>
        <td>
          <a
            href="#"
            class="btn btn-outline-danger btn-small"
            @click.prevent="deleteKeep(keep)"
          >Eliminar</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  created() {
    this.getKeeps();
  },
  data() {
    return {
      keeps: [],
      newKeep: "",
      error: []
    };
  },
  methods: {
    getKeeps() {
      const URL_GET_KEEPS = "tasks";
      axios
        .get(URL_GET_KEEPS)
        .then(res => {
          this.keeps = res.data;
          console.log(this.keeps);
        })
        .catch(err => {
          console.log(err);
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
          this.$swal("Nueva Tarea creada con éxito!!", "Haz click en el botón para continuar.", "success");
        })
        .catch(err => {
          this.errors = err.response.data
        });
    }
  }
};
</script>
