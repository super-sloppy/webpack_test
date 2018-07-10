/*
* 引入三方包
* 须在工程代码之前加载
* */

// 美恰
(function(m, ei, q, i, a, j, s) {
  m[i] = m[i] || function() {
    (m[i].a = m[i].a || []).push(arguments)
  };
  j = ei.createElement(q),
  s = ei.getElementsByTagName(q)[0];
  j.async = true;
  j.charset = 'UTF-8';
  j.src = '//static.meiqia.com/dist/meiqia.js';
  s.parentNode.insertBefore(j, s);
})(window, document, 'script', '_MEIQIA');
_MEIQIA('entId', 48989);
_MEIQIA('withoutBtn');

// 百度分享
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"24"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

// 在Safari无痕模式下，无法使用localStorage的时候则建立一个内存的Storage来使用
(function () {
function isSupported() {
  var item = 'localStoragePollyfill';
  try {
    localStorage.setItem(item, item);
    localStorage.removeItem(item);
    return true;
  } catch (e) {
    return false;
  }
}

if (!isSupported()) {
  try {
    Storage.prototype._data = {};

    Storage.prototype.setItem = function (id, val) {
      return this._data[id] = String(val);
    };

    Storage.prototype.getItem = function (id) {
      return this._data.hasOwnProperty(id) ? this._data[id] : null;
    },

    Storage.prototype.removeItem = function (id) {
      return delete this._data[id];
    },

    Storage.prototype.clear = function () {
      return this._data = {};
    }
  } catch (e) {
    console.error('localStorage pollyfill error: ', e);
  }
}
}());

// 接入SIA的53客服
(function () {
  var _53code = document.createElement("script");
  _53code.src = "//tb.53kf.com/code/code/10130275/8";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(_53code, s);
})();
