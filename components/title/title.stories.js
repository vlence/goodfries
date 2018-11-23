import React from 'react';
import {storiesOf} from '@storybook/react';
import Title from '.';
import Decorator from '../../util/storybook-decorator';

storiesOf('Title', module)
  .addDecorator(Decorator)
  .add('when rendered', () => <Title />);