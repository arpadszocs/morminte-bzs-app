import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Home',
    iconName: 'solar:widget-add-line-duotone',
    route: '/dashboard',
  },
  {
    navCap: 'Gallery',
    divider: true
  },
  {
    displayName: 'Granit',
    iconName: 'solar:gallery-linear',
    route: '/granit'
  },
  {
    displayName: 'Granit-M',
    iconName: 'solar:gallery-linear',
    route: '/granit-m'
  },
  {
    displayName: 'Mosaic',
    iconName: 'solar:gallery-linear',
    route: '/mosaic'
  },
  {
    displayName: 'Mosaic-M',
    iconName: 'solar:gallery-linear',
    route: '/mosaic-m'
  },
  {
    displayName: 'Other',
    iconName: 'solar:gallery-linear',
    route: '/other'
  },
  {
    navCap: 'About us',
    divider: true,
  },
  {
    displayName: 'Locations',
    iconName: 'octicon:location-16',
    route: '/locations',
  },
  {
    displayName: 'Contacts',
    iconName: 'hugeicons:contact-02',
    route: '/contacts',
  },
  {
    navCap: 'Auth',
    divider: true,
    admin: true
  },
  {
    displayName: 'Login',
    iconName: 'solar:login-3-line-duotone',
    route: '/authentication/login',
    admin: true
  },
  {
    displayName: 'Register',
    iconName: 'solar:user-plus-rounded-line-duotone',
    route: '/authentication/register',
    admin: true
  },
  {
    navCap: 'Admin',
    divider: true
  },
  {
    displayName: 'Icons',
    iconName: 'solar:sticker-smile-circle-2-line-duotone',
    route: '/extra/icons',
  }
];
