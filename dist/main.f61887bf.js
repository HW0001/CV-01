parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n="/* 大家好，接下来我给大家画个太极\n*首先先画一个div\n*/\n#dvi1 {\n    width: 400px;\n    height: 400px;\n    position: fixed;\n    top: 20px;\n    right: 20px; \n}\n/*然后将div变成圆*/\n#dvi1 {\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n}\n/*然后设置黑白底色*/\n#dvi1 {\n    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);\n}\n/*接下来我们开始画两个小圆*/\n#dvi1::before {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translate(-50%); \n}\n#dvi1::after { \n        width: 200px;\n        height: 200px;\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        transform: translate(-50%); \n    }\n/*然后再开始画小圆*/\n#dvi1::before {\n    border-radius: 50%;\n}\n#dvi1::after {\n    border-radius: 50%;\n}\n/*接下来，在给太极增加两个小点*/\n#dvi1::before {\n    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);\n}\n#dvi1::after{\n    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);\n}\n/*大功告成，我们的太极就画好了*/   \n",r=document.getElementById("cvtext"),t=document.getElementById("hstyle"),e="",i=0;function a(){setTimeout(function(){i<n.length-1&&("\n"===n[i]?e+="<br>":" "===n[i]?e+="&nbsp;":e+=n[i],r.innerHTML=e,t.innerHTML=n.substring(0,i),window.scrollTo(0,document.body.scrollHeight),i++,a())},30)}a();
},{}]},{},["epB2"], null)
//# sourceMappingURL=dist/main.f61887bf.js.map