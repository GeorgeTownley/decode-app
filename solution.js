const encodedMessage = "your encoded message here";

function decode(encodedMessage) {
  // Split the input by lines
  const lines = encodedMessage.trim().split("\n");

  // Parse the lines into a map of numbers to words, also trim white space becasue it breaks array
  const numberWordMap = new Map(
    lines.map((line) => {
      const trimmedLine = line.trim();
      const [numberStr, word] = trimmedLine.split(" ");
      const number = parseInt(numberStr, 10);
      return [number, word];
    })
  );

  // Sort the keys (numbers) of the map
  const sortedNumbers = Array.from(numberWordMap.keys()).sort((a, b) => a - b);

  // Create array to hold the words
  let messageWords = [];
  let currentLineEndNumber = 1;
  let increment = 1;

  // Construct the pyramid number sequence (and decode)
  for (let number of sortedNumbers) {
    if (number === currentLineEndNumber) {
      const word = numberWordMap.get(number);
      messageWords.push(word);
      increment++;
      currentLineEndNumber += increment;
    }
  }

  // Join the words to make the decoded message
  return messageWords.join(" ");
}

console.log(decode(encodedMessage));
