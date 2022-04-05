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
const prompt = require("prompt-sync")();const c = require("cli-color");const CDS = require('create-desktop-shortcuts');const IP = prompt(c.red('[+] ')+c.green('Please Enter IP Server => '));const User = prompt(c.red('[+] ')+c.green('Please Enter Server Username For Login => '));const OP = prompt(c.red('[+] ')+c.green('Please Enter Shortcut Output Patch => '));const Ns = prompt(c.red('[+] ')+c.green('Please Enter Shortcut Name => '));try {const shortcutsCreated = CDS({onlyCurrentOS: true,verbose: true,customLogger: function (message, error) {console.log(message, error);},windows: {filePath: 'C:\\Windows\\system32\\cmd.exe',outputPath: OP,name: Ns,comment: 'Created By Amir !',arguments: '/k ssh '+User+'@'+IP,windowMode: 'normal'}});console.log(c.yellow('[!] ')+c.green('Created !'));}catch{console.log(c.yellow('[!] ')+c.red('Error !'));}