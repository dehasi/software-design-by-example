import hashExisting from './hash-existing-promise.js'

const root = process.argv[2]

hashExisting(root).then(pairs => pairs.forEach(
    ([path, hash]) => console.log(path, hash)
))

// node run-hash-existing-promise.js . | fgrep -v test/ | fgrep -v '~' | head -n 5
