
const arr = [1, "a", 2, "b", 3, "c", 4, "d", undefined];
const largo = arr.length;

console.log("El largo del arreglo es ", largo);

for(let i = 0; i < largo; i++){
    console.log(arr[i]);
    if(typeof arr[i] === "string"){
        arr.splice(i, 1);
    }
}

console.log(arr);