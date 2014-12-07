var wordedulogger = {
    NONE_LV: 4,
    INFO_LV: 3,
    DEBUG_LV: 2,
    TRACE_LV: 1,
    level: 1,
    info: function (message) {
        if (this.level <= this.INFO_LV) {
            this.printMessage("[INFO ] " + message);
        }
    },
    debug: function (message) {
        if (this.level <= this.DEBUG_LV) {
            this.printMessage("[DEBUG] " + message);
        }
    },
    trace: function (message) {
        if (this.level <= this.TRACE_LV) {
            this.printMessage("[TRACE] " + message);
        }
    },
    printMessage: function (message) {
        console.log(message);
    }
}
wordedulogger.level = wordedulogger.TRACE_LV;