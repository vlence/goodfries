import React from 'react';
import {storiesOf} from '@storybook/react';
import SectionDivider from '.';
import Decorator from '../../util/storybook-decorator';

storiesOf('SectionDivider', module)
  .addDecorator(Decorator)
  .add('rendered', () => (
    <div style={{marginTop: '100px'}}>
      <SectionDivider />
    </div>
  ));