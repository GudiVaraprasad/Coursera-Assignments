

(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hello! ";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);


/* This code is Contributed by G.Varaprasad */
