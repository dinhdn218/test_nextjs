export type AdminSidebarItemType = {
  label: string
  path: string
}

export type AdminSidebarType = {
  path: string
  optionalClass: string
  src: string
  featureList: AdminSidebarItemType[]
}
