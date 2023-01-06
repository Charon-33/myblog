/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a3ce0b5ba7e394df0f883e7a368f21f0"
  },
  {
    "url": "assets/css/0.styles.3b4ab068.css",
    "revision": "f965655ee9efd065d085fcc5233401d8"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.c95c9800.js",
    "revision": "b315759e1edc86bd9884f7f69f3912a3"
  },
  {
    "url": "assets/js/10.b73bace4.js",
    "revision": "940f57f4cf7d2aec2eaa4a94453350d1"
  },
  {
    "url": "assets/js/11.e1d84463.js",
    "revision": "3f7c2621a2b1f3091315605cf004168e"
  },
  {
    "url": "assets/js/12.c915fef2.js",
    "revision": "c0a4b96a854866972efa995fc3a3c8d3"
  },
  {
    "url": "assets/js/13.304e2610.js",
    "revision": "a640590611b36e604add0422476df16f"
  },
  {
    "url": "assets/js/14.8ae52719.js",
    "revision": "dbd02e4f80c99181d23efe4c3b88bf23"
  },
  {
    "url": "assets/js/15.5213f74d.js",
    "revision": "2273dcb3464fb80aaeb4a27f24d9c173"
  },
  {
    "url": "assets/js/16.4b9ed085.js",
    "revision": "3e27cff5a1b5de7b0c1b01ad503764a5"
  },
  {
    "url": "assets/js/17.24b2f7a8.js",
    "revision": "681181d504889b56162d1f2e91cd5030"
  },
  {
    "url": "assets/js/18.bddf470d.js",
    "revision": "4e157fa72130cd073d0cae68e483f54b"
  },
  {
    "url": "assets/js/19.f85f8f67.js",
    "revision": "c559e91d085cef36cf4122e73a3f1f8b"
  },
  {
    "url": "assets/js/20.738052ce.js",
    "revision": "408427a3e732b66a746008d80d284bad"
  },
  {
    "url": "assets/js/21.a911c9f0.js",
    "revision": "fb2fab35f7a6ab46a4054a07b2335592"
  },
  {
    "url": "assets/js/22.c2595ebe.js",
    "revision": "f298ed800bf40ae756f9cd9dcfe4a7aa"
  },
  {
    "url": "assets/js/23.bd52828c.js",
    "revision": "7fabbbe94af29ddeaea91213fb0d67c2"
  },
  {
    "url": "assets/js/24.58d8a628.js",
    "revision": "ce66a1df3360839857872dd7d83f52cd"
  },
  {
    "url": "assets/js/25.b0d24a86.js",
    "revision": "f9ea6143c7d6576b26f78392ebfeb174"
  },
  {
    "url": "assets/js/26.72561a78.js",
    "revision": "7af937a92f546442500e288858152142"
  },
  {
    "url": "assets/js/27.eb453d20.js",
    "revision": "5f720bdba0379f825eae42f7f5891fb8"
  },
  {
    "url": "assets/js/28.0f900ee4.js",
    "revision": "01b5d5f0e2ec13536a70d7f169ead7be"
  },
  {
    "url": "assets/js/29.496695a9.js",
    "revision": "188f53f3b3b33cacb6139141c1d989c7"
  },
  {
    "url": "assets/js/3.ea17ab8f.js",
    "revision": "696fbb82f8a56d2ff28146d4726a5f49"
  },
  {
    "url": "assets/js/30.4326caee.js",
    "revision": "f8492b8650ef4cf54eb87e870b208bdb"
  },
  {
    "url": "assets/js/31.8046e8ba.js",
    "revision": "0ecb711132ccd5ba7cc857137c1d102c"
  },
  {
    "url": "assets/js/32.f6ba5e7a.js",
    "revision": "65d48f2b88c16042468293acbb50453d"
  },
  {
    "url": "assets/js/33.2ef892e3.js",
    "revision": "8993214caa7123b6ba57702e098b05c9"
  },
  {
    "url": "assets/js/34.567caaac.js",
    "revision": "b175814ddeddb67e6073d46317b3abe6"
  },
  {
    "url": "assets/js/35.248597a9.js",
    "revision": "f4d1106e1a64700c525ebd23ca7b70d4"
  },
  {
    "url": "assets/js/36.c05b730d.js",
    "revision": "eac117f1964026d5d53cd68b09037411"
  },
  {
    "url": "assets/js/37.d5c07866.js",
    "revision": "201ec528d10e6f49f7d7106448d55638"
  },
  {
    "url": "assets/js/38.706b3275.js",
    "revision": "74d68fcc1daac962414ba71c11323152"
  },
  {
    "url": "assets/js/39.5df9bdee.js",
    "revision": "e7887b82e4fae1681dd98c4d276e55c1"
  },
  {
    "url": "assets/js/4.e1ef125d.js",
    "revision": "0e962dceb4a47a609ff5c1e4de66d5ae"
  },
  {
    "url": "assets/js/40.47355a80.js",
    "revision": "9bcb9c4438bf08fe5b4d4d30829795be"
  },
  {
    "url": "assets/js/41.597c8b4f.js",
    "revision": "92d2226fc4ae89e043e32f5d1336c018"
  },
  {
    "url": "assets/js/5.01d2e0d2.js",
    "revision": "3844481b7703825124658002c25556dd"
  },
  {
    "url": "assets/js/6.d5c6ab8d.js",
    "revision": "e4f9c3f6a9d776916ba30a154302cefb"
  },
  {
    "url": "assets/js/7.58f6e999.js",
    "revision": "40d9f92f2ac1543a34e1d0b4d45c2ab3"
  },
  {
    "url": "assets/js/8.39a097a3.js",
    "revision": "f247c1adfebb73c234d06e8a0c9c44fe"
  },
  {
    "url": "assets/js/9.6bf3a479.js",
    "revision": "1e1e8ca206842a50ca98a8d1349dce8d"
  },
  {
    "url": "assets/js/app.4d929658.js",
    "revision": "808054cffec3053b255c4cfe3a3c996a"
  },
  {
    "url": "bg.png",
    "revision": "9e2d977d490c2ba946bc947021562d99"
  },
  {
    "url": "categories/index.html",
    "revision": "035bdb49b7c7248138a372e5a4ee0b7c"
  },
  {
    "url": "gpa/index.html",
    "revision": "e6506ecf1078fae488fc7d659be33f7f"
  },
  {
    "url": "have-fun/111.html",
    "revision": "8aeafab6e2f1f10aa488c35588a9ff5b"
  },
  {
    "url": "have-fun/222.html",
    "revision": "8d3e8c59d058dfc478deeece503da4ce"
  },
  {
    "url": "index.html",
    "revision": "cdcfb06de3dfab4676070a752e0de511"
  },
  {
    "url": "log/index.html",
    "revision": "9686fdd502e2b29c37b0b11e218170b7"
  },
  {
    "url": "log/vuepress-update.html",
    "revision": "df24aa70c5d41e12d29cb3d017e00568"
  },
  {
    "url": "log/xunyou/xunyou01.html",
    "revision": "987b61b3017ddb847d5fbfc6d0d5836b"
  },
  {
    "url": "log/xunyou/xunyou02.html",
    "revision": "984491c73e28a661f412b4e58aed0443"
  },
  {
    "url": "log/xunyou/xunyou03.html",
    "revision": "0bfd0c802b871366933c5fdc1feec5bb"
  },
  {
    "url": "notes/design_pattern/1.html",
    "revision": "fd26ba59b7d43f74052e680b75b64b96"
  },
  {
    "url": "notes/index.html",
    "revision": "f35e6e38c23a6e093acb1b748fc318a9"
  },
  {
    "url": "notes/java_interview/1.html",
    "revision": "64dc8fbdaf91d8e7d54416e41ebee752"
  },
  {
    "url": "notes/java/10.html",
    "revision": "b962774714aa99e7b2389ac3ec6d8514"
  },
  {
    "url": "notes/java/11.html",
    "revision": "63908e85899c4df4624e4d09f1804930"
  },
  {
    "url": "notes/linux/01.html",
    "revision": "f2209aa0d00b0f8068563038c2fcd66d"
  },
  {
    "url": "notes/linux/02.html",
    "revision": "f94fdaf84909adc8f3da282ad2954b5a"
  },
  {
    "url": "notes/mysql/1.html",
    "revision": "d87b26525adfc8b45e849a3b8eae16e5"
  },
  {
    "url": "notes/mysql/2.html",
    "revision": "9cbb6e410bbce4f713b4f602c336e2e0"
  },
  {
    "url": "notes/mysql/3.html",
    "revision": "a5bb100a41053218253e14262baad754"
  },
  {
    "url": "notes/mysql/4.html",
    "revision": "1505bb1141de7fb0af2c6c3e4e210f8f"
  },
  {
    "url": "notes/mysql/5.html",
    "revision": "bc81d1c86942c2be2e47f8419e77f716"
  },
  {
    "url": "notes/mysql/6.html",
    "revision": "4afcb517ba063f744d5e741b16b93197"
  },
  {
    "url": "notes/mysql/7.html",
    "revision": "398eca91ffb8fe203655852bb6743a74"
  },
  {
    "url": "notes/software_testing/1.html",
    "revision": "1e8c44dda27d1e485d34d53846e9ed96"
  },
  {
    "url": "notes/software_testing/2.html",
    "revision": "db6f87867cc460aea9ef9df3971c87dc"
  },
  {
    "url": "notes/vue/1.html",
    "revision": "cee01129b77fa4524a0bfd17cf0afad9"
  },
  {
    "url": "notes/vue/2.html",
    "revision": "fe5aa6f4c201c8b025e3dfcf28241a8d"
  },
  {
    "url": "notes/vue/3.html",
    "revision": "617c69330c68b1df4d7fbc4504670944"
  },
  {
    "url": "notes/vue/4.html",
    "revision": "11d51df152d19b63ce6c5e1d4c3ffc6e"
  },
  {
    "url": "notes/vue/5.html",
    "revision": "e4a28303c25bcd1572a562f36b23df30"
  },
  {
    "url": "notes/vue/6.html",
    "revision": "7efe8b9ba545b8918270be815d57c05d"
  },
  {
    "url": "tag/“寻友”开发日志/index.html",
    "revision": "ebbe58566e5e870cc14460be8597e0c3"
  },
  {
    "url": "tag/index.html",
    "revision": "69c30905d3b3fdb26db68100a0584108"
  },
  {
    "url": "tag/Java笔记/index.html",
    "revision": "501ccc07ba437365cb6bb2ce194fe4fa"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "77b48c636d75f136e6faaace2aa88247"
  },
  {
    "url": "tag/mysql笔记/index.html",
    "revision": "0a3987f121cfddb0183a2dee7a922c63"
  },
  {
    "url": "tag/vuepress优化/index.html",
    "revision": "ccbf10957d86e4e1b2b8b3c63143776e"
  },
  {
    "url": "tag/Vue笔记/index.html",
    "revision": "fdad21a2e8fd5a9839a5b7270e6ef2e1"
  },
  {
    "url": "tag/大学成绩单/index.html",
    "revision": "92d6742d8cbac791f1cb19df6db03de7"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "bb1dbe91f01e360d2edd70eff49658a6"
  },
  {
    "url": "tag/软件测试/index.html",
    "revision": "6a8cac805a8f19f6b76ee677bb897a06"
  },
  {
    "url": "timeline/index.html",
    "revision": "9a5d26d0accc8f105cec774425585eb0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
