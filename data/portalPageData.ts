import { ClassificationData } from '@/types';

export const PREVIOUS_CLASSIFICATION_DATA: ClassificationData[] = [
  {
    id: 464658,
    name: 'Tai Chi',
    date: '02 minutes ago',
    videoSrc: '/videos/taichi.mp4',
  },
  {
    id: 4643658,
    name: 'Golf Swing',
    date: '03 days ago',
    videoSrc: '/videos/golfswing.mp4',
  },
  {
    id: 46463358,
    name: 'High Jump',
    date: '04 days ago',
    videoSrc: '/videos/highjump.mp4',
  },
  {
    id: 463334658,
    name: 'Horse Race',
    date: '05 days ago',
    videoSrc: '/videos/horcerace.mp4',
  },
  {
    id: 4643333658,
    name: 'Juggling Balls',
    date: 'A month ago',
    videoSrc: '/videos/jugglingballs.mp4',
  },
];

export const OVERVIEW_DATA = [
  {
    name: 'Animations',
    description: 'Number of animations you created yet!',
    value: '04',
    path: '/portal/animations',
  },
  {
    name: 'Classifications',
    description: 'Number of videos you classified yet!',
    value: '12',
    path: '/portal/classification',
  },
];

export const ACTIVITIES = [
  {
    activity: 'Classified a new video (Tai Chi)',
    timeStamp: new Date().toISOString(),
  },
  {
    activity: 'Animated a new modal with walking animation.',
    timeStamp: new Date().toISOString(),
  },
  {
    activity: 'You updated your account password.',
    timeStamp: new Date().toISOString(),
  },
  {
    activity: 'You deleted your classified (running) video from your history.',
    timeStamp: new Date().toISOString(),
  },
  {
    activity: 'Classified a new video (Jumping)',
    timeStamp: new Date().toISOString(),
  },
];
