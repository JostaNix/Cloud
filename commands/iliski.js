const Command = require("../base/Command.js");
const Discord = require("discord.js")
const { MessageMenuOption,  MessageMenu, MessageActionRow } = require("discord-buttons");
class iliski extends Command {
    constructor(client) {
        super(client, {
            name: "iliski",
            aliases: ["iliski"]
        });
    }

    async run(message, args, client) {
        if(!this.client.config.botOwners.includes(message.author.id)) return


        const nix = new MessageMenuOption()
        .setLabel('Sevgilim Var')
        .setEmoji('💍')
        .setValue('lovers')
        .setDescription('Sevgilim Var')
  
        const nix1 = new MessageMenuOption()
        .setLabel('Sevgilim Yok')
        .setEmoji('💔')
        .setValue('unlovers')
        .setDescription('Sevgilim Yok')

           const nix2 = new MessageMenuOption()
        .setLabel('Rolleri kaldırmak için seçin')
        .setValue('norole')
        .setDescription('Rolleri kaldırmak için seçin')
        
        
    const select = new MessageMenu()
        .setID('select1')
        .setPlaceholder('İlişki Durumunuzu seçin')
        .addOption(nix)
        .addOption(nix1)
        .addOption(nix2)
  
  
     const Row1 = new MessageActionRow()
     .addComponent(select)   
    
    await message.channel.send('Aşşağıdaki menüden **İlişki** durumunuzu seçebilirsiniz', { components: [Row1] });
}

}
module.exports = iliski;
