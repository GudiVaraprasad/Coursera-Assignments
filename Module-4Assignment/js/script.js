

(function() {
    var names = ["Coursera", "Samuel", "Sophia", "Sebastian", "Williams", "Friends", "Youtubers", "Programmers", "Alice", "Siri"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 's') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();


/*
Solution of assignment 4:

Expected output:

Hello 
Good Bye Samuel
Good Bye Sophia
Good Bye Sebastian
Hello Williams
Hello Friends
Hello Youtubers
Hello Programmers
Hello Alice
Good Bye Siri
*/
