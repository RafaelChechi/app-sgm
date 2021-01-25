"use strict";

import Vue from "vue";
import toastr from "toastr";

import "toastr/build/toastr.min.css";

const Toastr = {
  install(Vue: any, options: {}) {
    toastr.options = { ...options };
    Vue.prototype.$toastr = {};
    Vue.prototype.$toastr.success = (
      message: any,
      title: any,
      optionsOverride: any
    ) => {
      toastr.success(message, title, optionsOverride);
    };
    Vue.prototype.$toastr.error = (
      message: any,
      title: any,
      optionsOverride: any
    ) => {
      toastr.error(message, title, optionsOverride);
    };
  },
};

Vue.use(Toastr);
