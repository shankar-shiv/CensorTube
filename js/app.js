function setCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Debug purposes
// setCookie('ppkcookie', 'testcookie', 7);

function getCookie(cname) {
	var name = cname + "=";
	var elements = document.cookie.split(';');
	console.log("elements" + elements);
	for (var i = 0; i < elements.length; i++) {
		var c = elements[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return null;
}

function eraseCookie(name) {
	document.cookie = name + '=; Max-Age=-99999999;';
}




var comments, rBool, pBool, hBool, sBool, vBool;
var racism = ["test", "nigg", "chink", "redneck", "gypsy", "redskin", "yellow"];
var profanity = ["fuck", "shit", "bastard", "cunt", "dick", "crap", "bitch", "whore", "slut", "hoe", "hell", "retard", "inbred"];
var homophobia = ["fag", "dyke", "transvestite", "tranny", "sodomite", "homo"];
var sexism = ["feminazi", "femenazi", "bitch", "slut", "cunt", "whore", "hoe"];
var violence = ["kill", "death", "blood", "flesh", "gore"];

rBool = 1;
pBool = 1;
hBool = 1;
sBool = 1;
vBool = 1;

var numCensored = 0;

// Same as setTimeout(), but repeats the execution of the function continuously.
setInterval(function () {
	// I had to inspect element into a Youtube site to find out the class names
	comments = document.getElementsByClassName("style-scope ytd-comment-renderer");
	// console.log(comments.length);


	for (var i = 0; i < comments.length; i++) {
		var censoredFlag = 0;
		if (rBool == 1) {
			for (var j = 0; j < racism.length; j++) {
				if (comments[i].innerHTML.toLowerCase().indexOf(racism[j]) != -1) {
					censoredFlag = 1;

					comments[i].innerHTML = "A racist comment has been found. The sentence includes : \"" + racism[j] + "\"";
					comments[i].style = "color: #f2ff00; font-weight: underline; text-decoration: underline";
				}
			}
		}

		if (pBool == 1) {
			for (var j = 0; j < profanity.length; j++) {
				if (comments[i].innerHTML.toLowerCase().indexOf(profanity[j]) != -1) {
					censoredFlag = 1;

					comments[i].innerHTML = "A profanity comment has been found. The sentence includes : \"" + profanity[j] + "\"";
					comments[i].style = "color: #f2ff00; font-weight: underline; text-decoration: underline";
				}
			}
		}

		if (hBool == 1) {
			for (var j = 0; j < homophobia.length; j++) {
				if (comments[i].innerHTML.toLowerCase().indexOf(homophobia[j]) != -1) {
					censoredFlag = 1;

					comments[i].innerHTML = "A homophobic comment has been found. The sentence includes : \"" + homophobia[j] + "\"";
					comments[i].style = "color: #f2ff00; font-weight: underline; text-decoration: underline";
				}
			}
		}


		if (sBool == 1) {
			for (var j = 0; j < sexism.length; j++) {
				if (comments[i].innerHTML.toLowerCase().indexOf(sexism[j]) != -1) {
					censoredFlag = 1;

					comments[i].innerHTML = "A sexist comment has been found. The sentence includes : \"" + sexism[j] + "\"";
					comments[i].style = "color: #f2ff00; font-weight: underline; text-decoration: underline";
				}
			}
		}


		if (vBool == 1) {
			for (var j = 0; j < violence.length; j++) {
				if (comments[i].innerHTML.toLowerCase().indexOf(violence[j]) != -1) {
					censoredFlag = 1;

					comments[i].innerHTML = "A violent comment has been found. The sentence includes : \"" + violence[j] + "\"";
					comments[i].style = "color: #f2ff00; font-weight: underline; text-decoration: underline";
				}
			}
		}

		if (censoredFlag == 1) {
			numCensored++;
			// console.log("numCensored : " + numCensored);
		}

	}
	if (numCensored != 0) {
		document.title = "CENSORED: " + numCensored;
		console.log("numCensored : " + numCensored);
	}


}, 250);