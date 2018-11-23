import React from 'react';
import {storiesOf} from '@storybook/react';
import Decorator from '../../util/storybook-decorator';

import Contributors from '.';

storiesOf('Contributors', module)
  .addDecorator(Decorator)
  .add('rendered', () => <Contributors />);