"use strict";

const TestApp = function () {
	this.initData = Telegram.WebApp.initData || "";
	this.initDataUnsafe = Telegram.WebApp.initDataUnsafe || "";
	Telegram.WebApp.ready();
};

TestApp.prototype.sendData = function (text) {
	// Telegram.WebApp.showAlert("\n" + this.initDataUnsafe.query_id);
	Telegram.WebApp.sendData(text);
};

function setThemeClass() {
	document.documentElement.className = Telegram.WebApp.colorScheme;
}
Telegram.WebApp.onEvent("themeChanged", setThemeClass);
setThemeClass();

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", (event) => {
	let email = document.getElementById("email").value;
	let pass = document.getElementById("pass").value;
	//Telegram.WebApp.showAlert(email + "\n" + pass);
	const testApp = new TestApp();
	testApp.sendData(email + pass);
});
