const clientID = '';
const twitchChannels = [
        {username: 'esl_sc2', id: '30220059'},
        {username: 'OgamingSC2', id: '71852806'},
        {username: 'freecodecamp', id: '79776140'}
    ];
const channelRows = [
    {id: 'rowOne'},
    {id: 'rowTwo'},
    {id: 'rowThree'}
];


document.addEventListener("DOMContentLoaded", () => {
    for (let channels in twitchChannels) {
	let httpRequest = new XMLHttpRequest();
	
    httpRequest.open('GET', 'https://api.twitch.tv/kraken/streams/' + twitchChannels[channels].id, true);

    httpRequest.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
    httpRequest.setRequestHeader('Client-ID', clientID); 

    httpRequest.onload = function () {
        if (this.readyState === 4) {
                let data = JSON.parse(this.responseText);
                console.log(data);
                let row = document.getElementById(channelRows[channels].id);
                if (data.stream != null) {
                    row.innerHTML = data.stream.channel.display_name  + ' || ' + data.stream.channel.game;
                } else {
                    row.innerHTML = twitchChannels[channels].username + ' is not online.';
                }
            };
        };

	httpRequest.send(); 
    };
});