import Vue from "vue";

interface Toastr {
  success(message: any, title?: any, optionsOverride?: any): void;
  error(message: any, title?: any, optionsOverride?: any): void;
}

declare module "vue/types/vue" {
  interface Vue {
    $toastr: Toastr;
  }
}
