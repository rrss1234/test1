const channels = [
  {
    name: "Movie All Time",
    logo: "https://i.postimg.cc/3RcqsQpk/tv-icon.webp",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209612/master.m3u8"
  },
  {
    name: "Bangla Drams",
    logo: "https://i.postimg.cc/3RcqsQpk/tv-icon.webp",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209593/master.m3u8"
  },
  {
    name: "Bangla Music",
    logo: "https://i.postimg.cc/3RcqsQpk/tv-icon.webp",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209587/master.m3u8"
  },
  {
    name: "Hindi Music",
    logo: "https://i.postimg.cc/3RcqsQpk/tv-icon.webp",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209592/master.m3u8"
  },
  {
    name: "Bangla Kirtan",
    logo: "https://i.postimg.cc/3RcqsQpk/tv-icon.webp",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209618/master.m3u8"
  },
{
    name: "Gopal Bhar",
    logo: "https://i.postimg.cc/3RcqsQpk/tv-icon.webp",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209611/master.m3u8"
  },
{
    name: "Bangla Waz",
    logo: "https://i.postimg.cc/3RcqsQpk/tv-icon.webp",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209617/master.m3u8"
}

];

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
  poster: channel.logo,
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
