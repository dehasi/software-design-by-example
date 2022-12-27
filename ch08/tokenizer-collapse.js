const SIMPLE = {
    '*': 'Any',
    '|': 'Alt',
    '(': 'GroupStart',
    ')': 'GroupEnd'
};

const tokenize = (text) => {
    const result = [];
    for (let i = 0; i < text.length; i += 1) {
        const c = text[i]
        if (c in SIMPLE) {
            result.push({ kind: SIMPLE[c], loc: i });
        } else if (c === '^') {
            if (i === 0)
                result.push({ kind: 'Start', loc: i });
            else
                combineOrPush(result, c, i)
        } else if (c === '$') {
            if (i === (text.length - 1))
                result.push({ kind: 'End', loc: i });
            else
                combineOrPush(result, c, i)
        } else {
            combineOrPush(result, c, i)
        }
    }
    return result;
}

const combineOrPush = (soFar, character, locattion) => {
    const topIndex = soFar.length - 1;
    if ((soFar.length == 0) || (soFar[topIndex] !== 'Lit')) {
        soFar.push({ kind: 'Lit', 'loc': locattion, value: character });
    } else {
        soFar[topIndex].value += character;
    }
}

export default tokenize;