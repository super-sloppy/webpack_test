// 生产环境下引入该三方包,与工程代码加载顺序不相关

// 百度统计
window._hmt = [];
(function() {
  var hm = document.createElement("script");
  hm.async = true;
  // hm.src = "//hm.baidu.com/hm.js?7c2fa2b7b826c6a75a4ec1519f937537"; // beikaodi.com
  hm.src = "//hm.baidu.com/hm.js?1f893b3a1b84594f19aad7a96b3eaed1"; // xxd.smartstudy.com
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

// 百度自动推送URL
(function(){
  var bp = document.createElement('script');
  bp.async = true;
  var curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  }
  else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();
