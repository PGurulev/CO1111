function setCookie(cookieName, cookieValue, expireDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}
let date = new Date();
let milliseconds = 365 * 24 * 60 * 60 * 1000;
let expireDateTime = date.getTime() + milliseconds;
date.setTime(expireDateTime);
//document.cookie = "Firstname=john";
//document.cookie = "Lastname=Smith";
setCookie("Firstname","John",expireDateTime);
setCookie("Lastname","Smith",expireDateTime);
var cookies = document.cookie;
console.log(cookies);
//Code from w3shools url="https://www.w3schools.com/js/js_cookies.asp"
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
console.log(getCookie("Firstname"));
console.log(getCookie("Lastname"));