function rePromise(valid) {
  let promise = new Promise(function (resolve, reject) {
    if (valid) {
      resolve({
        data: [{}, {}, {}, {}],
      });
    } else {
      reject({
        error: "Something went wrong",
      });
    }
  });

  return promise;
}

// let promise = rePromise(false);

// promise.then((res) => {
//   console.log(res);
// });

async function getDatabyAsync() {
  try {
    let res = await rePromise(false);
    console.log("Try Block");
    console.log(res);
    // catcg always take one parameter
  } catch (error) {
    // if rejet storing data into promise object, await pass that data to the catch's parameter
    console.log(error);
  }
}

getDatabyAsync();
