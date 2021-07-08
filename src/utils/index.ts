
import { baseUrl } from '../config';


type OptImgUrlParams = {
  width?: 640 | 750 | 828 | 1080 | 1200 | 1920 | 2048 | 3840;
  quality?: number;
}

export function imgOpt(url: string, params?: OptImgUrlParams) {
  const width = params?.width || 1080;
  const quality = params?.quality || 75;

  return `${baseUrl}/_next/image?url=${encodeURIComponent(url)}&w=${width}&q=${quality}`;
}
