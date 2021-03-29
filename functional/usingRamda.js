const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const countNumberToString = R.pipe(R.split(''), R.map(parseInt), R.filter(Number.isInteger), R.length)
console.log(countNumberToString(sentence))
