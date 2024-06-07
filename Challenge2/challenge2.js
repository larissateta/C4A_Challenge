function StringTransform (string) {
    const length = string.length;

    if(length%3 === 0) {

        string = string.split('').reverse().join('');

    }
    if(length%5 === 0) {

        string = string.split('').map(char => char.charCodeAt(0)).join(' ');

    }
    if(length%15 === 0) {
        string = string.split('').reverse().map(char => char.charCodeAt(0)).join(' ');

    }

    return string;
}



console.log(StringTransform('Pizza'));