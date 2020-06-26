import { newSpecPage } from '@stencil/core/testing';
import { PostDetail } from './post-detail';

describe('post-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PostDetail],
      html: `<post-detail></post-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <post-detail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </post-detail>
    `);
  });
});
