import fs from 'fs/promises';

function uniao(arr1: any[], arr2: any[]) {
  const arr = arr1;
  arr2.forEach(value => {
    if (arr.indexOf(value) === -1) {
      arr.push(value)
    }
  })
  return arr
}

function interseccao(arr1: any[], arr2: any[]) {
  const arr: Number[] = [];
  for (let item of arr1) {
    if (arr2.indexOf(item) !== -1) {
      if (arr.indexOf(item) === -1) {
        arr.push(item)
      }
    }
  }
  return arr
}

function diferenca(arr1: any[], arr2: any[]) {
  const arr: Array<any> = [];
  for (let item of arr1) {
    if (arr2.indexOf(item) !== -1) {
      if (arr.indexOf(item) === -1) {
        arr.push(item)
      }
    }
  }

  arr.forEach(value => {
    let index = arr1.indexOf(value)
    arr1.splice(index, 1)
  })
  return arr1
}


function prodCartesiano(arr1: any[], arr2: any[]) {
  let arrFinal: any[] = []
  arrFinal = arr1.map(value => {
    const final: any[] = [];
    arr2.forEach(item => {
      const current = `{${value}, ${item}}`;
      let permission = true;
      final.forEach(it => {
        if (it.indexOf(current) != -1) {
          permission = false
        }
      })
      if (permission) {
        final.push(current)
      }
    })
    return final;
  })
  return arrFinal
}

function dividir(arr: string[]) {
  let objReturn = [];
  for (let i = 0; i < arr.length; i += 3) {
    let obj = {
      operation: arr[i],
      a: arr[i + 1].split(", "),
      b: arr[i + 2].split(", "),
    }
    objReturn.push(obj)
  }
  return objReturn;
}

async function main() {
  const FILE = await fs.readFile('./file.txt', { encoding: "utf-8" });

  const [operacoes, ...conj] = FILE.split("\n");
  const props = dividir(conj);
  for (let i = 0; i < Number(operacoes); i++) {
    switch (props[i].operation) {
      case "U":
        console.log('União: ', uniao(props[i].a, props[i].b));
        break
      case "I":
        console.log('Intersecção: ', interseccao(props[i].a, props[i].b));
        break
      case "D":
        console.log('Diferença: ', diferenca(props[i].a, props[i].b));
        break
      case "C":
        console.log('Produto Cartesiano: ', prodCartesiano(props[i].a, props[i].b));
        break
    }
  }

}

main();