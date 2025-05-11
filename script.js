// script.js document.addEventListener("DOMContentLoaded", function () { const channelList = document.getElementById("channel-list"); const tvFrame = document.getElementById("tv-frame");

channelList.addEventListener("click", function (e) { if (e.target && e.target.nodeName === "LI") { const newLink = e.target.getAttribute("data-link"); tvFrame.src = newLink;

// Add active class effect
  const lis = channelList.querySelectorAll("li");
  lis.forEach(li => li.classList.remove("active"));
  e.target.classList.add("active");
}

}); });
