import RegexBase from "./regex-base.js";

class RegexSeq extends RegexBase {

    constructor(chars) {
        super();
        this.chars = chars;
    }

    _match(text, start) {
        return undefined; // FIXME;
    }
}

export default (chars) => new RegexSeq(chars);