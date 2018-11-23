import React from 'react';
import {storiesOf} from '@storybook/react';
import Decorator from '../../util/storybook-decorator';

import SectionDivider from '.';

storiesOf('SectionDivider', module)
  .addDecorator(Decorator)
  .add('rendered', () => (
    <div style={{marginTop: '100px'}}>
      <SectionDivider />
    </div>
  ));