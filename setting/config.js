const fs = require('fs')

global.owner = "628389844059" //owner number
global.botname = "Developed By Tama Ryuichi"
global.footer = "Tama Ryuichi" //footer section
global.status = true //"self/public" section of the bot
global.mess = {
ingroup: "It's not funny, this feature is only for groups💢",
admin: "not funny, only group admins use this feature💢",
owner: "Wow! You're not my owner!",
premium: "You are not a premium user",
seller: "you don't have access as a seller yet?",
wait: "please just wait bruh.."
}

global.packname = "Tama Ryuichi"
global.author = "2009"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
