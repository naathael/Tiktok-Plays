const { WebcastPushConnection } = require('tiktok-live-connector');
const keypress = require('keypress');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const keys = [
  'haut', 'bas', 'gauche', 'droite',
  'Haut', 'Bas', 'Gauche', 'Droite',
  'b', 'a', 'l', 'r', 'start', 'select',
  'B', 'A', 'L', 'R', 'Start', 'Select',
  'starts', 'Starts', 'selects'
];

class KeysBind {
  executeKeyAction(keyCmd) {
    keyCmd = keyCmd.toLowerCase();
    if (keyCmd === 'haut') {
      simulateKeyPress('w');
    } else if (keyCmd === 'bas') {
      simulateKeyPress('s');
    } else if (keyCmd === 'gauche') {
      simulateKeyPress('a');
    } else if (keyCmd === 'droite') {
      simulateKeyPress('d');
    } else if (keyCmd === 'b') {
      simulateKeyPress('b');
    } else if (keyCmd === 'a') {
      simulateKeyPress('v');
    } else if (keyCmd === 'l') {
      simulateKeyPress('f');
    } else if (keyCmd === 'r') {
      simulateKeyPress('g');
    } else if (keyCmd === 'start') {
      simulateKeyPress('enter');
    } else if (keyCmd === 'select') {
      simulateKeyPress('n');
    }
  }
}

function simulateKeyPress(key) {
  keypress.sendKey(key);
}

async function main() {
  const account = await new Promise((resolve) => {
    rl.question("Enter the TikTok username.", (account) => {
      resolve(account);
    });
  });

  const keyBinder = new KeysBind();  
  const client = new WebcastPushConnection(account);

  client.on("connect", () => {
    console.log("Connected to Room ID:", client.roomId);
  });

  client.on('disconnected', () => {
    console.log('Disconnected :(');
  });

  client.on("comment", (event) => {
    console.log(`${event.nickname} -> ${event.comment}`);
    const key = event.comment;
    if (keys.includes(key.toLowerCase())) {
      keyBinder.executeKeyAction(key);
    }
  });

  client.on('error', err => { 
    console.error('Error!', err);
  });

  keypress(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.resume();

  client.connect();
}

main().catch((err) => {
  console.error("Error occurred:", err);
});
