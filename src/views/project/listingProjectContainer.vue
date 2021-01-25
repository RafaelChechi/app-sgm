<template>
  <div>
    <GenericListing
      formTitle="Novo Projeto"
      :fields="fieldToList"
      :items="store.items"
      @new="newItem"
      @edit="editItem"
      @delete="deleteItem"
    />
  </div>
</template>
