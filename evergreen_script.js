function main() {
    //set profile picture
    var profilePic = document.getElementById("ProfilePic");
    profilePic.src = "/files/flamingo-icon.png";

    //custom name and tagline
    var yourName = document.getElementById("YourName");
    yourName.textContent = "Tina Rattliff";

    var tagline = document.getElementById("YourTagline");
    tagline.textContent = "🌈 Rainbows and unicorns ✨";

    //set portfolio links
    var link_website = document.getElementById("link_website");
    link_website.href = "https://www.kreative8kristina.wordpress.com/";

    var link_email = document.getElementById("link_email");
    link_email.href = "mailto:k.rattliff@gmail.com";

    var link_ig = document.getElementById("link_ig");
    link_ig.href = "https://instagram.com/ruserious1008";

    var link_youtube = document.getElementById("link_youtube");
    link_youtube.href = "https://music.youtube.com/channel/UCfolPUjMjyLpGeXDe0cwVMw";

    var link_imdb = document.getElementById("link_imdb");
    link_imdb.href = "https://www.imdb.com/name/nm9273382/";

    var link_twitch = document.getElementById("link_twitch");
    link_twitch.href = "https://www.twitch.tv/djsnorlinky";
}

/*let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("ButtonClickCounter").textContent = "Button Clicked times: " + numButtonClicks;
}*/
