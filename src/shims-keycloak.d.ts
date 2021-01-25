import Vue from "vue";

declare let keycloak: any;

declare module "vue/types/vue" {
  interface Vue {
    $keycloak: keycloak;
  }
}
