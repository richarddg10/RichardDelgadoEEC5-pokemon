var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const dataPokemones = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resPokemones = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = yield resPokemones.json();
        console.log(data);
        return data;
    }
    catch (error) {
        alert('error amigo mio');
        return [];
    }
});
export const accederData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const listaPokes = [];
    for (let i = 1; i <= id; i++) {
        const pokemon = yield dataPokemones(i);
        listaPokes.push(pokemon);
    }
    return listaPokes;
});
