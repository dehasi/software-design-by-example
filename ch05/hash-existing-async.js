import fs from 'fs-extra-promise'
import glob from 'glob-promise'
import crypto from 'crypto'

const hashExisting = async (rootDir) => {
    const pattern = `${rootDir}/**/*`
    const options = {}
    const matches = await glob(pattern, options)
    const stats = await Promise.all(matches.map(path => statPath(path)))
    const files = stats.filter(([_, stat]) => stat.isFile())
    const contents = await Promise.all(
        files.map(([path, _]) => readPath(path)))
    const hashes = contents.map(
        ([path, content]) => hashPath(path, content))
    return hashes
}

const statPath = async (path) => {
    const stat = await fs.statAsync(path)
    return [path, stat]
}

const readPath = async (path) => {
    const content = await fs.readFileAsync(path, 'utf-8')
    return [path, content]
}

const hashPath = (path, content) => {
    const hasher = crypto.createHash('sha1').setEncoding('hex')
    hasher.write(content)
    hasher.end()
    return [path, hasher.read()]
}

export { hashExisting as default }
