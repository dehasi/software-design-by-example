import RegexBase from "./regex-base.js";

class RegexAny extends RegexBase {

    constructor(child, rest) {
        super(rest);
        this.child = child;
    }

    _match(text, start) {
        const max_possible = text.length - start;
        for (let num = max_possible; num >= 0; num -= 1) {
            const after_many = this._matchMany(text, start, num);
            if (after_many !== undefined)
                return after_many;
        }
        return undefined;
    }

    _matchMany(text, start, num) {
        for (let i = 0; i < num; i += 1) {
            start = this.child._match(text, start);
            if (start === undefined)
                return undefined;
        }
        
        if (this.rest !== null)
            return this.rest._match(text, start);

        return start;
    }
}

const create = (child, rest = null) => {
    return new RegexAny(child, rest);
}

export default create;
