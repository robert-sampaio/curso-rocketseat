const promessa = new Promise(function (resolve, reject) {
  return resolve("ok");
});

async function start() {
  try {
    const result = await promessa;
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Rodar sempre.");
  }
}

start();

// promessa
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Sempre irei executar"));
