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