import crypto from 'crypto'

const hash = crypto.createHash('sha1')
hash.setEncoding('hex')

const text = process.argv[2]

hash.write(text)
hash.end()

const sha1sum = hash.read()

console.log(`SHA1 of "${text}" is ${sha1sum}`)
