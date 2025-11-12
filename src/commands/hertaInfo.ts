import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } from 'discord.js';


export const data = new SlashCommandBuilder()
    .setName('hertainfo')
    .setDescription('herta bot 정보를 표시합니다.');

export async function execute(interaction: ChatInputCommandInteraction) {
    try {
        const embed = new EmbedBuilder()
            .setColor("White")
            .setTitle("헤르타 봇 정보")
            .setTimestamp()
            .setFooter({
                text: `요청자: ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            });

        embed.addFields(
            { name: 'herta-bot', value: '스타레일 정보 검색 디스코드 봇' },
            { name: '개발자', value: '@Danielkim5216' },
            { name: 'GitHub', value: "https://github.com/Danielkim5216/herta-bot" }
        )
        interaction.reply({ embeds: [embed] });
    } catch (error) {
        interaction.reply(`${error}`);
    }
}