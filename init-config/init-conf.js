const term = require('terminal-kit').terminal;

term.bold.green('Welcome to the JungleTop configuration wizard\n');
term.bold.green('Please answer the following questions to configure your JungleTop instance\n');

// Ask the use if they are using Internet Explorer 11 or an older browser
const IE11 = async () => {
    term.white('Are you using Internet Explorer 11? (y/N)\n');
    await term.yesOrNo({yes: ['y', 'Y'], no: ['n', 'N', 'ENTER']}, (err, res) => {
        if (res) {
            term.bold.red('You are using an outdated browser. Please upgrade to a modern browser.\n');
            term.bold.red('Run this as a terminal application or it probably will not function.\n');
        } else {
            term.bold.green('Good news everyone"!\n');
        }
    })
}

const palettes = {
    spring: ['#fadadd', '#FFE5B4', '#FF7F50', '#fa8072', '#FFD580', '#FFFF00', '#00FF7F', '#93E9BE',
        '#87ceeb', '#E6E6FA', '#CBC3E3', '#FF69B4', '#FF00FF', '#BFFF00', '#3EB489', '#00FFFF'],

    summer: ['#fed426', '#FFA500', '#de1738', '#FF69B4', '#F01D7F', '#6a0dad', '#0096FF', '#00FFFF',
        '#428047', '#00FF7F', '#FAFA33', '#FFE5B4', '#FDBCB4', '#fc5a8d', '#ffbcd9', '#ffc1cc'],

    autumn: ['#DAA520', '#b22222', '#b8860b', '#FFA500', '#8B4513', '#A0522D', '#556B2F', '#9acd32',
        '#800000', '#FF0000', '#964B00', '#D2B48C', '#bdb76b', '#808000', '#013220', '#deb887'],

    winter: ['#FFFFFF', '#C0C0C0', '#ADD8E6', '#000080', '#A7C7E7', '#4169e1', '#89CFF0', '#CBC3E3',
        '#E6E6FA', '#FFC0CB', '#FF007F', '#FFE5B4', '#FFFDD0', '#fadadd', '#D3D3D3', '#a9a9a9']
}

// Convert HEX to RGB
const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? term.colorRgb(
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ) : null;
}

const hexToRGB=(hex)=> {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    console.log(r, g, b);
    return term.colorRgb(r, g, b);
}

const changePalette = async () => {
    term.white('Do you want to change the terminal palette? (Y/n)\n');
    await term.yesOrNo({yes: ['y', 'Y', 'ENTER'], no: ['n', 'N']}, (err, res) => {
        if (res) {
            term.singleColumnMenu(Object.keys(palettes), {
                title: 'Choose a palette',
                cancelable: true,
            }, (rej, choose)=>{
                if (rej) {
                    term.bold.red('Canceled\n');
                } else {
                    term.bold.green(`You chose ${choose.selectedText}\n`);
                    let choice = Object.values(palettes)[choose.selectedIndex];
                    choice.forEach(((color, index, array) => {array[index] = hexToRGB(color)}));
                    // choice.forEach((color)=>{hexToRGB(color)});
                    console.log(JSON.stringify(choice))
                    term.setPalette(palettes[choice]);
                }
            })
        } else {
            term.bold.green('Palette not changed\n');
        }
    })
}

const main =async ()=>{
    await IE11();
    await changePalette();
}

main()