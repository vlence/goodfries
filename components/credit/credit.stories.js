import React from 'react';
import {storiesOf} from '@storybook/react';
import Decorator from '../../util/storybook-decorator';

import Credit from '.';

storiesOf('Credit', module)
  .addDecorator(Decorator)
  .add('with citation', () => <Credit cite="https://www.google.com" />)