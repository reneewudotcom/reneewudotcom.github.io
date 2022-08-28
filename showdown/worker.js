"use strict";

importScripts('showdown.js');
var converter = new showdown.Converter();

self.onmessage = function(message) {
	postMessage(converter.makeHtml(message.data));
}
