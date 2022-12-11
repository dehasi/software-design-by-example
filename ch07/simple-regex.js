const match = (pattern, text) => {
    if (pattern[0] === '^')
        return matchHere(pattern, 1, text, 0);

    let iText = 0;
    do {
        if (matchHere(pattern, 0, text, iText))
            return true;
        iText += 1;
    } while (iText < text.length);

    return false;
}

const matchHere = (pattern, iPattern, text, iText) => {
    if (iPattern === pattern.length) return true;

    // $
    if ((iPattern === (pattern.length - 1)) &&
        (pattern[iPattern] === '$') &&
        (iText === text.length)
    ) return true;

    // *
    if (((pattern.length - iPattern) > 1) &&
        (pattern[iPattern + 1] === '*')) {
        while ((iText < text.length) && (text[iText] == pattern[iPattern]))
            iText += 1;

        return matchHere(pattern, iPattern + 2, text, iText);
    }

    // .
    if ((pattern[iPattern] === '.') ||
        (pattern[iPattern] == text[iText]))
        return matchHere(pattern, iPattern + 1, text, iText + 1);
        
    return false;
}

export default match;
