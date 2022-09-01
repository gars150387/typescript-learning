"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 7] = "min";
        AudioLevel[AudioLevel["medium"] = 8] = "medium";
        AudioLevel[AudioLevel["max"] = 9] = "max";
    })(AudioLevel || (AudioLevel = {}));
    // let currentAudio = AudioLevel.min
    /**
     * otra forma de asignar valores seria de la siguiente manera
     */
    let currentAudio = 10;
    console.log(AudioLevel.min);
    console.log(AudioLevel.medium);
    console.log(currentAudio);
    console.log(AudioLevel);
})();
