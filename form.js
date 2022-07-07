function radioQuestion() {
    document.getElementById("radio-response").innerHTML = "Great!";
    document.getElementById("radio-response").style.color = "red";
    document.getElementById("radio-response").style.fontSize = "15px";
}
function radioQuestionTwo() {
    document.getElementById("radio-response").innerHTML = "Wtf are you doing here?";
    document.getElementById("radio-response").style.color = "red";
    document.getElementById("radio-response").style.fontSize = "15px";
}

function submitFunction(event) {

    const nameAttribute = document.forms["myForm"]["name"].value;
    const ageAttribute = document.forms["myForm"]["age"].value;
    const favAtrritbute = document.forms["myForm"]["fav-club"].value;
    if (nameAttribute == "") {
        document.getElementById("name").required = true;
    } else if (ageAttribute == "") {
        document.getElementById("age").required = true;
    } else if (favAtrritbute == ""){
        document.getElementById("fav-club").required = true;
    } else {
        event.preventDefault();
        document.getElementById("pop-up-container").style.display = "flex";
        document.querySelector("form").style.display = "none";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center";
    }
}

function popUpFunction() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    let ageText = "";
    if (age < 18) {
        ageText = "Looks like you are quiet a young fan";
    } else if (age < 28) {
        ageText = "You must have been a fan for quite some time!";
    } else if (age < 38) {
        ageText = "You must be a fan of the game from 90s";
    } else {
        ageText = "Glad to meet someone who grew up watching footballing greats.";
    }

    const select = document.getElementById("leagues").selectedIndex;
    const option = document.getElementsByTagName("option")[select].value;
    let favLeague = "";
    if (option == "Premier League") {
        favLeague = "So we have got a Premier League fan boy here Lol!"
    } else if (option == "La Liga") {
        favLeague = "You must be a supporting either Barcelona or Real Madrid"
    } else if (option == "Serie A") {
        favLeague = "Must be difficult supporting clubs other than Juve, Inter and Milan";
    } else if (option == "Bundesliga") {
        favLeague = "So you like watching Bayern-Liga";
    } else if (option == "Ligue 1") {
        favLeague = "Who the fuck watches farmers league lol unless you are Arab oil fan";
    }

    const favClub = document.getElementById("fav-club").value;
    let club;
    switch (favClub.toLowerCase().trim()) {
        case "manchester united":
            club = "I see you like to watch History Channels on Weekends";
            break;
        case "arsenal":
            club = "Must be hard supporting a banter club";
            break;
        case "chelsea":
            club = "You guys swtiched from Russian oil to American Oil";
            break;
        case "liverpool":
            club = "Ohh you are supporter of liVARpool hehehe";
            break;
        case "manchester City":
            club = "Got a little verse for you Roses are red, Voilets are blue, without Sheikh Mansour, You'd be in League Two";
            break;
        case "tottenham Hotspur":
            club = "I see you don't like trophies";
            break;
        case "newcastle United":
            club = "You must be newcastle fan after the Saudi takeover lmao";
            break;
        case "barcelona":
            club = "And a fucking plastic";
            break;
        case "real madrid":
            club = "And a fucking plastic";
            break;
        case "atletico madrid":
            club = "Ohh you like supporting a fucking bus";
            break;
        case "bayern munich":
            club = "Don't you get bored of your club winning the league every season?";
            break;
        case "borussia dortmund":
            club = "So you support a stepping stone club hehehe";
            break;
        case "paris saint germain":
            club = "Keep dreaming of winning the Champions League";
            break;
        case "juventus":
            club = "Keep dreaming of winning the Champions League";
    }

    document.getElementById("pop-up-text").innerHTML = 
    "Hello " + name + ", " + favLeague + ". " + ageText + ". "
    + club;
}

function closeButton() {
    document.getElementById("pop-up-container").style.display = "none";
    document.querySelector("form").style.display = "block";
};
