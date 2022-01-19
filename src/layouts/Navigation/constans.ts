import { accentColors } from '../../config';

export enum Urls {
  ANATOMY = '/anatomy',
  METABOLISM = '/metabolism',
  BLOOD_FLOW = '/blood-flow',
  
  EXPERIMENTAL_DATA = '/experimental-data',
  RECONSTRUCION_DATA = '/reconstruction-data',
  DIGITAL_RECONSTRUCTION = '/digital-reconstruction',
  VALIDATION  = '/validations',
  PREDICTION = '/predictions'
}

export enum PagesTitle {
  ANATOMY = 'Anatomy',
  METABOLISM_UNITARY_MODEL = 'Metabolism - Unitary Model',
  BLOOD_FLOW = 'Blood flow',
  
  EXPERIMENTAL_DATA = 'Experimental data',
  RECONSTRUCION_DATA = 'Reconstruction data',
  DIGITAL_RECONSTRUCTION = 'Digital reconstruction',
  VALIDATION  = 'Validations',
  PREDICTION = 'Predictions',
}

export type NavItem = {
  color: string;
  id: 'exp' | 'rec' | 'dig',
  label: string,
  href: Urls,
  disabled?: boolean;
  children: Array<{
    label: string;
    href: Urls;
    disabled?: boolean;
  }>
}

export const navItems: NavItem[] = [
  {
    color: accentColors.blue,
    id: 'exp',
    label: 'anatomy',
    href: Urls.ANATOMY,
    children: [
      {label: PagesTitle.EXPERIMENTAL_DATA, href: Urls.EXPERIMENTAL_DATA},
      {label: PagesTitle.RECONSTRUCION_DATA, href: Urls.RECONSTRUCION_DATA},
      {label: PagesTitle.VALIDATION, href: Urls.VALIDATION},
      {label: PagesTitle.PREDICTION, href: Urls.PREDICTION}
    ]
  },
  {
    color: accentColors.purple,
    id: 'rec',
    label: 'metabolism - unitary model',
    href: Urls.METABOLISM,
    children: [
      {label: PagesTitle.EXPERIMENTAL_DATA, href: Urls.EXPERIMENTAL_DATA},
      {label: PagesTitle.DIGITAL_RECONSTRUCTION, href: Urls.DIGITAL_RECONSTRUCTION},
      {label: PagesTitle.VALIDATION, href: Urls.VALIDATION},
      {label: PagesTitle.PREDICTION, href: Urls.PREDICTION, disabled: true}
    ]
  },
  {
    color: accentColors.red,
    id: 'dig',
    label: 'blood flow',
    href: Urls.BLOOD_FLOW,
    disabled: true,
    children: [
      {label: PagesTitle.EXPERIMENTAL_DATA, href: Urls.EXPERIMENTAL_DATA},
      {label: PagesTitle.RECONSTRUCION_DATA, href: Urls.RECONSTRUCION_DATA},
      {label: PagesTitle.VALIDATION, href: Urls.VALIDATION},
      {label: PagesTitle.PREDICTION, href: Urls.PREDICTION}
    ]
  },
]
