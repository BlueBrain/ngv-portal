import React from 'react';
import dynamic from 'next/dynamic';

import { staticDataBaseUrl } from '../../config';
import { VideoProps } from './video-player';



const codecVideoType = {
  h264: 'video/mp4',
  hevc: 'video/mp4; codecs=hvc1',
  av1: '', // TODO: encode and add av1 videos
};

export function composeSources(videoBasePath, sizes = [360, 480, 720, 1080], codecs = ['hevc', 'h264']) {
  return sizes
    .reduce((acc, size) => ([...acc, ...codecs.map(codec => ([size, codec]))]), [])
    .map(([size, codec]) => ({
      size,
      src: `${staticDataBaseUrl}${videoBasePath}.${size}p.${codec}.mp4`,
      type: codecVideoType[codec],
    }));
}

const VideoPlayerLazy = dynamic(() => import('./video-player'), { ssr: false });

const VideoPlayer: React.FC<VideoProps> = (props) => {
  return (
    <VideoPlayerLazy {...props} />
  );
};


export default VideoPlayer;
