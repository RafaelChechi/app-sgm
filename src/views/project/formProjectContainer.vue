<template>
  <div>
    <div>
      <a @click="previousPage" href="#" color="#d8dbe0">
        <CIcon name="cil-chevron-circle-left-alt" />
        Voltar
      </a>
      <br />
      <br />
    </div>
    <CRow>
      <CCol sm="12" md="12">
        <CCard>
          <CCardBody>
            <CTabs variant="tabs" :active-tab="0">
              <CTab title="Projetos">
                <br />
                <template v-for="field in fields">
                  <GenericField
                    :key="field.id"
                    :field="field"
                    v-model="form[field.key]"
                  >
                  </GenericField>
                </template>
              </CTab>
              <!--<template v-for="relation in relations">
                <CTab
                  :to="resolveRelationRoutePath(relation)"
                  :key="relation.main.name"
                  :title="relation.main.labelPlural"
                >
                  <br />
                  <template v-if="onEdit || onCreate">
                    <GenericField
                      v-for="field in filterFieldsform"
                      :key="field.key"
                      :field="field"
                      v-model="form[field.key]"
                    >
                    </GenericField>
                  </template>
                  <template v-else-if="!onEdit || !onCreate">
                    <GenericListing
                      v-if="configRouter.relationRoot"
                      :addItemTitle="`Adiconar ${configRouter.relationRoot.main.labelPlural}`"
                      :items="items"
                      :fields="filterFieldsList"
                      @edit="changeRecord"
                      @new="newRecord"
                      @delete="showModalDeleteRecord"
                    />
                  </template>
                </CTab>
              </template>-->
            </CTabs>
          </CCardBody>
          <CCardFooter>
            <CButton
              v-if="true"
              :disabled="$v.form.invalid"
              @click="submit"
              type="button"
              size="sm"
              color="success"
            >
              <CIcon name="cil-check-circle" />
              Enviar
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
