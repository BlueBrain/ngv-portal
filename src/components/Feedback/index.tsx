import dynamic from 'next/dynamic';

const FeedbackLazy = dynamic(() => import('./Feedback'), { ssr: false });

export default FeedbackLazy;
