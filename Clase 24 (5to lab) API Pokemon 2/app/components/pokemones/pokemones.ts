export enum VariablesPokemones {
    id = 'id',
    name = 'name',
    weight = 'weight',
    height = 'height',
    sprites = 'sprites'  
}

class Pokemones extends HTMLElement {
    
    id?: number;
    name?: string;
    weight?: number;
    height?: number;
    sprites? : string;

    static get observedAttributes() {
        const variables: Record<VariablesPokemones, null> = { id: null, name: null, weight: null, height:null, sprites: null };
        return Object.keys(variables);
    }

    attributeChangedCallback (propName: VariablesPokemones, oldValue: string | undefined, newValue: string | undefined) {
        
        switch (propName) {

            case VariablesPokemones.id:
            this.id = newValue? Number(newValue) : 0;
            break;

            case VariablesPokemones.weight:
            this.weight = newValue? Number(newValue) : 0;
            break;

            case VariablesPokemones.height:
            this.height = newValue? Number(newValue) : 0;
            break;

            default:
                this[propName] = newValue;
            break;
        }
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
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
