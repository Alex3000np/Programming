function alphabetPosition(text) {
    var collector = []
    var arrayText = text.split('')

    arrayText.forEach(element => {
        if (element.toUpperCase() != element.toLowerCase()) {
            var charNumb = parseInt(element, 36) - 9
            collector.push(charNumb)
        }
    });

    text = collector.join(' ')

    return text;
}