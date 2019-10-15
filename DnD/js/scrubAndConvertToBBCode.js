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
            matcher: /\[em\](.+?)\[\/em\]/g,
            replacement: '[i]$1[/i]'
        },
        {
            matcher: /(\[\/?)(ol)(\])/g,
            replacement: '$1ul$3'
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

const convertTextBoxToBBCode = () => {
    const textToScrub = document.getElementById('cleaned-html').value;
    const bbcode = replacementFunction(textToScrub);

    outputBBcode(bbcode);
};