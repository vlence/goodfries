import React from 'react';
import {storiesOf} from '@storybook/react';
import Decorator from '../../util/storybook-decorator';

import Footer from '.';

storiesOf('Footer', module)
  .addDecorator(Decorator)
  .add('rendered', () => <Footer />)