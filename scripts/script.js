const clientID = '';
const twitchChannels = [
        {username: 'esl_sc2', id: '30220059'},
        {username: 'OgamingSC2', id: '71852806'},
        {username: 'freecodecamp', id: '79776140'}
    ];


document.addEventListener("DOMContentLoaded", () => {
	let httpRequest = new XMLHttpRequest();
	
    httpRequest.open('GET', 'https://api.twitch.tv/kraken/channels/' + twitchChannels[0].id, true);

    httpRequest.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
    httpRequest.setRequestHeader('Client-ID', clientID);

    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 400) {
                console.log('Request good');
                let data = JSON.parse(this.responseText);
                console.log(data);
                } else {
                    console.log('Request fail');
                }
            };
        };

	httpRequest.send();  
});