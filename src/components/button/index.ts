import {
  LitElement,
  html,
  type TemplateResult,
} from 'lit';
import {
  property,
} from 'lit/decorators.js';
import {baseStyles} from './button.css.js';

/**
* Describe what the component provides.
*/
export class RabiaButtonElement extends LitElement {
  public static override styles = [baseStyles];

  @property()
  public label?: string;

  /**
  * Render the component interface.
  *
  * @return {TemplateResult} Content to render
  **/
  protected override render(): TemplateResult {
    return html`<button>${this.label}</button>`;
  }
}
