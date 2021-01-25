import template from "@/components/modais/modalDeleteItem.vue";
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";

@Component({
  name: "ModalDeleteItem",
  mixins: [template],
  components: {},
})
export default class ModalDeleteItem extends Vue {
  showModal = false;
  @Prop({ default: false }) activeModal?: boolean;

  @Emit("action")
  update(value: string) {
    return value;
  }

  @Watch("activeModal")
  modal() {
    this.showModal = this.activeModal || false;
  }
}
