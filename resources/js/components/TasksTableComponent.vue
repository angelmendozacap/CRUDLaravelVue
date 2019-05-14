<template>
  <table class="table table-hover table-striped">
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
          <a href="#" class="btn btn-warning btn-small">Editar</a>
        </td>
        <td>
          <a href="#" class="btn btn-danger btn-small" @click.prevent="deleteKeep(keep)">Eliminar</a>
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
      keeps: []
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
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
