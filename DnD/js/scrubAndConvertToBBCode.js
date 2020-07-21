const replacementFunction = (replacementText) => {
    let finalText = replacementText;

    const replacementMap = [
        {
            matcher: /</g,
            replacement: '['
        },
        {
            matcher: />/g,
            replacement: ']'
        },
        {
            matcher: /&rsquo;/g,
            replacement: "'"
        },
        {
            matcher: /&lsquo;/g,
            replacement: "'"
        },
        {
            matcher: /&hellip;/g,
            replacement: '...'
        },
        {
            matcher: /&ldquo;/g,
            replacement: '"'
        },
        {
            matcher: /&rdquo;/g,
            replacement: '"'
        },
        {
            matcher: /&nbsp;/g,
            replacement: ' '
        },
        {
            matcher: /&amp;/g,
            replacement: '&'
        },
        {
            matcher: /\[em\](.+?)\[\/em\]/g,
            replacement: '[i]$1[/i]'
        },
        {
            matcher: /(\[\/?)(ol)(\])/g,
            replacement: '$1ul$3'
        },
        {
            matcher: /(\[\/?)(strong)(\])/g,
            replacement: '$1b$3'
        },
    ];

    replacementMap.forEach(({matcher, replacement}) => {
        finalText = finalText.replace(matcher, replacement);
    });

    return finalText;
};

const addLinks = (replacementText) => {
    let finalText = replacementText;

    const replacementMap = [
    // list of people
        //CREEH
        {
            matcher: /Fritz/,
            replacement: '[url:https://www.worldanvil.com/w/the-fogs-mlux/a/fenfritz-swiftcog-article]Fritz[/url]'
        },
        {
            matcher: /Jalan/,
            replacement: '[url:https://www.worldanvil.com/w/the-fogs-mlux/a/jalan-kendith-article]Jalan[/url]'
        },
        {
            matcher: /Drant/,
            replacement: '[url:https://www.worldanvil.com/w/the-fogs-mlux/a/drant-article]Drant[/url]'
        },
        {
            matcher: /Alvira/,
            replacement: '[url:https://www.worldanvil.com/w/the-fogs-mlux/a/alvira-article]Alvira[/url]'
        },
        {
            matcher: /Methos/,
            replacement: '[url:https://www.worldanvil.com/w/the-fogs-mlux/a/methos-komodos-article]Methos[/url]'
        },
        {
            matcher: /Vincent/,
            replacement: '[url:https://www.worldanvil.com/w/the-fogs-mlux/a/vincent-syndarkyl-article]Vincent[/url]'
        },
        {
            matcher: /Gregory/,
            replacement: '[url:https://www.worldanvil.com/w/the-fogs-mlux/a/gregory-hammstein-article]Gregory[/url]'
        },
        {
            matcher: /Terrence/,
            replacement: '[url:https://www.worldanvil.com/w/the-fogs-mlux/a/terrence-sky-article]Terrence[/url]'
        },
        {
            matcher: /Naomi/,
            replacement: '[url:https://www.worldanvil.com/w/the-fogs-mlux/a/naomi-venstrum-article]Naomi[/url]'
        },
        {
            matcher: /Robin/,
            replacement: '[url:https://www.worldanvil.com/w/the-fogs-mlux/a/robin-stormcaller-article]Robin[/url]'
        },
        {
            matcher: /Gurp/,
            replacement: '[url:https://www.worldanvil.com/w/the-fogs-mlux/a/brother-gurp-article]Gurp[/url]'
        },
        {
            matcher: /Calypso/,
            replacement: '[url:https://www.worldanvil.com/w/the-fogs-mlux/a/calypso-stormwolf-article]Calypso[/url]'
        },
        {
            matcher: /Isabelle/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/isabelle-article]Isabelle[/url]'
        },
        {
            matcher: /Jarvis/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/jarvis-article]Jarvis[/url]'
        },
        {
            matcher: /Meghan/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/meghan-pinejumper-article]Meghan[/url]'
        },
        {
            matcher: /Jeochhmann/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/tristan-jeochhmann-article]Jeochhmann[/url]'
        },
        {
            matcher: /Tsed/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/tsed-article]Tsed[/url]'
        },
        {
            matcher: /Zavala/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/zavala-stormrender-article]Zavala[/url]'
        },
        {
            matcher: /Carissa/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/carissa-pinejumper-article]Carissa[/url]'
        },
        {
            matcher: /Borksnob/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/daryl-borksnob-article]Borksnob[/url]'
        },
        {
            matcher: /Francesca/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/francesca-liverworth-article]Francesca[/url]'
        },
        {
            matcher: /Gurk/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/gurk-article]Gurk[/url]'
        },
        {
            matcher: /Jola/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/jola-waywocket-article]Jola[/url]'
        },
        {
            matcher: /Holli Blackwater/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/holli-blackwater-article]Holli Blackwater[/url]'
        },
        {
            matcher: /Kirby Venteicher/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/kirby-venteicher-article]Kirby Venteicher[/url]'
        },
        {
            matcher: /Nancy/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/nancy-article]Nancy[/url]'
        },
        {
            matcher: /Oruhim/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/oruhim-swiftcog-article]Oruhim[/url]'
        },
        {
            matcher: /Ralodithius/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/ralodithius-article]Ralodithius[/url]'
        },
        {
            matcher: /Strudel/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/strudel-article]Strudel[/url]'
        },
        {
            matcher: /Traj'miir/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/trajmiir-article]Traj\'miir[/url]'
        },
        {
            matcher: /Wizmur/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/wizmur-greybeard-article]Wizmur[/url]'
        },
        {
            matcher: /5H33N/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/5h33n-article]5H33N[/url]'
        },
        {
            matcher: /Nymph/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/nympharinian-article]Nymph[/url]'
        },
        {
            matcher: /Fishfingers/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/fishfingers-mcgee-article]Fishfingers[/url]'
        },

        //ATRYANS
        {
            matcher: /Vanessa/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/vanessa-article]Vanessa[/url]'
        },
        {
            matcher: /Heimdall/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/heimdall-article]Heimdall[/url]'
        },
        {
            matcher: /Ragnar/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/ragnar-volaris-article]Ragnar[/url]'
        },
        {
            matcher: /Nevermore/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/nevermore-article]Nevermore[/url]'
        },
        {
            matcher: /Crass/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/crass-article]Crass[/url]'
        },
        {
            matcher: /Morpheus/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/morpheus-article]Morpheus[/url]'
        },
        {
            matcher: /Bigs/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/bigs-article]Bigs[/url]'
        },
        {
            matcher: /Athena/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/athena-article]Athena[/url]'
        },
        {
            matcher: /Helios/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/helios-article]Helios[/url]'
        },
        {
            matcher: /Annabelle/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/annabelle-article]Annabelle[/url]'
        },
        {
            matcher: /Archmage/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/the-archmage-article]Archmage[/url]'
        },
        {
            matcher: /Brent/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/brent-article]Brent[/url]'
        },
        {
            matcher: /Cinnamon/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/cinnamon-article]Cinnamon[/url]'
        },
        {
            matcher: /Dewey/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/dewey-article]Dewey[/url]'
        },
        {
            matcher: /Imodithius/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/imodithius-article]Imodithius[/url]'
        },
        {
            matcher: /Kratos/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/kratos-article]Kratos[/url]'
        },
        {
            matcher: /Lindsey/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/lindsey-cornwallis-article]Lindsey[/url]'
        },
        {
            matcher: /Talodithius/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/talodithius-article]Talodithius[/url]'
        },
        {
            matcher: /Tiny Tina/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/tiny-tina-article]Tiny Tina[/url]'
        },
        {
            matcher: /Graz'zt/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/grazzt-article]Graz\'zt[/url]'
        },
       
        //B'LERRIA
        {
            matcher: /Baldur/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/baldur-article]Baldur[/url]'
        },
        {
            matcher: /Codex/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/codex-article]Codex[/url]'
        },
        {
            matcher: /Eske/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/eske-article]Eske[/url]'
        },
        {
            matcher: /Torin/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/torin-article]Torin[/url]'
        },
        {
            matcher: /Va'kiree/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/vakiree-article]Va\'kiree[/url]'
        },

    //list of places
        //CREEH
        {
            matcher: /Ambervern/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/ambervern-article]Ambervern[/url]'
        },
        {
            matcher: /Clockwork Forge/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/clockwork-forge-article]Clockwork Forge[/url]'
        },
        {
            matcher: /Embassy Bay/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/embassy-bay-article]Embassy Bay[/url]'
        },
        {
            matcher: /Vetusto/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/vetusto-article]Vetusto[/url]'
        },
        {
            matcher: /Minnowick/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/minnowick-article]Minnowick[/url]'
        },
        {
            matcher: /Stalwartz/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/stalwartz-article]Stalwartz[/url]'
        },
        {
            matcher: /Stonedeep/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/stonedeep-article]Stonedeep[/url]'
        },
        {
            matcher: /Streamwalk/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/streamwalk-article]Streamwalk[/url]'
        },
        {
            matcher: /Accursed Archives/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/accursed-archives-article]Accursed Archives[/url]'
        },

        //ATRYA
        {
            matcher: /Atrya/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/atrya-article]Atrya[/url]'
        },
        {
            matcher: /Booyer/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/booyer-article]Booyer[/url]'
        },
        {
            matcher: /Forbidden Forest/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/the-forbidden-forest-article]Forbidden Forest[/url]'
        },
        {
            matcher: /Golden Altheim/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/golden-altheim-article]Golden Altheim[/url]'
        },
        {
            matcher: /Granting/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/granting-article]Granting[/url]'
        },
        {
            matcher: /Harper's Stronghold/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/harpers-stronghold-article]Harper\'s Stronghold[/url]'
        },
        {
            matcher: /Jericho/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/jericho-article]Jericho[/url]'
        },
        {
            matcher: /King's Landing/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/kings-landing-article]King\'s Landing[/url]'
        },
        {
            matcher: /La Ciudad Blanca/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/la-ciudad-blanca-article]La Ciudad Blanca[/url]'
        },
        {
            matcher: /Saracen/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/saracen-article]Saracen[/url]'
        },
        {
            matcher: /Winterhold/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/winterhold-article]Winterhold[/url]'
        },

        //B'LERRIA
        

        //WORLD
        {
            matcher: /Gails/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/gails-article]Gails[/url]'
        },
        {
            matcher: /Red March/,
            replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/red-march-article]Red March[/url]'
        },

    //list of things
    {
        matcher: /Millennium Artifacts/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/millennium-artifacts-article]Millennium Artifacts[/url]'
    },
    {
        matcher: /Millennium Eye/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/millennium-eye-article]Millennium Eye[/url]'
    },
    {
        matcher: /Millennium Key/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/millennium-key-article]Millennium Key[/url]'
    },
    {
        matcher: /Millennium Necklance/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/millennium-necklace-article]Millennium Necklace[/url]'
    },
    {
        matcher: /Millennium Puzzle/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/millennium-puzzle-article]Millennium Puzzle[/url]'
    },
    {
        matcher: /Millennium Ring/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/millennium-ring-article]Millennium Ring[/url]'
    },
    {
        matcher: /Millennium Rod/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/millennium-rod-article]Millennium Rod[/url]'
    },
    {
        matcher: /Millennium Scales/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/millennium-scales-article]Millennium Scales[/url]'
    },
    {
        matcher: /Millennium Feather/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/millennium-feather-article]Millennium Feather[/url]'
    },
    {
        matcher: /Millennium Pyramid/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/millennium-pyramid-of-light-article]Millennium Pyramid[/url]'
    },
    {
        matcher: /Quantum Cube/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/28millennium29-quantum-cube-article]Quantum Cube[/url]'
    },
    {
        matcher: /Millennium Shield/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/millennium-shield-article]Millennium Shield[/url]'
    },
    {
        matcher: /Millennium Spellbook/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/millennium-spellbook-article]Millennium Spellbook[/url]'
    },
    {
        matcher: /Velkaa/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/velkaa-article]Velkaa[/url]'
    },
    {
        matcher: /Volendrung/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/volendrung-article]Volendrung[/url]'
    },
    {
        matcher: /phantasmium/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/phantasmium-article]phantasmium[/url]'
    },
    {
        matcher: /Unsosen/,
        replacement: '[https://www.worldanvil.com/w/the-fogs-mlux/a/unsosen-article]Unsosen[/url]'
    },


    ];

    replacementMap.forEach(({matcher, replacement}) => {
        finalText = finalText.replace(matcher, replacement);
    });

    return finalText;
};

const outputBBcode = (output) => {
    const whereToOutput = document.getElementById('bbcode-output');

    whereToOutput.value = output;
};

const outputTextWithLinks = (output) => {
    const whereToOutput = document.getElementById('text-with-links');

    whereToOutput.value = output;
};

const convertTextBoxToBBCode = () => {
    const textToScrub = document.getElementById('cleaned-html').value;
    const bbcode = replacementFunction(textToScrub);

    outputBBcode(bbcode);
};

const addOnTimeLinks = () => {
    const textToScrub = document.getElementById('text-to-add-links-to').value;
    const textWithLinks = addLinks(textToScrub);

    outputTextWithLinks(textWithLinks);
};
