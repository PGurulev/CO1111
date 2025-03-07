function getinfo(id) {
    const playerNameField = document.getElementById("fname");
    if(playerNameField.value != "") {
        var playerName = playerNameField.value;
        console.log(playerName);
        document.getElementById("form").remove();
        const urlParameters = new URLSearchParams(window.location.search);
        const gameid = urlParameters.get("uuid");
        startHunt(playerName, gameid);
    }
}
function startHunt(PlayerName,gameid)
{

    console.log(gameid);
    var platform="TreasureHuntApp";
    var URL = "https://codecyprus.org/th/api/start?player="+PlayerName+"&app="+platform+"&treasure-hunt-id="+gameid;
    fetch(URL)
        .then(response => response.json()) //Parse JSON text to JavaScript object
        .then(jsonObject => {
            console.log(jsonObject)
            var sessionID = jsonObject.session;
            var numOfQuestions = jsonObject.numOfQuestions;
        });
}
function getQuestion(sessionID){
    var URL = "https://codecyprus.org/th/api/question?session="+sessionID;
    if(document.getElementById("secondWrap") != null)
    {
        document.getElementById("secondWrap").remove();
    }
    fetch(URL)
        .then(response => response.json()) //Parse JSON text to JavaScript object
        .then(jsonObject => {
            i = document.getElementById("myWraper");
            i.innerHTML += "<form id='form'>";
            if(jsonObject.questionType == "TEXT")
            {
                i.innerHTML += "<label for='ans'>"+jsonObject.questionText+"</label><br>" +
                    "<input type='text' id='ans' name='ans'><br>" +
                    "<button type='button' onclick=getAnswer('"+sessionID+","+document.getElementById("ans")+"')>Submit</button>";
                if(jsonObject.canBeSkipped){
                    i.innerHTML+="<button type='button' onclick='skipQuestion('"+sessionID+"')>Skip this question, you will lose points for skipping question</button>";
                }
                i.innerHTML+="</form>";
            }
            else if(jsonObject.questionType == "NUMERIC" || jsonObject.questionType == "INTEGER")
            {
                if(jsonObject.questionType == "NUMERIC") {
                    i.innerHTML += "<label for='ans'>" + jsonObject.questionText + "</label><br>" +
                        "<input type='number' id='ans' name='ans' step='0.01'><br>" +
                        "<button type='button' onclick=getAnswer('" + sessionID + ","+document.getElementById("ans")+"')>Submit</button>";
                    if (jsonObject.canBeSkipped) {
                        i.innerHTML += "<button type='button' onclick='skipQuestion('" + sessionID + "')>Skip this question, you will lose points for skipping question</button>";
                    }
                    i.innerHTML += "</form>";
                }
                else{
                    i.innerHTML += "<label for='ans'>" + jsonObject.questionText + "</label><br>" +
                        "<input type='number' id='ans' name='ans'><br>" +
                        "<button type='button' onclick=getAnswer('" + sessionID + ","+document.getElementById("ans")+"')>Submit</button>";
                    if (jsonObject.canBeSkipped) {
                        i.innerHTML += "<button type='button' onclick='skipQuestion('" + sessionID + "')>Skip this question, you will lose points for skipping question</button>";
                    }
                    i.innerHTML += "</form>";
                }
            }
            else{
                if(jsonObject.questionType == "BOOLEAN")
                {
                    i.innerHTML+= "<p>"+jsonObject.questionText+"</p>\n" +
                        "<input type='radio' id='true' name='ans' value='True'>\n" +
                        "<label for='true'>True</label><br>\n" +
                        "<input type='radio' id='false' name='ans' value='False'>\n" +
                        "<label for='false'>False</label><br>\n " +
                        "<button type='button' onclick=getAnswer('" + sessionID + ","+document.querySelector('input[name="ans"]:checked').value+"')>Submit</button>";
                    if (jsonObject.canBeSkipped) {
                        i.innerHTML += "<button type='button' onclick='skipQuestion('" + sessionID + "')>Skip this question, you will lose points for skipping question</button>";
                    }
                    i.innerHTML += "</form>";
                }
                else{
                    i.innerHTML+= "<p>"+jsonObject.questionText+"</p>\n" +
                        "<input type='radio' id='A' name='ans' value='A'>\n" +
                        "<label for='A'>A</label><br>\n" +
                        "<input type='radio' id='B' name='ans' value='B'>\n" +
                        "<label for='B'>B</label><br>\n " +
                        "<input type='radio' id='C' name='ans' value='C'>\n" +
                        "<label for='C'>C</label><br>\n" +
                        "<input type='radio' id='D' name='ans' value='D'>\n" +
                        "<label for='D'>D</label><br>\n " +
                        "<button type='button' onclick=getAnswer('" + sessionID + ","+document.querySelector('input[name="ans"]:checked').value+"')>Submit</button>";
                    if (jsonObject.canBeSkipped) {
                        i.innerHTML += "<button type='button' onclick='skipQuestion('" + sessionID + "')>Skip this question, you will lose points for skipping question</button>";
                    }
                    i.innerHTML += "</form>";
                }
            }
        });
}
function getAnswer(sessionID, ans){
    var URL = "https://codecyprus.org/th/api/question?session="+sessionID+"&answer="+toString(ans);
    document.getElementById("form").remove();
    fetch(URL)
        .then(response => response.json()) //Parse JSON text to JavaScript object
        .then(jsonObject => {
            var Congrats = jsonObject.message;
            var scorAdjustment = jsonObject.scoreAdjustment;
            i = document.getElementById("myWraper");
            i+="<div id='secondWrap'>" +
                "<h1 id='congratulation'>"+Congrats+"</h1>" +
                "<p id='scoreAdjustment'>You got +"+scorAdjustment+"</p>" +
                "<input type='button' value='Continue' onclick='getQuestion("+sessionID+")'>" +
                "</div>";
        });
}
function skipQuestion(sessionID){
    var URL = "https://codecyprus.org/th/api/question?session="+sessionID;
    fetch(URL)
        .then(response => response.json()) //Parse JSON text to JavaScript object
        .then(jsonObject => {
            var Congrats = jsonObject.message;
            var scorAdjustment = jsonObject.scoreAdjustment;
            i = document.getElementById("myWraper");
            i+="<div id='secondWrap'>" +
                "<h1 id='congratulation'>"+Congrats+"</h1>" +
                "<p id='scoreAdjustment'>You got +"+scorAdjustment+"</p>" +
                "<input type='button' value='Continue' onclick='getQuestion("+sessionID+")'>" +
                "</div>";
        });
}
function getLocation(){
    return navigator.geolocation.getCurrentPosition(showPosition);
}
function getScore(sessionID){
    var URL = "https://codecyprus.org/th/api/question?session="+sessionID;
    fetch(URL)
        .then(response => response.json()) //Parse JSON text to JavaScript object
        .then(jsonObject => {
            var Congrats = jsonObject.player;
            var scorAdjustment = jsonObject.score;
            i = document.getElementById("myWraper");
            i+="<div id='secondWrap'>" +
                "<h1 id='congratulation'>"+Congrats+"</h1>" +
                "<p id='scoreAdjustment'>You got +"+scorAdjustment+"</p>" +
                "<input type='button' value='Continue' onclick='getQuestion("+sessionID+")'>" +
                "</div>";
        });
}

