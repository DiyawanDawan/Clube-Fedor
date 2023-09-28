class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `<h2>Club Finder</h2>`;
    }
}

customElements.define("app-bar", AppBar);

