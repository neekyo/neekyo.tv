# neekyo.tv

An app with full CRUD capabilities configured with an RTMP server to allow streaming videos with OBS

<div align="center">
<img height="150px" width="300px" src="https://www.pngkit.com/png/detail/212-2122903_logo-obs-panasonic-network-camera-recorder-with-viewer.png">
</div>


### Prerequisites

[OBS](https://obsproject.com/)

- Once OBS is loaded, create a new Scene, whatever name you like, in the bottom left corner labeld "Scenes" of the UI

- Just to the right of Scenes, add 2 new sources (Audio Input Capture & Display Capture) and configure them accordingly to your set-up
    * If you have more than one monitor, select which one will be used for streaming in the "Display" dropdown box of your Display Capture Source 
    * Additionally, you may notice a red border around the right-hand side of your display capture. Click and drag it inwards to make sure the whole screen is being captured.

- Testing should be applicable now by hitting "Start Recording," talking a little bit, then hitting "Stop Recording" in bottom right corner Controls panel. This creates a video file on your local machine.
    * To figure out where the file was created - go to Settings, then Output, and under the Recording section is the Recording path (alter it to what folder you want the files sent) - Open the folder manually to make sure everything's working correctly.

- Lastly, configure the below:
    * Stream Type : Custom Streaming Server
    * URL : rtmp://localhost/live
    * Stream key : This will be the ID of whichever stream you're viewing
        * e.g. if you're at `localhost:3000/streams/1` then the key will be 1
            * You will need to change the key for each new stream

- Hit "Start Streaming" and you should be able to hit play (refresh the page if not). Also keep in mind, there is also anywhere up to a 10-15 second time lag in the streaming process.

### Clone

- Clone this repo to your local machine using `https://github.com/neekyo/neekyo.tv.git`


### Setup

- Install dependencies in the 3 folders below with npm install, then npm start and you're ready to view!

```shell
$ npm install
```

- In streams/api folder:

```shell
$ json-server -p 3001 -w db.json
```

- In streams/rtmpserver folder:

```shell
$ npm start
```

- In streams/client folder:

```shell
$ npm start
```

### Preview

<img src="https://github.com/neekyo/neekyo.tv/blob/master/client/src/assets/stream3.png">
<img src="https://github.com/neekyo/neekyo.tv/blob/master/client/src/assets/stream2.png">

### Built With

JavaScript, HTML5, CSS3, Node, Node-Media-Server, json-server, React, Redux, Axios, OBS
