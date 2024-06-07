document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const searchClose = document.getElementById("search-close");
    const searchForm = document.getElementById("search-form");

    const loginButton = document.getElementById("login-btn");
    const loginCloseIcon = document.getElementById("login-close");
    const loginForm = document.getElementById("login-form");

    const menuBar = document.getElementById("menu-bar");
    const navbar = document.querySelector("header .navbar");

    const videoSlider = document.getElementById("video-slider");
    const vidButtons = document.querySelectorAll(".vid-btn");

    const bookSection = document.querySelector(".book");

    let lastScrollTop = 0;

    searchButton.addEventListener("click", function () {
        searchForm.classList.add("active");
        searchButton.style.display = "none";
        searchClose.style.display = "block";
    });

    searchClose.addEventListener("click", function () {
        searchForm.classList.remove("active");
        searchButton.style.display = "block";
        searchClose.style.display = "none";
    });

    loginButton.addEventListener("click", function () {
        loginForm.classList.add("active");
    });

    loginCloseIcon.addEventListener("click", function () {
        loginForm.classList.remove("active");
    });

    menuBar.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    const videos = {
        "image/bg1.mp4": "image/bg1.mp4",
        "image/bg2.mp4": "image/bg2.mp4",
        "image/bg3.mp4": "image/bg3.mp4",
        "image/bg4.mp4": "image/bg4.mp4"
    };

    for (const key in videos) {
        const video = document.createElement("video");
        video.src = videos[key];
        video.muted = true;
        video.loop = true;
        video.classList.add("video-item");
        video.style.display = "none";
        document.body.appendChild(video);
    }

    let isVideoPlaying = false;

    vidButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const videoPath = this.dataset.search;
            if (videoSlider.src !== videoPath) {
                document.querySelectorAll(".video-item").forEach(function (video) {
                    video.style.display = "none";
                });
                const selectedVideo = document.querySelector(`.video-item[src="${videoPath}"]`);
                if (selectedVideo) {
                    selectedVideo.style.display = "block";
                    videoSlider.src = videoPath;
                    isVideoPlaying = true;
                }
                vidButtons.forEach(function (btn) {
                    btn.classList.remove("active");
                });
                this.classList.add("active");
            } else {
                if (isVideoPlaying) {
                    videoSlider.pause();
                    isVideoPlaying = false;
                } else {
                    videoSlider.play();
                    isVideoPlaying = true;
                }
            }
        });
    });

    window.addEventListener("scroll", function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            // scroll down
            if (window.scrollY > 100) {
                bookSection.style.display = "block";
            }
        } else {
            if (window.scrollY <= 100) {
                bookSection.style.display = "none";
            }
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});
