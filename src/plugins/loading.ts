"use strict";

import Loading from "@/components/loading/Loading";

let vm: any = {};

export default {
  install(Vue: any, options: {}) {
    const loadingPlugin: any = Vue.extend(Loading);
    vm = new loadingPlugin({ ...options }).$mount();
    document.body.appendChild(vm.$el);

    Vue.prototype.$loading = {};
    Vue.prototype.$loading.show = (loading = true) => (vm.loading = loading);
  },
};

export const showLoading = function (value: boolean): void {
  vm.loading = value;
};
