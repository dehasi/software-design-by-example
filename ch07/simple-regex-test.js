import match from "./simple-regex.js";

const main = () => {
    const tests = [
        ['a', 'a', true],
        ['b', 'a', false],
        ['a', 'ab', true],
        ['b', 'ab', true],
        ['ab', 'ba', false],
        ['^a', 'ab', true],
        ['^b', 'ab', false],
        ['a$', 'ab', false],
        ['a$', 'ba', true],
        ['a*', '', true],
        ['a*', 'baac', true],
        ['ab*c', 'ac', true],
        ['ab*c', 'abc', true],
        ['ab*c', 'abbbc', true],
        ['ab*c', 'abxc', false]
    ];

    tests.forEach(([regexp, text, expected]) => {
        const actual = match(regexp, text);
        const result = (actual == expected) ? 'pass' : 'fail';
        console.log(`"${regexp}" X "${text}": ${result}`);
    });
}

main()
