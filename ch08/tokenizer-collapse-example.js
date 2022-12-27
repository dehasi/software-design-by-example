import tokenize from "./tokenizer-collapse.js";

const text = '^a^b*';
const result = tokenize(text);
// console.log(JSON.stringify(result, null,2));
console.log(result);