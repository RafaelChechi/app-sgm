import { Vue, Component } from "vue-property-decorator";
import template from "@/containers/header/dropdown/theHeaderDropdownAccnt.vue";

@Component({
  name: "TheHeaderDropdownAccnt",
  mixins: [template],
})
export default class TheHeaderDropdownAccnt extends Vue {
  itemsCount = 42;
}
