import React from 'react';
import {storiesOf} from '@storybook/react';
import Decorator from '../../util/storybook-decorator';

import Header from '.';

storiesOf('Header', module)
  .addDecorator(Decorator)
  .add('rendered', () => <Header />)