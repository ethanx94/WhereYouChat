parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"9svq":[function(require,module,exports) {
L.Util.extend(L.LineUtil,{segmentsIntersect:function(e,c,t,n){return this._checkCounterclockwise(e,t,n)!==this._checkCounterclockwise(c,t,n)&&this._checkCounterclockwise(e,c,t)!==this._checkCounterclockwise(e,c,n)},_checkCounterclockwise:function(e,c,t){return(t.y-e.y)*(c.x-e.x)>(c.y-e.y)*(t.x-e.x)}});
},{}]},{},["9svq"], null)
//# sourceMappingURL=Leaflet_Sandbox/LineUtil.Intersect.2f74ac41.map