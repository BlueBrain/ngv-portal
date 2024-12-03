export const accentColors: { [key: string]: string } = {
  blue: '#84bbf8',
  red: '#ee7888',
  purple: '#6d63bf',

  yellow: '#ffc500',
  lavender: '#657be1',
  green: '#33b080',
  grey: '#b2b3b3',
  orange: '#ed8048',
};

export const antBreakpoint = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}

export const isServer = typeof window === 'undefined';
export const isProduction = process.env.NODE_ENV === 'production';

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

export const staticDataBaseUrl = process.env.NEXT_PUBLIC_STATIC_DATA_BASE_URL || `${basePath}/data`;

export const googleSiteVerificationCode = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_CODE;

export const gtm = {
  id: process.env.NEXT_PUBLIC_GTM_ID,
};
