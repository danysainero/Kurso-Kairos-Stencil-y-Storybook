import { newE2EPage } from '@stencil/core/testing';

describe('home-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<home-layout></home-layout>');

    const element = await page.find('home-layout');
    expect(element).toHaveClass('hydrated');
  });
});
