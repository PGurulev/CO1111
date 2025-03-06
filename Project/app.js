function getinfo(id) {
    playerName = urlParameters.get("fname");
    deletionOBJid = id;
}

const urlParameters = new URLSearchParams(window.location.search);
const gameid = urlParameters.get("uuid");
var playerName="";
var platform=navigator.appCodeName;
console.log(platform);
console.log(gameid);

