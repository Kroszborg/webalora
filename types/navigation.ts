export interface SubMenuItem {
  name: string
  href: string
  description?: string
}

export interface MenuItem {
  name: string
  href?: string
  subItems?: {
    [key: string]: SubMenuItem[]
  }
}

export interface NavigationItem {
  name: string
  href?: string
  items?: MenuItem[]
}

