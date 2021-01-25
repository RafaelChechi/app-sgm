import nav from "@/containers/Nav";
import template from "@/containers/theSidebar.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "TheSidebar",
  components: {},
  mixins: [template],
})
export default class TheSidebar extends Vue {
  get nav() {
    nav.forEach((main) => {
      const arr = main._children.filter((children) => {
        const requiresAuth = children.requiresAuth;
        if (requiresAuth) {
          return this.$keycloak.hasRealmRole(requiresAuth[0]);
        }

        return true;
      });

      main._children = arr;
    });

    return nav;
  }
  get show() {
    return this.$store.state.sidebarShow;
  }

  get minimize() {
    return this.$store.state.sidebarMinimize;
  }
}
