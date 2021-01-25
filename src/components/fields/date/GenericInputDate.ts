import template from "@/components/fields/date/genericInputDate.vue";
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import Calendar from "vue2-slot-calendar";

@Component({
  name: "GenericInputDate",
  mixins: [template],
  components: { Calendar },
})
export default class GenericInputDate extends Vue {
  @Prop({ default: "" }) label: any;
  @Prop({ default: "" }) value: any;

  format = "dd/MM/yyyy";

  @Emit("input")
  emitInput(value: any) {
    return value;
  }
}
