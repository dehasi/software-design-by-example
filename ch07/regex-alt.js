import RegexBase from "./regex-base.js";

class RegexAlt extends RegexBase {

    constructor(left, right, rest) {
        super(rest);
        this.left = left;
        this.right = right;
    }

    _match(text, start) {
        for (const pat of [this.left, this.right]) {
            const after_pat = pat._match(text, start);
            if (after_pat !== undefined) {
                if (this.rest === null)
                    return after_pat;

                const after_rest = this.rest._match(text, after_pat);
                if (after_rest !== undefined)
                    return after_rest;
            }
        }
        return undefined;
    }
}

const create = (left, right, rest = null) => {
    return new RegexAlt(left, right, rest);
}

export default create;
