import template from "@/components/fields/state/genericState.vue";
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import {} from "@/util/Util";

@Component({
  name: "GenericState",
  mixins: [template],
})
export default class GenericState extends Vue {
  selectOptions: any = [
    { label: "ATIVO", value: "ACTIVE" },
    { label: "INATIVO", value: "INACTIVE" },
  ];

  @Prop({ default: "" }) label: any;
  @Prop({ default: "" }) value: any;

  @Emit("input")
  emitInput(event: any) {
    return event.target.value;
  }
}
