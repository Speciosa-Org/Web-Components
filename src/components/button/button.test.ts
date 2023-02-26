import {
  defineCE,
  unsafeStatic,
  expect,
  assert,
  fixture,
  html,
} from '@open-wc/testing';
import {RabiaButtonElement} from './index.js';

const tagName = defineCE(RabiaButtonElement);
const tag = unsafeStatic(tagName);

const isFirefox = function() {
  return navigator
    .userAgent
    .toLowerCase()
    .includes('firefox');
};

describe('RabiaButtonElement', function() {
  it('renders with the provided label', async function() {
    const el = await fixture(
      html`<${tag} label="Test"></${tag}>`,
    );

    expect(
      el.shadowRoot
        ?.querySelector('button')
        ?.textContent?.trim(),
    ).to.equal('Test');
  });

  it(
    'renders without label if none provided',
    async function() {
      const el = await fixture(
        html`<${tag} aria-label="Test"></${tag}>`,
      );

      if (isFirefox() === false) {
        expect(
          el.shadowRoot
            ?.querySelector('button')
            ?.ariaLabel?.trim(),
        ).to.equal('Test');
      }

      expect(
        el.shadowRoot
          ?.querySelector('button span[part="label"]'),
      ).to.be.null;
    });

  describe('Accessibility', function() {
    it('meets baseline requirements', async function() {
      const el = await fixture(
        html`<${tag} label="Test"></${tag}>`,
      );

      await assert.isAccessible(el);
    });

    it('fails without any label', async function() {
      const el = await fixture(
        html`<${tag}></${tag}>`,
      );

      await assert.isNotAccessible(el);
    });

    it('aria-label is used', async function() {
      if (isFirefox() === true) {
        // eslint-disable-next-line no-invalid-this
        this.skip();
      }

      const el = await fixture(
        html`<${tag} aria-label="Not Test"></${tag}>`,
      );

      await assert.isAccessible(el);

      expect(
        el.shadowRoot
          ?.querySelector('button')
          ?.ariaLabel?.trim(),
      ).to.equal('Not Test');
    });
  });
});
