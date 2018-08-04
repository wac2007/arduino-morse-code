const unit = 500; // in ms

function wait (ms) {
  return new Promise((r, j)=>setTimeout(r, ms))
};

async function getDot(led) {
  led.on();
  await wait(unit);
  led.off();
}

async function getDash(led) {
  led.on();
  await wait(unit * 3);
  led.off();
}

async function getLetterWait() {
  await wait(unit * 3);
}

async function getWordWait() {
  await wait(unit * 7);
}

async function makeLetter(pattern, led) {
  for (let char of pattern) {
    switch(char) {
      case '.':
        await getDot(led);
        break;
      case '-':
      await getDash(led);
        break;
      case ' ':
      await getWordWait();
        break;
    }
    await getLetterWait();
  };
}

function getAlphabet() {
  return {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    0: '-----',
  };
};

module.exports = {
  getAlphabet,
  makeLetter,
};
