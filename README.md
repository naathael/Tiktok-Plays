# Tiktok-Plays
 
Tiktok-Plays is built with the same purpose as Twitch-Plays.

Players can play from the live chat.

It mainly operates on the VBA emulator.

You can modify the code in your own way to make it work with any type of game.

## Requirements
- tiktok-live-connector
- readline
- Keypress





## Class Key 
```node
const keys = [
  'haut', 'bas', 'gauche', 'droite',
  'Haut', 'Bas', 'Gauche', 'Droite',
  'b', 'a', 'l', 'r', 'start', 'select',
  'B', 'A', 'L', 'R', 'Start', 'Select',
  'starts', 'Starts', 'selects'
];

```
This class represents all the commands that can be written in the live chat.


## Class Keybind

```node
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
```
This class represents the action to be performed when the command has been sent.




