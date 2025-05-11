document.addEventListener('DOMContentLoaded', function() {
    // Sample data for channels and movies
    const channels = [
        {
            id: 1,
            name: "চ্যানেল আই",
            logo: "https://via.placeholder.com/300x200?text=Channel+I",
            streamUrl: "https://example.com/stream1.m3u8",
            description: "বাংলাদেশের জনপ্রিয় টিভি চ্যানেল"
        },
        {
            id: 2,
            name: "এনটিভি",
            logo: "https://via.placeholder.com/300x200?text=NTV",
            streamUrl: "https://example.com/stream2.m3u8",
            description: "২৪ ঘন্টা সংবাদ পরিবেশন"
        },
        {
            id: 3,
            name: "মাছরাঙা টিভি",
            logo: "https://via.placeholder.com/300x200?text=Maasranga",
            streamUrl: "https://example.com/stream3.m3u8",
            description: "বিনোদন ও সংবাদ চ্যানেল"
        },
        {
            id: 4,
            name: "বাংলাভিশন",
            logo: "https://via.placeholder.com/300x200?text=Banglavision",
            streamUrl: "https://example.com/stream4.m3u8",
            description: "সঙ্গীত ও বিনোদন চ্যানেল"
        },
        {
            id: 5,
            name: "জাজ মাল্টিমিডিয়া",
            logo: "https://via.placeholder.com/300x200?text=Jazz",
            streamUrl: "https://example.com/stream5.m3u8",
            description: "সঙ্গীত ও চলচ্চিত্র চ্যানেল"
        },
        {
            id: 6,
            name: "এটিএন বাংলা",
            logo: "https://via.placeholder.com/300x200?text=ATN+Bangla",
            streamUrl: "https://example.com/stream6.m3u8",
            description: "বাংলাদেশের প্রথম প্রাইভেট টিভি চ্যানেল"
        }
    ];

    const movies = [
        {
            id: 1,
            title: "মিশন এক্সট্রিম",
            thumbnail: "https://via.placeholder.com/300x200?text=Mission+Extreme",
            videoUrl: "https://example.com/movie1.mp4",
            description: "একটি অ্যাকশন প্যাকড বাংলাদেশী চলচ্চিত্র",
            year: 2023
        },
        {
            id: 2,
            title: "পৃথিবী",
            thumbnail: "https://via.placeholder.com/300x200?text=Prithibi",
            videoUrl: "https://example.com/movie2.mp4",
            description: "রোমান্টিক ড্রামা চলচ্চিত্র",
            year: 2022
        },
        {
            id: 3,
            title: "ডুব",
            thumbnail: "https://via.placeholder.com/300x200?text=Doob",
            videoUrl: "https://example.com/movie3.mp4",
            description: "আন্তর্জাতিক পুরস্কারপ্রাপ্ত চলচ্চিত্র",
            year: 2021
        },
        {
            id: 4,
            title: "মাটির ময়না",
            thumbnail: "https://via.placeholder.com/300x200?text=Matir+Moyna",
            videoUrl: "https://example.com/movie4.mp4",
            description: "ঐতিহাসিক ড্রামা চলচ্চিত্র",
            year: 2020
        },
        {
            id: 5,
            title: "অন্তর",
            thumbnail: "https://via.placeholder.com/300x200?text=Antar",
            videoUrl: "https://example.com/movie5.mp4",
            description: "থ্রিলার জঁর এর চলচ্চিত্র",
            year: 2023
        },
        {
            id: 6,
            title: "রানা প্লাজা",
            thumbnail: "https://via.placeholder.com/300x200?text=Rana+Plaza",
            videoUrl: "https://example.com/movie6.mp4",
            description: "সামাজিক দায়বদ্ধতা বিষয়ক চলচ্চিত্র",
            year: 2022
        }
    ];

    // DOM Elements
    const channelList = document.getElementById('channel-list');
    const movieList = document.getElementById('movie-list');
    const videoModal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-btn');
    const videoPlayer = document.getElementById('stream-video');
    const videoTitle = document.getElementById('video-title');
    const videoDescription = document.getElementById('video-description');
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');

    // Load channels
    function loadChannels() {
        channelList.innerHTML = '';
        channels.forEach(channel => {
            const channelCard = document.createElement('div');
            channelCard.className = 'channel-card';
            channelCard.innerHTML = `
                <img src="${channel.logo}" alt="${channel.name}">
                <div class="channel-info">
                    <h3>${channel.name}</h3>
                    <p>${channel.description}</p>
                </div>
            `;
            channelCard.addEventListener('click', () => playStream(channel));
            channelList.appendChild(channelCard);
        });
    }

    // Load movies
    function loadMovies() {
        movieList.innerHTML = '';
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <img src="${movie.thumbnail}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.year} • ${movie.description}</p>
                </div>
            `;
            movieCard.addEventListener('click', () => playMovie(movie));
            movieList.appendChild(movieCard);
        });
    }

    // Play stream function
    function playStream(channel) {
        videoPlayer.src = channel.streamUrl;
        videoTitle.textContent = channel.name;
        videoDescription.textContent = channel.description;
        videoModal.style.display = 'block';
        videoPlayer.play();
        closeMenu(); // Close menu when playing video
    }

    // Play movie function
    function playMovie(movie) {
        videoPlayer.src = movie.videoUrl;
        videoTitle.textContent = movie.title;
        videoDescription.textContent = `${movie.year} • ${movie.description}`;
        videoModal.style.display = 'block';
        videoPlayer.play();
        closeMenu(); // Close menu when playing video
    }

    // Close modal
    closeBtn.addEventListener('click', () => {
        videoModal.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }
    });

    // Toggle menu
    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('active');
    }

    function closeMenu() {
        menuBtn.classList.remove('active');
        nav.classList.remove('active');
    }

    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Initialize the page
    loadChannels();
    loadMovies();

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
