export interface ChildrenMenu {
  name: string;
  title: string;
  to?: string;
  icon?: string;
  roles: Array<string>;
}

export interface MenuItem {
  name: string;
  children: Array<ChildrenMenu>;
}
