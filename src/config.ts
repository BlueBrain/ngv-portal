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

export const isServer = typeof window === 'undefined';
export const isProduction = process.env.NODE_ENV === 'production';

export const deploymentUrl = 'https://bbp.epfl.ch';
export const baseUrl = '/ngv-portal';

export const staticDataBaseUrl = process.env.NEXT_PUBLIC_STATIC_DATA_BASE_URL;

export const feedbackUrl = process.env.NEXT_PUBLIC_FEEDBACK_URL;
