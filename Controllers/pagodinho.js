
const pagodinho = () => {
    const pagodes = [
        'https://www.youtube.com/watch?v=WsMEtX2NtYw',
        'https://www.youtube.com/watch?v=2E1gDZ1ENpQ',
        'https://www.youtube.com/watch?v=pV91Frc-HYE',
        'https://www.youtube.com/watch?v=cOchidcyv9Q',
        'https://www.youtube.com/watch?v=_V8dSKymOh0',
        'https://www.youtube.com/watch?v=SQBTO8fmZLU',
        'https://www.youtube.com/watch?v=G92sz1aBrTU',
        'https://www.youtube.com/watch?v=Ze5w7YsVaRw',
    ]
    const numberMusica = Math.floor(Math.random() * (pagodes.length));
    return pagodes[numberMusica];
}

module.exports = pagodinho;