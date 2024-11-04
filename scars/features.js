		function sendNotification(type, text) {
			let notificationBox = document.querySelector(".notification-box");
			const alerts = {
				info: {
					icon: `<svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>`,
					color: "bg-blue-500" // blue
				},
				error: {
					icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>`,
					color: "bg-red-500" // red
				},
				warning: {
					icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
				</svg>`,
					color: "bg-yellow-500" // yellow
				},
				success: {
					icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>`,
					color: "bg-green-500" // green
				}
			};
			let component = document.createElement("div");
			component.className = `relative flex items-center ${alerts[type].color} text-white text-sm font-bold px-4 py-3 rounded-md opacity-0 transform transition-all duration-500 mb-1`;
			component.innerHTML = `${alerts[type].icon}<p style="color: white;">${text}</p>`;
			notificationBox.appendChild(component);
			setTimeout(() => {
				component.classList.remove("opacity-0");
				component.classList.add("opacity-1");
			}, 1); //1ms For fixing opacity on new element
			setTimeout(() => {
				component.classList.remove("opacity-1");
				component.classList.add("opacity-0");
				//component.classList.add("-translate-y-80"); //it's a little bit buggy when send multiple alerts
				component.style.margin = 0;
				component.style.padding = 0;
			}, 5000);
			setTimeout(() => {
				component.style.setProperty("height", "0", "important");
			}, 5100);
			setTimeout(() => {
				notificationBox.removeChild(component);
			}, 5700);
		}
		function _copy(text) {
			try {
				navigator.clipboard.writeText(text);
				sendNotification("success", "Copied to clipboard!");
			} catch (error) {
				sendNotification("error", "Failed to copy to clipboard! DO U HAVE AUTISM?!");
			}
		}

		$(document).ready(function() {
			var bg_video_mime = "image/gif";
			if (!bg_video_mime == "video/mpeg" || !bg_video_mime == "video/mp4" || !bg_video_mime == "video/m4a") {
				// remove bgv
				$("#bgv").remove();
			}

			var bg_video = $("video").get(0);
			var bg_audio = $("audio").get(0);

			function resetMedia(media) {
				if (media) {
					media.pause();
					media.currentTime = 1;
				}
			}

			resetMedia(bg_video);
			resetMedia(bg_audio);

			if (bg_video || bg_audio) {
				$(".overlay").click(function() {
					$(".overlay").fadeOut(500);

					function playMedia(media) {
						if (media) {
							media.currentTime = 0;
							media.play();
						}
					}

					playMedia(bg_video);
					playMedia(bg_audio);
				});

				if (bg_video && bg_audio && bg_video.src == bg_audio.src) {
					setInterval(function() {
						if (bg_video && bg_audio && bg_video.src == bg_audio.src) {
							if (bg_video.currentTime != bg_audio.currentTime) {
								bg_video.currentTime = bg_audio.currentTime;
							}
						}
					}, 1000);
				}
			}
		});
