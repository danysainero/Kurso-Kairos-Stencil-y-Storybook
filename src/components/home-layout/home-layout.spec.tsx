import { newSpecPage } from '@stencil/core/testing';
import { HomeLayout } from './home-layout';

describe('home-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HomeLayout],
      html: `<home-layout></home-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <home-layout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </home-layout>
    `);
  });
});
