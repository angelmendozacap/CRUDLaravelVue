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
          <a href="#" class="btn btn-danger btn-small">Eliminar</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  created () {
    this.getKeeps()
  },
  data () {
    return {
      keeps: []
    }
  },
  methods: {
    getKeeps() {
      const urlKeeps = "tasks";
      axios
        .get(urlKeeps)
        .then(res => {
          this.keeps = res.data;
          console.log(this.keeps)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
