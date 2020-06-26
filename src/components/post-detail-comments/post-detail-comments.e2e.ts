import { newE2EPage } from '@stencil/core/testing';

describe('post-detail-comments', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<post-detail-comments></post-detail-comments>');

    const element = await page.find('post-detail-comments');
    expect(element).toHaveClass('hydrated');
  });
});
