import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, color } from '@storybook/addon-knobs'

import Headline from './index'

storiesOf('Headline', module)
  .addDecorator(withKnobs)
  .add('with a red font colour', () => <Headline fontColour={color('fontColor', '#ff0000')} text={text('headline', 'Hello world!')} />)
  .add('with some emojis', () => <Headline fontColour={color('fontColor', '#ff0000')} text={text('headline', 'Hello 🍌!')} />)

