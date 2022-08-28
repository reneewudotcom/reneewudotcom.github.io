"use strict";

var worker = new Worker("worker.js");
worker.onmessage = function(message) {
	document.body.innerHTML = message.data;
}
worker.postMessage("# Title\n **bold**");
