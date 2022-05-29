/* Date Of Start : 3/5/2022 | 18:00
  |------------------------------------------------------|
  | ██╗██████╗ ██╗      ██████╗ ██████╗ ██████╗ ███████╗ |
  | ██║██╔══██╗██║     ██╔═══██╗██╔══██╗██╔══██╗██╔════╝ |
  | ██║██████╔╝██║     ██║   ██║██████╔╝██║  ██║███████╗ |
  | ██║██╔══██╗██║     ██║   ██║██╔══██╗██║  ██║╚════██║ |
  | ██║██║  ██║███████╗╚██████╔╝██║  ██║██████╔╝███████║ |
  | ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚══════╝ |
  |------------------------------------------------------|
    Devloper : #AmirLoL | Channel : @iRLords | Server SSH
*/
const prompt = require('prompt-sync')();
const c = require('cli-color');
const CDS = require('create-desktop-shortcuts');

const IP = prompt(c.red('[+] ') + c.green('Please Enter IP Server => '));
const User = prompt(c.red('[+] ') + c.green('Please Enter Server Username For Login => '));
const outputPath = prompt(c.red('[+] ') + c.green('Please Enter Shortcut Output Patch => '));
const name = prompt(c.red('[+] ') + c.green('Please Enter Shortcut Name => '));
try {
  const shortcutsCreated = CDS({
    windows: {
      filePath: 'cmd',
      outputPath,
      name,
      comment: 'Created By Amir !',
      arguments: '/k ssh ' + User + '@' + IP,
      windowMode: 'normal'
    }
  });
  if (shortcutsCreated) {
    console.log(c.yellow('[!] ') + c.green('Created !'));
  }
} catch {
  console.log(c.yellow('[!] ') + c.red('Error !'));
}
