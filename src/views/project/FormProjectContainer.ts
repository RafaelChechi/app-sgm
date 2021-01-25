/* eslint-disable @typescript-eslint/camelcase */
import GenericField from "@/components/fields/GenericField";
import { pages } from "@/constants";
import { TypeField } from "@/models/configs";
import store from "@/store/modules/ProjectModule";
import template from "@/views/project/formProjectContainer.vue";
import { Component, Vue } from "vue-property-decorator";
import { maskDate, date } from "@/util/Util";

@Component({
  name: "FormProjectContainer",
  mixins: [template],
  components: { GenericField },
  validations: {
    form: {},
  },
})
export default class FormProjectContainer extends Vue {
  form: any = {};

  fields: any = [
    {
      key: "name",
      label: "Nome do Projeto",
      readonly: this.isEdit ? true : false,
    },
    { key: "description", label: "Descrição" },
    { key: "start_date", label: "Data de Início", type: TypeField.DATE },
    { key: "end_date", label: "Data de Fim" },
  ];

  get store() {
    return store;
  }

  previousPage() {
    this.$router.go(-1);
  }

  get isEdit() {
    return this.$route.name == pages.EDIT_PROJECT;
  }

  async submit() {
    console.log("form", this.form);
    if (!this.isEdit) {
      await store.createProject({
        ...this.form,
      });
      this.$router.push({ name: pages.LIST_PROJECT });
    } else {
      const start_date = date(this.form.start_date);

      await store.updateProject({
        ...this.form,
        start_date: start_date,
      });
      this.$router.push({ name: pages.LIST_PROJECT });
    }
  }

  mounted() {
    this.form = {
      ...store.item,
      start_date: maskDate(store.item.start_date),
      end_date: maskDate(store.item.start_date),
    };
  }
}
