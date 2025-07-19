const channels = [
  
  {
    name: "All Time Movies",
    logo: "https://i.postimg.cc/nVNDJ5bd/20250522-024451.jpg",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209612/master.m3u8"
  },
  {
    name: "SGCN CINEM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJq8DhC4-umbKOQs5siiM6RtD5q8JgF3k6LVdU4AKP-6_El07i0dbdxlRq&s=10",
    url: "https://freedishbhai.vercel.app/bpk-tv/SGCN_Hindi_MOB/index.m3u8"
  },
  {
    name: "SCGN সিনেমা",
    logo: "https://www.mysgcn.com/img/sgcnchannels/sgcn_bangla_cinema.png",
    url: "https://freedishbhai.vercel.app/bpk-tv/SGCN_Bangla_MOB/index.m3u8"
  },
  {
    name: "Kolkata Movies",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0DZPlqJPVFrdtyeHW9_Ib6CHpgutrwiT6j5GLiIGjg4S1bfFNHRUxKnz&s=10",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209627/master.m3u8"
  },
  {
    name: "Bangla Drams",
    logo: "https://i.postimg.cc/G20mh9Lj/20250522-025124.jpg",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209593/master.m3u8"
  },
  {
    name: "Ahil Tv HD",
    logo: "https://i.postimg.cc/6qPT58m2/20250522-024115.jpg",
    url: "https://padmaonline.duckdns.org:8088/restream3/index.m3u8"
  },
  {
    name: "Bangla Music",
    logo: "https://i.postimg.cc/XYc8gBhr/20250522-025321.jpg",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209587/master.m3u8"
  },
  {
    name: "Hindi Music",
    logo: "https://i.postimg.cc/mkS3kyGX/20250522-030456.jpg",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209592/master.m3u8"
  },
{
    name: "Gopal Bhar",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrBhuJjFmg5TZk7hVQEBtoOs7ejO-gwOOLLe9IAfZvsBblMLMZc0ZBsM&s=10",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209611/master.m3u8"
  },
{
    name: "Bangla Waz",
    logo: "https://i.postimg.cc/26DBWLGP/20250522-030650.jpg",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209617/master.m3u8"
},
  {
    name: "Bangla Kirtan",
 logo: "https://i.postimg.cc/HWJVL2TV/20250522-030919.jpg",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209618/master.m3u8"
  }

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
