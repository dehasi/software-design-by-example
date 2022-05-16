async function returnImmediately() {
    try {
        return Promise.reject(new Error('deliberate'))
    } catch (err) {
        return new Error('caught exception')
    }
}

const result = returnImmediately()
result.catch(err => console.log(`caller caught ${err}`))


async function returnAwait () {
    try {
      return await Promise.reject(new Error('deliberate'))
    } catch (err) {
      console.log('caught exception')
    }
  }

  await returnAwait();