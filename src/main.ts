import Loading from "@/plugins/loading";
import "@/plugins/theMask";
import "@/plugins/toast";
import "@/plugins/vuelidate";
import CoreuiVue from "@coreui/vue";
import VueKeycloakJs from "@dsb-norge/vue-keycloak-js";
import Vue from "vue";
import App from "./App.vue";
import { iconsSet as icons } from "./assets/icons/icons";
import router from "./router";
import store from "./store";
import axios from "axios";

const {
  VUE_APP_KEYCLOAK_API,
  VUE_APP_KEYCLOAK_REALM,
  VUE_APP_KEYCLOAK_CLIENT_ID,
} = process.env;

Vue.config.performance = true;
Vue.config.productionTip = false;

Vue.use(Loading);
Vue.use(CoreuiVue);

function tokenInterceptor() {
  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

Vue.use(VueKeycloakJs, {
  init: {
    onLoad: "login-required",
  },
  config: {
    url: VUE_APP_KEYCLOAK_API,
    realm: VUE_APP_KEYCLOAK_REALM,
    clientId: VUE_APP_KEYCLOAK_CLIENT_ID,
  },
  onReady: () => {
    tokenInterceptor();
    /* eslint-disable no-new */
    new Vue({
      router,
      store,
      icons,
      render: (h) => h(App),
    }).$mount("#app");
  },
});
