export interface Payload {
  paramsUrl: any[];
  paransQuery: [];
  payload: any;
}

export interface State {
  apiPath: string;
  items: Array<any>;
  item: any;
  status: string;
  onCreate: boolean;
  onEdit: boolean;
  onView: boolean;
  onDelete: boolean;
}
