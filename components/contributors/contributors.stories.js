import React from 'react';
import {storiesOf} from '@storybook/react';
import Contributors from '.';
import Decorator from '../../util/storybook-decorator';

storiesOf('Contributors', module)
  .addDecorator(Decorator)
  .add('rendered', () => <Contributors />);