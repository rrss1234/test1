// script.js document.addEventListener("DOMContentLoaded", function () { const channelList = document.getElementById("channel-list"); const video = document.getElementById("tv-video");

function playChannel(url) { if (Hls.isSupported()) { const hls = new Hls(); hls.loadSource(url); hls.attachMedia(video); } else if (video.canPlayType('application/vnd.apple.mpegurl')) { video.src = url; } }

channelList.addEventListener("click", function (e) { const target = e.target.closest("li"); if (target && target.dataset.link) { const newLink = target.getAttribute("data-link"); playChannel(newLink);

// Active class update
  const lis = channelList.querySelectorAll("li");
  lis.forEach(li => li.classList.remove("active"));
  target.classList.add("active");
}

});

// Default channel load const firstChannel = channelList.querySelector("li"); if (firstChannel) { playChannel(firstChannel.getAttribute("data-link")); firstChannel.classList.add("active"); } });
