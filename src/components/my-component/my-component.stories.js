import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Components', module)
.add('My Component', () => {
  return `<my-component first="The first" middle="StencilJS" last="Component"></my-component>`
}, {notes})