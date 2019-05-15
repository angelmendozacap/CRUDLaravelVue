<form method="post" @submit.prevent="updateKeep(fillKeep.id)">
  <div class="modal fade" id="edit" aria-hidden="true" aria-labelledby="ModalCreacion" tabindex="-1" role="dialog" >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalCreacion">Editar Tarea</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <label for="keep">Editar</label>
          <input type="text" name="keep" id="keep" class="form-control" v-model="fillKeep.keep">
          <span v-for="error in errors" class="text-danger">@{{ error }}</span>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-outline-success">Actualizar</button>
        </div>
      </div>
    </div>
  </div>
</form>
