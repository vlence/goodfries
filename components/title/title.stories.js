import React from 'react';
import {storiesOf} from '@storybook/react';
import Decorator from '../../util/storybook-decorator';

import Title from '.';

storiesOf('Title', module)
  .addDecorator(Decorator)
  .add('when rendered', () => <Title />);