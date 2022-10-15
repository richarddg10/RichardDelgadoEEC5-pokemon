const dataPokemones = async (id: number) => {
    try {
        const resPokemones = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await resPokemones.json();
        console.log(data);
        return data;
    } catch (error) {
        alert('error amigo mio');
        return [];
    }
};

export const accederData = async (id: number) => {

    const listaPokes = [];

    for (let i = 1; i <= id; i++) {
        const pokemon = await dataPokemones(i);
        listaPokes.push(pokemon);
    }
    return listaPokes;
};
