import React from 'react';
import { Lottie } from '@crello/react-lottie';
import animationDataFull from './lib/Hero_Elbowbump_12fps.json';
import animationDataGet from './lib/Hero_Elbowbump_Hover_L_12fps.json';
import animationDataGive from './lib/Hero_Elbowbump_Hover_R_12fps.json';

const Animation = () => (
  <Lottie config={{ animationData: animationDataFull }} />
);

export default Animation;
