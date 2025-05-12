const channels = [
  {
    name: "All Time Moveie",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7clnltpACgChJ2O1qYusEbZWHb5JyEm9FH9IhtQg7m2IHDBi_Vo8OJcI&s=10",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209612/master.m3u8"
  },
  {
    name: "Bangla Drams",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBSXlcsosa6Z3i3aKhQVE609WGffEMO51pUA&usqp=CAU",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209593/master.m3u8"
  },
  {
    name: "Bangla Music",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE22ua5A41qI6hE2oDRv4tto38C0c1fX0iiMEr5wm9QHfXt8A7LXM27iI&s=10",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209587/master.m3u8"
  },
  {
    name: "Hindi Music",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JKx6F-FSKkdlt0LjupuFF03AcwTpOOHvHSSFxXFZ_BCpv3yg0PKXX4U&s=10",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209592/master.m3u8"
  },
{
    name: "Gopal Bhar",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEHuyAxFukMWpcPBhx9U-NrFPj9OxMrUaXL3OXAolmwx93jnrN1qXeHU&s=10",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209611/master.m3u8"
  },
{
    name: "Bangla Waz",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbadecRTCviFjIjvdIYXAzXRy0ryRVdI7jpGf3si5FpkuYhNaWgdLPZnU&s=10",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209617/master.m3u8"
},
  {
    name: "Bangla Kirtan",
 logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9twYODkLXwBcfoNp9sEgUhCIr2QhDU8CEmeebYizVZel8aUY248jhN8&s=10",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209618/master.m3u8"
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
