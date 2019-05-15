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
          <a href="#" class="btn btn-outline-warning btn-small" @click.prevent="updateKeep(keep)">Editar</a>
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
  props: {
    keeps: {
      type: Array,
      required: true,
    }
  },
  created() {
    // this.getKeeps();
  },
  data() {
    return {

    };
  },
  methods: {
    deleteKeep(keep) {
      this.$emit('delete-keep', keep)
    },
    updateKeep(keep) {
      this.$emit('update-keep', keep)
    }
  }
};
</script>
