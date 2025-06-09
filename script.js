const channels = [
  {
    name: "Gazi Tv",
    logo: "https://i.postimg.cc/CMrZ8hDz/Gtv.png",
    url: "https://app24.jagobd.com.bd/.../gazibdz.stream/playlist.m3u8"
  },
  {
    name: "Channel 9",
    logo: "https://i.postimg.cc/0yDrh74w/Channel-9.png",
    url: "https://app24.jagobd.com.bd/.../channel9hd.stream/playlist.m3u8"
  },
  {
    name: "Channel I",
    logo: "https://i.postimg.cc/52d256tN/Channel-i.png",
    url: "https://app24.jagobd.com.bd/.../channeli-8-org.stream/playlist.m3u8"
  },
  // ... আরও চ্যানেলগুলো এখানে থাকবে ...
];

// 🔁 এই URL টা হবে সব চ্যানেলের জন্য কমন লোগো (প্লে শুরুর আগে দেখা যাবে)
const defaultPoster = "https://i.postimg.cc/Gt7rd4zD/20250609-120504.jpg";

let currentChannel = 0;
let player = null;

function loadChannel(index) {
  const channel = channels[index];
  if (player) player.destroy();

  document.getElementById("player").style.opacity = 0;

  setTimeout(() => {
    player = new Clappr.Player({
      source: channel.url,
      parentId: "#player",
      poster: defaultPoster, // সব চ্যানেলের জন্য একই পোস্টার
      width: "100%",
      height: "100%",
      autoPlay: true,
      mute: false,
    });
    document.getElementById("player").style.opacity = 1;
  }, 300);
}

function renderChannelList() {
  const list = document.getElementById("channelList");
  channels.forEach((channel, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${channel.logo}" alt=""> ${channel.name}`;
    li.onclick = () => {
      currentChannel = index;
      loadChannel(currentChannel);
    };
    list.appendChild(li);
  });
}

function nextChannel() {
  currentChannel = (currentChannel + 1) % channels.length;
  loadChannel(currentChannel);
}

function prevChannel() {
  currentChannel = (currentChannel - 1 + channels.length) % channels.length;
  loadChannel(currentChannel);
}

renderChannelList();
loadChannel(currentChannel);
