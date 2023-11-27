window.browser = window.msBrowser || window.browser || window.chrome;

function getLink(withcheck = false) {
	const acc = $(".vod-player_videoContainer__YYjtt .video-js").attr(
		"data-account"
	);
	const id = $(".vod-player_videoContainer__YYjtt .video-js").attr(
		"data-video-id"
	);
	if (withcheck && (!acc || !id)) {
		alert("No video found");
		return;
	}
	const link =
		"http://players.brightcove.net/" +
		acc +
		"/default_default/index.html?videoId=" +
		id;

	chrome.storage.sync.set({ url: link });
	return link;
}

window.addEventListener("click", () => getLink());

window.addEventListener("keydown", (event) => {
	if (event.key === "b" && event.shiftKey && event.metaKey) {
		const link = getLink(true);
		navigator.clipboard.writeText(link);
	}
});
