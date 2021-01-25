import template from "@/components/listing/genericListing.vue";
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { getBadge, getState, format } from "@/util/Util";

interface SubItem {
  name: string;
  item: any;
}

@Component({
  name: "generic-listing",
  mixins: [template],
  components: {},
})
export default class GenericListing extends Vue {
  itemsPerPageSelect = { label: "Items Por Página" };
  tableFilter = {
    external: false,
    lazy: true,
    label: "Filtro",
    placeholder: "busca",
  };

  @Prop() formTitle?: string;
  @Prop() items?: SubItem;
  @Prop({ default: [] }) fields?: any;

  get getBadge() {
    return getBadge;
  }

  get getState() {
    return getState;
  }

  get format() {
    return format;
  }

  @Emit("edit")
  async edit(item: any) {
    return {
      item,
    };
  }

  @Emit("new")
  async newItem() {
    return;
  }

  @Emit("delete")
  async deleteItem(item: any) {
    return {
      item,
    };
  }
}
