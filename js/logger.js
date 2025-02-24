function getModuls() {
    this.tabs = function() {
        console.log("Get tabs");
    }
    this.slider = function() {
        console.log("Get slider");
    }
    this.module = function() {
        console.log("Get Module");

    }
}
module.exports = getModuls