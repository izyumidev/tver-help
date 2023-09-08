window.browser = window.msBrowser || window.browser || window.chrome;

function getLink() {
	const acc = $(".vod-player_videoContainer__YYjtt .video-js").attr(
		"data-account"
	);
	const id = $(".vod-player_videoContainer__YYjtt .video-js").attr(
		"data-video-id"
	);
	const link =
		"http://players.brightcove.net/" +
		acc +
		"/default_default/index.html?videoId=" +
		id;

	chrome.storage.sync.set({ url: link });
	return link;
}

window.addEventListener("load", () => getLink(), false);

window.addEventListener("click", () => getLink());
