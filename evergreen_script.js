function main() {
    
    //set profile picture
    const profilePic = document.getElementById('ProfilePic');
    profilePic.src = "/files/flamingo-icon.png";
    
    //custom name and tagline
    const yourName = document.getElementById('YourName');
    yourName.textContent = "Tina Rattliff";

    const tagline = document.getElementById('YourTagline');
    tagline.textContent = "🌈 Rainbows and unicorns";
    
    //set portfolio links
    const link_website = document.getElementById('link_website'); 
    link_website.href = "https://www.kreative8kristina.wordpress.com/";

    const link_email = document.getElementById('link_email');
    link_email.href = "mailto:k.rattliff@gmail.com";

    const link_ig = document.getElementById('link_ig');
    link_ig.href =  "https://instagram.com/ruserious1008";

    const link_youtube = document.getElementById('link_youtube');
    link_youtube.href = "https://music.youtube.com/channel/UCfolPUjMjyLpGeXDe0cwVMw";

    const link_gigemail = document.getElementById('link_gigemail');
    link_gigemail.href = "mailto:djsnorlinky@gmail.com";

}

let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById('VisitorCount').textContent =
        "Button Clicked times: " + numButtonClicks;
}





