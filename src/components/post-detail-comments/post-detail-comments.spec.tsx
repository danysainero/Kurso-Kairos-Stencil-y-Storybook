import { newSpecPage } from '@stencil/core/testing';
import { PostDetailComments } from './post-detail-comments';

describe('post-detail-comments', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PostDetailComments],
      html: `<post-detail-comments></post-detail-comments>`,
    });
    expect(page.root).toEqualHtml(`
      <post-detail-comments>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </post-detail-comments>
    `);
  });
});
