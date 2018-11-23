import React from 'react';
import {storiesOf} from '@storybook/react';
import Decorator from '../../util/storybook-decorator';
import Blockquote from '.';

storiesOf('Blockquote', module)
  .addDecorator(Decorator)
  .add('with quote', () => (
    <Blockquote>
      <p>One does not simply fry potatoes.</p>
    </Blockquote>
  ))
  .add('with quote and citation', () => (
    <Blockquote cite="Victor">
      <p>One does not simply fry potatoes.</p>
    </Blockquote>
  ))