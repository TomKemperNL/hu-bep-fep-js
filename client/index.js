import {LitElement, html} from 'lit';

class MyElement extends LitElement {
    static properties = {
      version: {},
    };
  
    constructor() {
      super();
      this.version = 'STARTING';
    }
  
    render() {
      return html`
      <p>Hier draait de echte client-side code!</p>
      <p>This is the ${this.version} code.</p>
      `;
    }
  }
  customElements.define('my-element', MyElement);