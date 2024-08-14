import React from 'react';
import VerticalTimelineComponent from '@/components/VerticalTimeline';
import { SectionWrapper } from '../hoc';

const Experience = () => {
  return <VerticalTimelineComponent />;
};

export default SectionWrapper(Experience, 'work');
