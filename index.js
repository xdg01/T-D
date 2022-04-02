let dareColor = '#f6a192';
let truthColor = '#f6b092';

let truths = [
    "What is the most embarrassing thing that your parents have caught you doing?",
    "What is the most embarrassing thing that your friends have caught you doing?",
    "What's something in your web browsing history that you'd be embarrassed about if shared on a social media app such as Instagram?",
    "When was the last time you told a lie?",
    "Have you ever shared a secret you shouldn't have, or promised you wouldn't?",
    "What's the most embarrassing thing that has happened to you this year?",
    "What's the most embarrassing thing that has happened to you this month?",
    "How many selfies do you take each day",
    "What do you eat when you can choose anything and no one is around to see?",
    "What is something you know you would never do?",
    "Tell us one positive and one negative thing about yourself",
    "Whose FB profile/IG account did you last stalk?",
    "What is your most embarrassing childhood memory?",
    "If you were a character in your favorite TV show, who would you be and why?",
    "What would you say is your biggest flaw?",
    "Have you ever been caught cheating on a test?",
    "What is one secret you have never told anyone until now?",
    "What's the meanest thing you've ever said to someone else?",
    "Have you ever faked sick to get out of school?",
    "What's one movie you're embarrassed to admit you enjoy?",
]
let dares = [
    "Go outside and walk for 30 minutes",
    "Try to chat up someone",
    "Text a random person 'I see dead people'",
    "Ask someone out of a gender you aren't attracted to",
    "Show the last YouTube video you watched",
    "Eat an ice cube",
    "Don't touch your phone for an hour after the game is over",
    "Talk about your worst experience on a date",
    "Hug the object/person nearest you",
    "Show your screen time",
    "Show your recent calls",
    "Text the first six people in your message history 'a' and don't reply if they bring it up",
    "Text the last 6 people in your DMs 'I love you'",
    "Let me choose your profile picture for a day",
    "Prank call McDonalds",
    "Use Instagram light theme for an hour",
    "Let your friends post something on your social media",
    "Show your last 10 google searches.",
    "Send your youtube watch history",
    "DM someone 'hi' and respond with 'banana' to everything they say",
]

function onTruth() {
    let randtruth = truths[Math.floor(Math.random() * truths.length)];
    document.body.style.backgroundColor=truthColor;
    document.getElementById('TorD').innerHTML = `Truth #${truths.indexOf(randtruth)+1} ${randtruth}`;
}

function onDare() {
    let randdare = dares[Math.floor(Math.random() * dares.length)];
    document.body.style.backgroundColor=dareColor;
    document.getElementById('TorD').innerHTML = `Dare #${dares.indexOf(randdare)+1} ${randdare}`;
}
