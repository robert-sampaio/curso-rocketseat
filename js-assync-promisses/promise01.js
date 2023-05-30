/**
 *
 * A promessa de que algo irá acontecer
 * Poderá dar certo ou errado,
 * mas irá acontecer
 */

let enviar = false;

console.log("Pedir Comida");
const promessa = new Promise((resolve, reject) => {
  if (enviar) {
    return console.log("Comida enviada!");
  }

  return reject("Pedido Negado!");
});

console.log("Aguardando...");

promessa
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizado!"));
