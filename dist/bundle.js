(() => {
    var o = { 805: o => { o.exports = function() { this.tabs = function() { console.log("Get tabs") }, this.slider = function() { console.log("Get slider") }, this.module = function() { console.log("Get Module") } } } },
        t = {};
    const e = new(function e(s) { var n = t[s]; if (void 0 !== n) return n.exports; var r = t[s] = { exports: {} }; return o[s](r, r.exports, e), r.exports }(805));
    e.slider(), e.tabs(), e.module()
})();
//# sourceMappingURL=bundle.js.map