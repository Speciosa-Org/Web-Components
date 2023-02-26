import {
  LitElement,
  html,
  type TemplateResult,
  nothing,
} from 'lit';
import {
  property,
} from 'lit/decorators.js';
import {
  ifDefined,
} from 'lit/directives/if-defined.js';
import {
  baseStyles,
} from './button.css.js';

/**
* Describe what the component provides.
*/
export class RabiaButtonElement extends LitElement {
  public static override styles = [baseStyles];

  @property()
  public label?: string;

  protected renderLabel(): TemplateResult {
    return html`
      <span
        part="label">${this.label}</span>
    `;
  }

  /**
  * Render the component interface.
  *
  * @return {TemplateResult} Content to render
  **/
  protected override render(): TemplateResult {
    return html`
      <button
        part="container"
        aria-label=${ifDefined(this.ariaLabel)}>
        ${this.label ? this.renderLabel() : nothing}
      </button>
    `;
  }
}
