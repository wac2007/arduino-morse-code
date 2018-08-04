const five = require('johnny-five');

const config = require('./config');

const board = new five.Board({ port: config.PORT }); // Config your port here

const alphabet = require('./alphabet');

board.on('ready', async function() {
  const led = new five.Led(config.DIGITAL_PIN);
  const letterMap = alphabet.getAlphabet();
  
  const string = 'wac'; // Set your word here

  for (let letter of string) {
    await alphabet.makeLetter(letterMap[letter], led);
  };
});
