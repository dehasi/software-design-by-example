// opt + shift + f = format code
//const { Pledge } = require("@humanwhocodes/pledge")
// ..import Pledge from './pledge.js'
import { Pledge } from '@humanwhocodes/pledge';

new Pledge((resolve, reject) => {
  console.log('top of action callback with deliberate error')
  setTimeout(() => {
    console.log('about to reject on purpose')
    reject('error on purpose')
  }, 0)
}).then((value) => {
  console.log(`should not be here with "${value}"`)
}).catch((err) => {
  console.log(`in error handler with "${err}"`)
});
