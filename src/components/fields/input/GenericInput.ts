import template from "@/components/fields/input/genericInput.vue";
import { FormattingType, TypeField } from "@/models/configs";
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "GenericInput",
  mixins: [template],
})
export default class GenericInput extends Vue {
  @Prop({ default: "" }) label: any;
  @Prop({ default: "" }) value: any;
  @Prop({ default: undefined }) format: any;
  @Prop({ default: "text" }) inputType?: any;
  @Prop({ default: false }) readonly?: any;

  get mask() {
    const format: string = this.format;
    switch (format) {
      case FormattingType.CPF_CNPJ:
        return "##.###.###/####-##";
      case FormattingType.CEP:
        return "#####-###";
      case FormattingType.PHONE:
        return "(##) #####-####";
      default:
    }
  }

  get type() {
    const type: string = this.inputType;
    switch (type) {
      case TypeField.PASSWORD:
        return "password";
      default:
        return "text";
    }
  }

  @Emit("input")
  emitInput(value: any) {
    return value;
  }
}
