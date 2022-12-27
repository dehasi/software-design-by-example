import assert from "assert";

import tokenize from "./tokenizer.js";

describe('tokenizes correctly', async () => {
    it('tokenizes a single character', () => {
        assert.deepStrictEqual(tokenize('a'), [
            { kind: 'Lit', loc: 0, value: 'b' }
        ])
    })
});
