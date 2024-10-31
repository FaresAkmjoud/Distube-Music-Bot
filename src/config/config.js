require('dotenv').config();


module.exports = {
    token: '',
    clientId: '1301113651230539877',
    guildId: '1296519149308350514',
    youtubeApiKey: "AIzaSyClJWZ_mzD3XU2vK-aWhwBmStjAyXpeq6Y",
    mongoUri: "mongodb+srv://razexelite11:spekbot@spek.dl9mwva.mongodb.net",
    spotify: {
        clientId: "0dbeef0ee24a41f28249db9f919c97d8",
        clientSecret: "7175432a68864d23b5287dab13bd4a61",
    },
    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
    },
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
