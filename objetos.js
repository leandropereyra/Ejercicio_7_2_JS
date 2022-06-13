const datos = {
  Nombre: "Leandro",
  Apellido: "Pereyra",
  Edad: 38,
  Altura: 170,
  EresDesarrollador: true,
};

const edad = datos.Edad;
console.log(
  "Una variable que obtenga tu edad a partir del objeto anterior: " + edad
);

const lista = [
  {
    ...datos,
  },
  {
    Nombre: "Adrià",
    Apellido: "Colsa",
    Edad: 31,
    Altura: 186,
    EresDesarrollador: false,
  },
  {
    Nombre: "Geraldine",
    Apellido: "Lombardo",
    Edad: 23,
    Altura: 170,
    EresDesarrollador: false,
  },
];

const listaOrdenada = lista.sort((a, b) => b.Edad - a.Edad);

console.log(listaOrdenada);
