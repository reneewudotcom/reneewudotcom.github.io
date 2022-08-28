"use strict";

var worker = new Worker("showdown/worker.js");
worker.onmessage = function(message) {
	document.body.innerHTML = message.data;
}
worker.postMessage("# Title\n **bold**");
