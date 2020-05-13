

(function() {
    var names = ["Yaakov", "Jname1", "Jname2", "Jname3", "Paul", "Frank", "Larry", "Paula", "Laura", "Jname4"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();


/*
Solution of Module 4:

Expected output:

Hello Yaakov
Good Bye Jname1
Good Bye Jname2
Good Bye Jname3
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jname4
*/
