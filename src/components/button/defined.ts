import {RabiaButtonElement} from './index.js';

window.customElements.define(
  'rabia-button',
  RabiaButtonElement,
);

declare global {
  interface HTMLElementTagNameMap {
    'rabia-button': RabiaButtonElement;
  }
}
