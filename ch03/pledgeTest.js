// opt + shift + f = format code
//const { Pledge } = require("@humanwhocodes/pledge")
// ..import Pledge from './pledge.js'
import { Pledge } from '@humanwhocodes/pledge';

new Pledge((resolve, reject) => {
  console.log('top of action callback with double then and a catch')
  setTimeout(() => {
    console.log('about to call resolve callback')
    resolve('initial result')
    console.log('after resolve callback')
  }, 0)
  console.log('end of action callback')
}).then((value) => {
  console.log(`first then with "${value}"`)
  return 'first value'
}).then((value) => {
  console.log(`second then with "${value}"`)
  return 'second value'
});
