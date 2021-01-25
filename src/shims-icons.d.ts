/*eslint-disable */
import Vue, { ComponentOptions } from "vue";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    icons?: any;
    config?: any;
  }
}

/*eslint-enable */
