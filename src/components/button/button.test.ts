import {
  defineCE,
  unsafeStatic,
  expect,
  fixture,
  html,
} from '@open-wc/testing';
import {RabiaButtonElement} from './index.js';

const tagName = defineCE(RabiaButtonElement);
const tag = unsafeStatic(tagName);

describe('RabiaButtonElement', function() {
  it('works', async function() {
    const el = await fixture(
      html`<${tag} label="Test"></${tag}>`,
    );

    expect(
      el.shadowRoot
        ?.querySelector('button')
        ?.textContent?.trim(),
    ).to.equal('Test');
  });

  describe('Accessibility', function() {
    it('meets baseline requirements', async function() {
      const el = await fixture(
        html`<${tag}></${tag}>`,
      );

      expect(el).to.be.accessible();
    });
  });
});
