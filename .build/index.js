var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_promises = __toModule(require("fs/promises"));
function uniao(arr1, arr2) {
  const arr = arr1;
  arr2.forEach((value) => {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    }
  });
  return arr;
}
function interseccao(arr1, arr2) {
  const arr = [];
  for (let item of arr1) {
    if (arr2.indexOf(item) !== -1) {
      if (arr.indexOf(item) === -1) {
        arr.push(item);
      }
    }
  }
  return arr;
}
function diferenca(arr1, arr2) {
  const arr = [];
  for (let item of arr1) {
    if (arr2.indexOf(item) !== -1) {
      if (arr.indexOf(item) === -1) {
        arr.push(item);
      }
    }
  }
  arr.forEach((value) => {
    let index = arr1.indexOf(value);
    arr1.splice(index, 1);
  });
  return arr1;
}
function prodCartesiano(arr1, arr2) {
  let arrFinal = [];
  arrFinal = arr1.map((value) => {
    const final = [];
    arr2.forEach((item) => {
      const current = `{${value}, ${item}}`;
      let permission = true;
      final.forEach((it) => {
        if (it.indexOf(current) != -1) {
          permission = false;
        }
      });
      if (permission) {
        final.push(current);
      }
    });
    return final;
  });
  return arrFinal;
}
function dividir(arr) {
  let objReturn = [];
  for (let i = 0; i < arr.length; i += 3) {
    let obj = {
      operation: arr[i],
      a: arr[i + 1].split(", "),
      b: arr[i + 2].split(", ")
    };
    objReturn.push(obj);
  }
  return objReturn;
}
async function main() {
  const FILE = await import_promises.default.readFile("./file.txt", { encoding: "utf-8" });
  const [operacoes, ...conj] = FILE.split("\n");
  const props = dividir(conj);
  for (let i = 0; i < Number(operacoes); i++) {
    switch (props[i].operation) {
      case "U":
        console.log("Uni\xE3o: ", uniao(props[i].a, props[i].b));
        break;
      case "I":
        console.log("Intersec\xE7\xE3o: ", interseccao(props[i].a, props[i].b));
        break;
      case "D":
        console.log("Diferen\xE7a: ", diferenca(props[i].a, props[i].b));
        break;
      case "C":
        console.log("Produto Cartesiano: ", prodCartesiano(props[i].a, props[i].b));
        break;
    }
  }
}
main();
//# sourceMappingURL=index.js.map
