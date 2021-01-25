<template>
  <CModal
    title="Exclusão"
    color="danger"
    :show.sync="showModal"
    @update:show="update"
  >
    Confirma a exclusão do item?

    <template slot="footer">
      <button
        name="cancel"
        @click="update('cancel')"
        type="button"
        class="btn btn-secondary"
      >
        Cancelar
      </button>
      <button
        @click="update('delete')"
        name="delete"
        type="button"
        class="btn btn-danger"
      >
        Excluir
      </button>
    </template>
  </CModal>
</template>
