let thcJSONResponse = '{\n' +
    ' "treasureHunts": [\n' +
    ' {\n' +
    ' "uuid": "f1a6332f-27a4-4522-b52e-4937d5d747c7",\n' +
    ' "name": "name-0",\n' +
    ' "description": "description-0",\n' +
    ' "ownerEmail": "email-0@example.com",\n' +
    ' "secretCode": "abc1234",\n' +
    ' "visibility": "PRIVATE",\n' +
    ' "startsOn": 1568883640616,\n' +
    ' "endsOn": 1568887240616,\n' +
    ' "maxDuration": 720000,\n' +
    ' "shuffled": false,\n' +
    ' "requiresAuthentication": false,\n' +
    ' "emailResults": true,\n' +
    ' "hasPrize": false\n' +
    ' },\n' +
    ' {\n' +
    ' "uuid": "05de92a7-6f7c-442c-a6c3-bd97a810002f",\n' +
    ' "name": "name-1",\n' +
    ' "description": "description-1",\n' +
    ' "ownerEmail": "email-1@example.com",\n' +
    ' "secretCode": "abc1234",\n' +
    ' "visibility": "PUBLIC",\n' +
    ' "startsOn": 1568883640617,\n' +
    ' "endsOn": 1568887240617,\n' +
    ' "maxDuration": 360000,\n' +
    ' "shuffled": false,\n' +
    ' "requiresAuthentication": false,\n' +
    ' "emailResults": true,\n' +
    ' "hasPrize": true\n' +
    ' }\n' +
    ' ],\n' +
    ' "status": "OK"\n' +
    '}';
let OBJ = JSON.parse(thcJSONResponse);
if(OBJ.status === "OK") {
    let htm = document.getElementById("names");
    for(let i = 0; i < OBJ.treasureHunts.length; i++) {
        htm.innerHTML += "<a href='start.html?uuid="+OBJ.treasureHunts[i].uuid+"'><li class='listel'>"+OBJ.treasureHunts[i].name+"</li></a>"
    }
}
else
{
    alert("Something went wrong(");
}