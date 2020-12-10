import React from 'react';
import { CheckboxProps } from '@onfido/castor';
import { Meta, Story } from '../../../../docs';
import { Checkbox } from './checkbox.react';

export default {
  title: 'React/Checkbox',
  component: Checkbox,
} as Meta<CheckboxProps>;

export const Playground: Story<CheckboxProps> = (props: CheckboxProps) => (
  <Checkbox {...props} />
);
