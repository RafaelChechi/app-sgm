<template>
  <CCard>
    <CCardHeader>
      <CButton size="sm" color="success" class="ml-1 outline" @click="newItem">
        {{ formTitle }}
      </CButton>
    </CCardHeader>
    <CCardBody border>
      <CDataTable
        :items="items"
        :fields="fields"
        :tableFilter="tableFilter"
        :itemsPerPageSelect="{ label: 'Items Por Página' }"
        :items-per-page="5"
        hover
        sorter
        pagination
      >
        <template
          v-for="field in fields"
          :slot="field.key"
          slot-scope="{ item }"
        >
          <td v-bind:key="field.key">
            <template v-if="field.type == 'STATE'">
              <CBadge :color="getBadge(item[field.key])">
                {{ getState(item[field.key]) }}
              </CBadge>
            </template>
            <template v-else-if="field.key == 'edit'">
              <CButton
                title="Alterar"
                size="lg"
                class="ml-1"
                color="#ebedef"
                @click="edit(item)"
              >
                <CIcon name="cil-pencil" />
              </CButton>
            </template>

            <template v-else-if="field.key == 'delete'">
              <CButton
                title="Excluir"
                size="lg"
                class="ml-1"
                color="#ebedef"
                @click="deleteItem(item)"
              >
                <CIcon name="cil-trash" />
              </CButton>
            </template>

            <template v-else>
              <template v-if="field.format">
                {{ format(field.format, item[field.key]) }}
              </template>
              <template v-else>
                {{ item[field.key] }}
              </template>
            </template>
          </td>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>
