import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Components', module)
.add('Home Layout', () => {
  return `<home-layout >
  <div slot="section" style="border: solid red">
   section
  </div>
  <div slot="footer" style="border: solid red">Contenido footer</div>
</home-layout>`
}, {notes})