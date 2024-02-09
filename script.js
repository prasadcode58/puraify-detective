let url = "https://api.github.com/users/";
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let themingBtn = document.getElementById('themingBtn');
let themeText = document.getElementById('themeText');
let themeIcon = document.getElementById('themeIcon');
let searchForm = document.getElementById('searchForm');
let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');
let errorMessage = document.getElementById('errorMessage');
let isDarkMode = false;

let wrapper = document.getElementById('wrapper');
let mainHeading = document.getElementById('mainHeading');
let searchBarDiv = document.getElementById('searchBarDiv');
let searchIcon = document.getElementById('searchIcon');
let contentDiv = document.getElementById('contentDiv');
let countDiv = document.getElementById('countDiv');
let countTexts = document.getElementById('countTexts');
let countTexts2 = document.getElementById('countTexts2');
let countTexts3 = document.getElementById('countTexts3');
let locIcon = document.getElementById('locIcon');
let xIcon = document.getElementById('xIcon');
let bioIcon = document.getElementById('bioIcon');
let compIcon = document.getElementById('compIcon');


function darkModeProperties(){
    themeText.innerText = "Light";
    themeIcon.src = "assets/brightness.svg";
    wrapper.classList.remove('bg-[#F2DCE0]');
    wrapper.classList.add('bg-[#59484F]');
    mainHeading.classList.add('text-[#F2DCE0]');
    searchBarDiv.classList.remove('bg-[#faf6f3]');
    searchBarDiv.classList.add('bg-[#D9B4C8]');
    searchIcon.src = "assets/searchIconDark.svg";
    searchInput.classList.remove('bg-[#faf6f3]');
    searchInput.classList.add('bg-[#D9B4C8]');
    searchBtn.classList.remove('bg-[#D9B4C8]');
    searchBtn.classList.add('bg-[#faf6f3]');
    searchForm.classList.remove('bg-[#faf6f3]');
    searchForm.classList.add('bg-[#D9B4C8]');
    searchBtn.classList.remove('text-[#faf6f3]');
    searchBtn.classList.add('text-[#D9B4C8]');
    searchInput.classList.remove('placeholder:text-[#59484F]', 'text-[#59484F]');
    searchInput.classList.add('placeholder:text-[#faf6f3]', 'text-[#faf6f3]');
    contentDiv.classList.remove('bg-[#faf6f3]');
    contentDiv.classList.add('bg-[#D9B4C8]');
    nickName.classList.remove('text-[#59484F]');
    nickName.classList.add('text-[#faf6f3]');
    accountDate.classList.remove('text-[#8f7881]');
    accountDate.classList.add('text-[#ffffff]');
    userId.classList.remove('text-[#D9B4C8]');    
    userId.classList.add('text-[#59484F]');
    userBio.classList.remove('text-[#b3a2ab]');    
    userBio.classList.add('text-[#e9e2e7]');
    countDiv.classList.remove('bg-[rgb(217,186,198)]');
    countDiv.classList.add('bg-[#59484F]');
    repoCount.classList.remove('text-[#59484F]');
    repoCount.classList.add('text-[#F2DCE0]');
    followerCount.classList.remove('text-[#59484F]');
    followerCount.classList.add('text-[#F2DCE0]');
    followingCount.classList.remove('text-[#59484F]');
    followingCount.classList.add('text-[#F2DCE0]');    
    countTexts.classList.remove('text-[#554b4f]');
    countTexts.classList.add('text-[#f8ecef]');
    countTexts2.classList.remove('text-[#554b4f]');
    countTexts2.classList.add('text-[#f8ecef]');
    countTexts3.classList.remove('text-[#554b4f]');
    countTexts3.classList.add('text-[#f8ecef]');
    userLoc.classList.remove('text-[#59484F]');
    userLoc.classList.add('text-[#faf6f3]');
    portfoLink.classList.remove('text-[#59484F]');
    portfoLink.classList.add('text-[#faf6f3]');
    twitterId.classList.remove('text-[#59484F]');
    twitterId.classList.add('text-[#faf6f3]');
    companyUrl.classList.remove('text-[#59484F]');
    companyUrl.classList.add('text-[#faf6f3]');
    locIcon.src = "assets/locIconDark.svg";
    xIcon.src = "assets/xIconDark.svg";
    bioIcon.src = "assets/bioIconDark.svg";
    compIcon.src = "assets/companyIconDark.svg";

}

function lightModeProperties(){
    themeText.innerText = "Dark";        
    themeIcon.src = "assets/darkness.svg";
    wrapper.classList.remove('bg-[#59484F]');
    wrapper.classList.add('bg-[#F2DCE0]');
    mainHeading.classList.remove('text-[#F2DCE0]');
    searchBarDiv.classList.add('bg-[#faf6f3]');
    searchBarDiv.classList.remove('bg-[#D9B4C8]');
    searchIcon.src = "assets/searchIconLight.svg";
    searchInput.classList.add('bg-[#faf6f3]');
    searchInput.classList.remove('bg-[#D9B4C8]');
    searchBtn.classList.add('bg-[#D9B4C8]');
    searchBtn.classList.remove('bg-[#faf6f3]');
    searchForm.classList.add('bg-[#faf6f3]');
    searchForm.classList.remove('bg-[#D9B4C8]');
    searchBtn.classList.add('text-[#faf6f3]');
    searchBtn.classList.remove('text-[#D9B4C8]');
    searchInput.classList.add('placeholder:text-[#59484F]', 'text-[#59484F]');
    searchInput.classList.remove('placeholder:text-[#faf6f3]', 'text-[#faf6f3]');
    contentDiv.classList.add('bg-[#faf6f3]');
    contentDiv.classList.remove('bg-[#D9B4C8]');
    nickName.classList.add('text-[#59484F]');
    nickName.classList.remove('text-[#faf6f3]');
    accountDate.classList.add('text-[#8f7881]');
    accountDate.classList.remove('text-[#ffffff]');
    userId.classList.add('text-[#D9B4C8]');    
    userId.classList.remove('text-[#59484F]');
    userBio.classList.add('text-[#b3a2ab]');    
    userBio.classList.remove('text-[#e9e2e7]');
    countDiv.classList.add('bg-[rgb(217,186,198)]');
    countDiv.classList.remove('bg-[#59484F]');
    repoCount.classList.add('text-[#59484F]');
    repoCount.classList.remove('text-[#F2DCE0]');
    followerCount.classList.add('text-[#59484F]');
    followerCount.classList.remove('text-[#F2DCE0]');
    followingCount.classList.add('text-[#59484F]');
    followingCount.classList.remove('text-[#F2DCE0]');
    countTexts.classList.add('text-[#554b4f]');
    countTexts.classList.remove('text-[#f8ecef]');
    countTexts2.classList.add('text-[#554b4f]');
    countTexts2.classList.remove('text-[#f8ecef]');
    countTexts3.classList.add('text-[#554b4f]');
    countTexts3.classList.remove('text-[#f8ecef]');
    userLoc.classList.add('text-[#59484F]');
    userLoc.classList.remove('text-[#faf6f3]');
    portfoLink.classList.add('text-[#59484F]');
    portfoLink.classList.remove('text-[#faf6f3]');
    twitterId.classList.add('text-[#59484F]');
    twitterId.classList.remove('text-[#faf6f3]');
    companyUrl.classList.add('text-[#59484F]');
    companyUrl.classList.remove('text-[#faf6f3]');
    locIcon.src = "assets/locIconLight.svg";
    xIcon.src = "assets/xIconLight.svg";
    bioIcon.src = "assets/bioIconLight.svg";
    compIcon.src = "assets/companyIconLight.svg";

}

function checkDarkMode(isDarkMode){
    if(isDarkMode === true){
        darkModeProperties();
    }
    else{
        lightModeProperties();
    }
}

themingBtn.addEventListener('click', () => {
    if(isDarkMode === false){
        isDarkMode = true;
    }
    else{
        isDarkMode = false;
    }

    checkDarkMode(isDarkMode);
})



function updateUserInfo(userData){
    if(userData?.message !== "Not Found"){

        function checkNull(param){
            if(param === "" || param === null){
                return false;
            }
            else{
                return true;
            }
        }
        errorMessage.classList.add('hidden');
        let profileImg = document.getElementById('profileImg');
        let nickName = document.getElementById('nickName');
        let accountDate = document.getElementById('accountDate');
        let userId = document.getElementById('userId');
        let userBio = document.getElementById('userBio');
        let repoCount = document.getElementById('repoCount');
        let followerCount = document.getElementById('followerCount');
        let followingCount = document.getElementById('followingCount');
        let userLoc = document.getElementById('userLoc');
        let portfoLink = document.getElementById('portfoLink');
        let twitterId = document.getElementById('twitterId');
        let companyUrl = document.getElementById('companyUrl');
    
        profileImg.src = `${userData?.avatar_url}`;
        nickName.innerText = userData?.name;
        let datesegments = userData?.created_at.split("T").shift().split("-");
        accountDate.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;
        userId.innerText = `@${userData?.login}`;
        userId.href = `${userData?.html_url}`;
        userBio.innerText = checkNull(userData?.bio) ? userData?.bio : "User don't have a Bio";
        repoCount.innerText = userData?.public_repos;
        followerCount.innerText = userData?.followers;
        followingCount.innerText = userData?.following;
        userLoc.innerText = checkNull(userData?.location) ? userData?.location : "Not available";
        portfoLink.innerText = checkNull(userData?.blog) ? userData?.blog : "Not available";
        portfoLink.href = checkNull(userData?.blog) ? `https://${userData?.blog}` : "#";
        twitterId.innerText = checkNull(userData?.twitter_username) ? userData?.twitter_username : "Not available";
        twitterId.href = checkNull(userData?.twitter_username) ? `https://twitter.com/${userData?.twitter_username}` : "#";
        companyUrl.innerText = checkNull(userData?.company) ? userData?.company : "Not available";
    }
    else{
        errorMessage.classList.remove('hidden');
        return;
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let userSearch = searchInput.value;

    if(userSearch === ""){
        return;
    }
    else{
        fetchUserInfo(userSearch);
    }
});

async function fetchUserInfo(user){

    const searchQuery = (url + user);
        const response = await fetch(searchQuery);
        const data = await response.json();

        updateUserInfo(data);
}

fetchUserInfo('prasadcode58');