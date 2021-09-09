import { accentColors } from '../../config';

export enum Urls  {
  ANATOMY = '/anatomy',
  METABOLISM = '/metabolism',
  BLOOD_FLOW = 'blood-flow',
  EXPERIMENTAL_DATA = '/experimental-data',
  RECONSTRUCION_DATA = '/reconstruction-data',
  VALIDATION  = '/validations',
  PREDICTION = '/predictions'
}

export type NavItem = {
  color: string;
  id: 'exp' | 'rec' | 'dig',
  label: string,
  href: Urls,
  disabled?: boolean;
  children: Array<{
    label: string;
    href: Urls
  }>
}

export const navItems: NavItem[] = [
  {
    color: accentColors.blue,
    id: 'exp',
    label: 'anatomy',
    href: Urls.ANATOMY,
    children: [
      {label: 'Experimental Data', href: Urls.EXPERIMENTAL_DATA},
      {label: 'Reconstruction Data', href: Urls.RECONSTRUCION_DATA},
      {label: 'Validations', href: Urls.VALIDATION},
      {label: 'Predictions', href: Urls.PREDICTION}
    ]
  },
  {
    color: accentColors.purple,
    id: 'rec',
    label: 'metabolism',
    href: Urls.METABOLISM,
    disabled: true,
    children: [
      {label: 'Experimental Data', href: Urls.EXPERIMENTAL_DATA},
      {label: 'Reconstruction Data', href: Urls.RECONSTRUCION_DATA},
      {label: 'Validations', href: Urls.VALIDATION},
      {label: 'Predictions', href: Urls.PREDICTION}
    ]
  },
  {
    color: accentColors.red,
    id: 'dig',
    label: 'blood flow',
    href: Urls.BLOOD_FLOW,
    disabled: true,
    children: [
      {label: 'Experimental Data', href: Urls.EXPERIMENTAL_DATA},
      {label: 'Reconstruction Data', href: Urls.RECONSTRUCION_DATA},
      {label: 'Validations', href: Urls.VALIDATION},
      {label: 'Predictions', href: Urls.PREDICTION}
    ]
  },
]
