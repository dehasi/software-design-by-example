import assert from "assert";

import parse from "../parser.js";

describe('parses correctly', async () => {
    it('parses the empty string', () => {
        assert.deepStrictEqual(parse(''), [])
    })

    it('parses a single literal', () => {
        assert.deepStrictEqual(parse('a'), [
            { kind: 'Lit', loc: 0, value: 'a' }
        ])
    })

    it('parses multiple literals', () => {
        assert.deepStrictEqual(parse('ab'), [
            { kind: 'Lit', loc: 0, value: 'a' },
            { kind: 'Lit', loc: 1, value: 'b' }
        ])
    })

    it('parses alt of groups', () => {
        assert.deepStrictEqual(parse('a|(bc)'), [
            {
                kind: 'Alt',
                loc: 1,
                left: { kind: 'Lit', loc: 0, value: 'a' },
                right: {
                    kind: 'Group',
                    loc: 2,
                    end: 5,
                    children: [
                        { kind: 'Lit', loc: 3, value: 'b' },
                        { kind: 'Lit', loc: 4, value: 'c' }
                    ]
                }
            }
        ])
    })

})