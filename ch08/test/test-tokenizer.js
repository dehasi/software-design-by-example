import assert from "assert";

import tokenize from "../tokenizer.js";

describe('tokenizes correctly', async () => {
    it('tokenizes a single character', () => {
        assert.deepStrictEqual(tokenize('a'), [
            { kind: 'Lit', value: 'a', loc: 0 }
        ])
    })

    it('tokenizesa sequence of characters', () => {
        assert.deepStrictEqual(tokenize('ab'), [
            { kind: 'Lit', value: 'a', loc: 0 },
            { kind: 'Lit', value: 'b', loc: 1 }
        ])
    })

    it('tokenizes start anchor alone', () => {
        assert.deepStrictEqual(tokenize('^'), [
          { kind: 'Start', loc: 0 }
        ])
      })
    
      it('tokenizes start anchor followed by characters', () => {
        assert.deepStrictEqual(tokenize('^a'), [
          { kind: 'Start', loc: 0 },
          { kind: 'Lit', value: 'a', loc: 1 }
        ])
      })
    
      it('tokenizes a complex expression', () => {
        assert.deepStrictEqual(tokenize('^a*(bcd|e^)*f$gh$'), [
          { kind: 'Start', loc: 0 },
          { kind: 'Lit', loc: 1, value: 'a' },
          { kind: 'Any', loc: 2 },
          { kind: 'GroupStart', loc: 3 },
          { kind: 'Lit', loc: 4, value: 'b' },
          { kind: 'Lit', loc: 5, value: 'c' },
          { kind: 'Lit', loc: 6, value: 'd' },
          { kind: 'Alt', loc: 7 },
          { kind: 'Lit', loc: 8, value: 'e' },
          { kind: 'Lit', loc: 9, value: '^' },
          { kind: 'GroupEnd', loc: 10 },
          { kind: 'Any', loc: 11 },
          { kind: 'Lit', loc: 12, value: 'f' },
          { kind: 'Lit', loc: 13, value: '$' },
          { kind: 'Lit', loc: 14, value: 'g' },
          { kind: 'Lit', loc: 15, value: 'h' },
          { kind: 'End', loc: 16 }
        ])
      })
});
