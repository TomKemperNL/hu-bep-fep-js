import {LitElement, html} from 'lit';


let API_BASE_URL = 'http://localhost:3000'

class MyElement extends LitElement {
    static properties = {
      version: {},
      message: {}
    };
  
    constructor() {
      super();
      this.version = 'STARTING';
      this.message = '';
    }
  
    handleClick(params) {
        console.log(params);
        fetch(`${API_BASE_URL}/ajaxDemo`).then(r => r.json()).then(j => this.message = j.message);
    }

    render() {
      return html`
      <p>Hier draait de echte client-side code!</p>
      <p>This is the ${this.version} code.</p>
      <button @click=${this.handleClick}>En we kunnen ajaxen!</button>
      <p>${this.message}</p>
      `;
    }
  }
  customElements.define('my-element', MyElement);