import assert from "assert";

const select = (root, selector) => {
    const selectors = selector.split(' ').filter(s => s.length > 0);
    const result = firstMatch(root, selectors);
    return result;
}

const firstMatch = (node, selectors) => {
    assert(selectors.length > 0, 'Require selector(s)')

    if (node.type !== 'tag')
        return null;
    if (matchHere(node, selectors[0])) {
        if (selectors.length == 1)
            return node;
        return firstChildMatch(node, selectors.slice(1))
    }
    return firstChildMatch(node, selectors);
}

const firstChildMatch = (node, selectors) => {
    assert(node.type === 'tag', `Should only try to match first child of tags, not ${node.type}`);

    for (const child of node.children) {
        const match = firstMatch(child, selectors);
        if (match)
            return match;
    }
    return null;
}

const matchHere = (node, selector) => {
    let name = null;
    let id = null;
    let cls = null;

    if (selector.includes('#'))
        [name, id] = selector.split('#');
    else if (selector.includes('.'))
        [name, cls] = selector.split('.');
    else
        name = selector;

    return (node.name == name) &&
        ((id === null) || (node.attribs.id === id)) &&
        ((cls === null) || (node.attribs.class === cls));
}

export default select;
