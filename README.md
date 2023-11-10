Mise a jour du code le 10 novembre 
## Tiktok-Plays
Tiktok-Plays est construit dans le même but que Twitch-Plays. Télécharger l'executable de se code ou modifier le comme vous le souhaitez ! 

Les joueurs peuvent jouer depuis le chat en direct.

Ce code fonctionne avec l'émulateur VBA (Pokémon, etc.).

Il peut être modifié pour être utilisé avec d'autres jeux.

Si vous souhaitez le personnaliser pour qu'il s'adapte parfaitement à votre jeu et que vous avez besoin d'aide :

Discord : naaathael

Vous pouvez modifier le code à votre façon pour le faire fonctionner avec n'importe quel type de jeu.

## Exigences

 -tiktok-live-connector
 -readline
 -Keypress




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




