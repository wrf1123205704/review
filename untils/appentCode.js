(function () {
    function appendCode(id, code) {
        let preDom = document.createElement("pre");
        let codeDom = document.createElement("code");
        codeDom.innerHTML = code;
        preDom.appendChild(codeDom);
        let body = document.getElementById(id);
        body.appendChild(preDom)
    }

    _global = (function () {
        return this || (0, eval)('this');
    }());

    if (typeof module !== "undefined" && module.exports) {
        module.exports = appendCode
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return appendCode;
        });
    } else {
        !('appendCode' in _global) && (_global.appendCode = appendCode);
    }
})()