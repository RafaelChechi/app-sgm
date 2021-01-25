import { Content } from "@/models/configs";

export interface ConfigRouter {
  context: Context;
  root: Content;
  relations: Content[];
  relationRoot?: Content;
  components: any;
}

interface Context {
  name: string;
  path: string;
  redirect: string;
  label: string;
}
