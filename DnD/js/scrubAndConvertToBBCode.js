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
            matcher: /Stonedeep/,
            replacement: '@[Stonedeep](settlement:a960bc0a-cde2-47fa-89ce-fb885609985c)'
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
        }
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
