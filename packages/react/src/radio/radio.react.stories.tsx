import React from 'react';
import { RadioProps } from '@onfido/castor';
import { Meta, Story } from '../../../../docs';
import { Radio } from './radio.react';

export default {
  title: 'React/Radio',
  component: Radio,
} as Meta<RadioProps>;

export const Playground: Story<RadioProps> = (props: RadioProps) => (
  <Radio {...props} />
);
