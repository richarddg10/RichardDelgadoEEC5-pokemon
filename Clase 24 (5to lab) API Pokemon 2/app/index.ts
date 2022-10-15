import { accederData } from './dataPokemones.js';
import Pokemones, { VariablesPokemones } from './components/pokemones/pokemones.js';


class MyContainer extends HTMLElement {

    pokemones: Pokemones[] = [];

    constructor() {
        super();
        this.attachShadow({ mode:'open' });
    }

    connectedCallback() {
        accederData(100).then((listaPokes) => {            
            this.pokemones = listaPokes;
            console.log(listaPokes[0]);
            this.render();
        });
    }

    render() {
        if (this.shadowRoot) {

            const pokes = this.pokemones.map((pokemones) => {
                return (`
                <link rel="stylesheet" href="./components/pokemones/stylePokemones.css">

                <section class="fondo">
                    <h3 id="idPokemones">${pokemones.id}</h3>
                    <h5 id="namePokemones">${pokemones.name}</h5>
                    <h5 id="weightPokemones">Peso: ${pokemones.weight}</h5>
                    <h5 id="heightPokemones">Altura: ${pokemones.height}</h5>
                    <img id="imagePokemones" src="${pokemones.sprites.front_default}"/>
                </section>
                `);
            });

            this.shadowRoot.innerHTML = `
                ${pokes.join('')}
            `;
        }
    }
}

customElements.define('my-container', MyContainer);