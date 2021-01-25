import TheHeaderDropdownAccnt from "@/containers/header/dropdown/TheHeaderDropdownAccnt";
import { Vue, Component, Watch } from "vue-property-decorator";
import template from "@/containers/header/theHeader.vue";

@Component({
  name: "TheHeader",
  mixins: [template],
  components: {
    TheHeaderDropdownAccnt,
  },
})
export default class TheHeader extends Vue {
  items: Array<any> = [];

  get name() {
    return this.$keycloak.tokenParsed["given_name"];
  }

  @Watch("$route", { immediate: true })
  mountBreadcrumb() {
    const list: Array<any> = this.$route.meta.breadcrumb;
    if (list instanceof Array) {
      this.items = [];
      list.forEach((value: any) => {
        this.items.push({
          text: value.name,
          to: value.to,
        });
      });
    }
  }
}
