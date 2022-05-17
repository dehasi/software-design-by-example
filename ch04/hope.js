class Hope {

    constructor() {
        this.tests = []
        this.passes = [];
        this.fails = [];
        this.errors = [];
    }

    test(message, callback) {
        this.tests.push([message, callback])
    }

    run() {
        this.tests.forEach(([message, test]) => {
            try {
                test()
                this.passes.push(message)
            } catch (e) {
                if (e instanceof assert.AssertionError) this.fails.push(message)
                else this.errors.push(message)
            }
        })
    }

    terse() {
        return this.cases()
            .map(([title, results]) => `${title}: ${results.length}`)
            .join(' ')
    }

    verbose() {
        let report = ''
        let prefix = ''
        for (const [title, results] of this.cases()) {
            report += `${prefix}${title}:`
            prefix = '\n'
            for (const r of results) {
                report += `${prefix}  ${r}`
            }
        }
        return report
    }

    cases() {
        return [
            ['passes', this.passes],
            ['fails', this.fails],
            ['errors', this.errors]]
    }
}
const hope = new Hope();

export default hope;
// module.exports = hope;
