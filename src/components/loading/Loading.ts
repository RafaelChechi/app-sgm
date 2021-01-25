import { Vue, Component } from "vue-property-decorator";
import template from "@/components/loading/loading.vue";

@Component({
  name: "Loading",
  mixins: [template],
})
export default class Loading extends Vue {
  text = "Aguarde...";
  dark = false;
  classes = null;
  loading = false;
  background = null;
  customLoader = null;

  get bc() {
    return (
      this.background ||
      (this.dark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)")
    );
  }
}
