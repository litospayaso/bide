import { css, html } from 'lit';
import { state } from 'lit/decorators.js';
import Page from '../../shared/page';
import '../pageExample'; // Import the page-example component to ensure it is registered
import '../pageCamera'; // Import the new camera component
import { defineCustomElements } from '@ionic/pwa-elements/loader';

/**
 * Main application entrypoint.
 *
 * @slot - This element has a slot
 */
export default class PageBideApp extends Page {
  static styles = [
    Page.styles,
    css`
      :host {
        display: block;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      }
      .app-container {
        width: 100%;
        height: 100%;
      }
    `,
  ];

  @state()
  private currentRoute: string = window.location.pathname;

  constructor() {
    super();
    this.handlePopState = this.handlePopState.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    defineCustomElements(window);
    window.addEventListener('popstate', this.handlePopState);
    
    // Fallback for GH pages: redirect root to something or handle base path correctly
    const basePath = '/bide/'; // Depending on how it's deployed, in GH pages it's often /repo-name/
    if (this.currentRoute === '/' || this.currentRoute === basePath) {
      this.currentRoute = basePath + 'example'; // or just view example
    }
  }

  disconnectedCallback() {
    window.removeEventListener('popstate', this.handlePopState);
    super.disconnectedCallback();
  }

  private handlePopState() {
    this.currentRoute = window.location.pathname;
  }

  /**
   * Navigate manually without reloading.
   */
  public navigateTo(path: string) {
    window.history.pushState({}, '', path);
    this.currentRoute = path;
  }

  private renderRoute() {
    // Basic manual routing
    // Extract route part without basePath for simpler matching, if needed
    const normalizedRoute = this.currentRoute.replace(/\/bide\//, '/').replace(/\/$/, '');

    switch (normalizedRoute) {
      case '/example':
        return html`<page-example></page-example>`;
      case '':
      case '/':
      default:
        return html`<page-camera></page-camera>`;
    }
  }

  render() {
    return html`
      <div class="app-container">
        ${this.renderRoute()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bide-app': PageBideApp;
  }
}
