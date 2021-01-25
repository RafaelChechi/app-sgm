import GenericInput from "@/components/fields/input/GenericInput";
import GenericState from "@/components/fields/state/GenericState";
import { Field, TypeField } from "@/models/configs";
import { Component, Prop, Vue } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import GenericInputDate from "@/components/fields/date/GenericInputDate";

@Component({
  name: "GenericField",
})
export default class GenericField extends Vue {
  @Prop({ default: {} }) field: Field | undefined;
  @Prop() model: any;
  @Prop({ default: "" }) value: string | undefined;

  selectTypeField = (type: string) => {
    switch (type) {
      case TypeField.STATE:
        return GenericState;
      case TypeField.DATE:
        return GenericInputDate;
      default:
        return GenericInput;
    }
  };

  render(h: CreateElement): VNode {
    const field: any = this.field ? this.field : {};
    return h(this.selectTypeField(field.type), {
      props: {
        label: field.label,
        value: this.value,
        format: field.format,
        inputType: field.type,
        readonly: field.readonly,
      },
      on: {
        input: (value: any) => {
          this.$emit("input", value);
        },
      },
    });
  }
}
