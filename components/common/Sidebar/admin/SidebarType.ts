export type SidebarMenuType = {
  label: string;
  path: string;
};

export type SidebarType = {
  path: string;
  optionalClass: string;
  src: string;
  menuList: SidebarMenuType[];
};
