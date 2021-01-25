import GenericListing from "@/components/listing/GenericListing";
import ModalDeleteItem from "@/components/modais/ModalDeleteItem";
import { pages } from "@/constants";
import { TypeField } from "@/models/configs";
import store from "@/store/modules/ProjectModule";
import template from "@/views/project/listingProjectContainer.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "ListingProjectContainer",
  mixins: [template],
  components: { ModalDeleteItem, GenericListing },
})
export default class ListingProjectContainer extends Vue {
  get store() {
    return store;
  }

  get fieldToList() {
    return [
      {
        key: "id",
        label: "ID",
        type: TypeField.STRING,
      },
      {
        key: "name",
        label: "Nome",
        type: TypeField.STRING,
      },
      {
        key: "description",
        label: "Descrição",
        type: TypeField.STRING,
      },
      {
        key: "start_date",
        label: "Data de Início",
        type: TypeField.STRING,
        format: TypeField.DATE,
      },
      {
        key: "end_date",
        label: "Data de Fim",
        type: TypeField.STRING,
        format: TypeField.DATE,
      },
      {
        key: "edit",
        label: "",
        type: TypeField.STRING,
        _style: "width:1%",
        sorter: false,
        filter: false,
      },
      {
        key: "delete",
        label: "",
        type: TypeField.STRING,
        _style: "width:1%",
        sorter: false,
        filter: false,
      },
    ];
  }

  async editItem(item: any) {
    store.updateState({ item: item.item });
    this.$router.push({ name: pages.EDIT_PROJECT });
  }

  async newItem() {
    this.$router.push({ name: pages.NEW_PROJECT });
  }

  async deleteItem(item: any) {
    await store.deleteProject(item.item.id);
    await store.getProjects();
  }

  async mounted() {
    store.updateState({ item: {} });
    await store.getProjects();
  }
}
