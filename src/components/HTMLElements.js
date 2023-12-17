function HTMLElements(str) {
    const array = [];
    const htmlTags = str.match(/<\/?\w+>/g);
    const closeTags = /\//;

    for (let i = 0; i < htmlTags.length; i++) {
        if (!closeTags.test(htmlTags[i])) {
            array.push(htmlTags[i].replace(/[<>]/g, ''));
        } else {
            const closeTagType = htmlTags[i].replace(/[\/<>]/g, '');
            if (closeTagType === array[array.length - 1]) {
                array.pop();
            } else {
                return array[array.length - 1];
            }
        }
    }

    if (array.length === 0) {
        return true;
    } else {
        return array[array.length - 1];
    }
}

// keep this function call here
// console.log(HTMLElements(readline()));
