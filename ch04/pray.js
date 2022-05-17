import glob from 'glob-promise'
import hope from './hope.js'

const main = async (srcDir) => {
    const files = await glob(`${srcDir}/test-*.js`)
    // for (const file of files) await import(file)
    const queue = files.map((file) => import(file));
    await Promise.all(queue);
}

const srcDir = process.argv[2]
await main(srcDir)

hope.run()

console.log(hope.verbose())
