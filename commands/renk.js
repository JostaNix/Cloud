const Command = require("../base/Command.js");
const Discord = require("discord.js")
const { MessageMenuOption,  MessageMenu, MessageActionRow } = require("discord-buttons");
class renk extends Command {
    constructor(client) {
        super(client, {
            name: "renk",
            aliases: ["renk"]
        });
    }

    async run(message, args, client) {

        if(!this.client.config.botOwners.includes(message.author.id)) return

        const nix = new MessageMenuOption()
        .setLabel('Kırmızı')
        .setEmoji('🔴')
        .setValue('red')
        .setDescription('Kırmızı')
  
        const nix1 = new MessageMenuOption()
        .setLabel('Sarı')
        .setEmoji('')
        .setValue('yellow')
        .setDescription('Sarı')

        const nix2 = new MessageMenuOption()
        .setLabel('Yeşil')
        .setEmoji('🟢')
        .setValue('green')
        .setDescription('Yeşil')

        const nix3 = new MessageMenuOption()
        .setLabel('Mavi')
        .setEmoji('🔵')
        .setValue('blue')
        .setDescription('Mavi')

        const nix4 = new MessageMenuOption()
        .setLabel('Turuncu')
        .setEmoji('🟠')
        .setValue('orange')
        .setDescription('Turuncu')

        const nix5 = new MessageMenuOption()
        .setLabel('Mor')
        .setEmoji('🟣')
        .setValue('purple')
        .setDescription('Mor')
        
    const select = new MessageMenu()
        .setID('select1')
        .setPlaceholder('Renk rolünüzü seçin')
        .addOption(nix)
        .addOption(nix1)
        .addOption(nix2)
        .addOption(nix3)
        .addOption(nix4)
        .addOption(nix5)
  
  
     const Row1 = new MessageActionRow()
     .addComponent(select)   
    
    await message.channel.send('Aşşağıdaki menüden ""Taglı** üyelerimizin alabiliceği **Renk** rollerını seçebilirsiniz', { components: [Row1] });
}

}
module.exports = renk;
