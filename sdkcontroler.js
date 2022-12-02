window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQCFN7vvgOvazfo-1HiR2_T-YAd7_hlrVlA7E041noLR1fp-78h37h_nsoXGyrah9B6Mb7f-mok5CSr-jUlYyAHmYHzcIdDucOr40AUXAbd0s-qDuGYTRF_zbBLjSK-HwayRxvBa6DNk12_EUa88b0Rels9nJEuV5XElvst16H5Qi0YuD7x7XmVkMM4HYWqwgZ8ScQ';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); },
      volume: 0.5
    }); 

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }) => { 
      console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
        console.error(message);
    });

    document.getElementById('togglePlay').onclick = function() {
        player.togglePlay();
    };

     player.connect();
}