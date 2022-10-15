export var VariablesPokemones;
(function (VariablesPokemones) {
    VariablesPokemones["id"] = "id";
    VariablesPokemones["name"] = "name";
    VariablesPokemones["weight"] = "weight";
    VariablesPokemones["height"] = "height";
    VariablesPokemones["sprites"] = "sprites";
})(VariablesPokemones || (VariablesPokemones = {}));
class Pokemones extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const variables = { id: null, name: null, weight: null, height: null, sprites: null };
        return Object.keys(variables);
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            case VariablesPokemones.id:
                this.id = newValue ? Number(newValue) : 0;
                break;
            case VariablesPokemones.weight:
                this.weight = newValue ? Number(newValue) : 0;
                break;
            case VariablesPokemones.height:
                this.height = newValue ? Number(newValue) : 0;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section>
                ${this.id}
                ${this.name}
                ${this.weight}
                ${this.height}
                ${this.sprites}
            </section>
            `;
        }
    }
}
customElements.define('my-pokemones', Pokemones);
export default Pokemones;
