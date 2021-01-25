import template from "@/views/employee/listingEmployeeContainer.vue";
import { Vue, Component } from "vue-property-decorator";
import ModalDeleteItem from "@/components/modais/ModalDeleteItem";
import GenericListing from "@/components/listing/GenericListing";
import { TypeField } from "@/models/configs";

@Component({
  name: "ListingEmployeeContainer",
  mixins: [template],
  components: { ModalDeleteItem, GenericListing },
})
export default class ListingEmployeeContainer extends Vue {
  get items() {
    return [];
  }

  get fieldToList() {
    return [
      {
        key: "email",
        label: "E-mail",
        type: TypeField.STRING,
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
}
