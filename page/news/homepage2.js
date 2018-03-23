Page({
  data: {
    AdvertiseData: {
      Width:"750",
      Height: "190",
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000, 
      imgUrls: [
        {
          srcUrl: 'https://zongkai2.applinzi.com/image/ad5.jpg'
        },
        {
          srcUrl: 'https://zongkai2.applinzi.com/image/ad6.jpg'
        },
        {
          srcUrl: 'https://zongkai2.applinzi.com/image/ad7.jpg'
        }
      ] 
    },
    couponCount: 0, //优惠券个数
    tickets: [],
    items: [
      {
        bu: "english",
        buName: "短文分享",
        des: "短文分享",
        url: "./index",
        animate: {}
      },

      {
        bu: "yingyubiji",
        buName: "英语笔记",
        des: "英语笔记",
        url: "./yingyubiji",
        animate: {}

      },
      {
        bu: "math",
        buName: "导学练习",
        des: "2019年导学练习",
        url: "./math",
        animate: {}

      },
      {
        bu: "meizhouyilian",
        buName: "每周一练",
        des: "2019年每周一练",
        url: "./meizhouyilian",
        animate: {}

      },
      {
        bu: "laoxushuxue",
        buName: "老徐数学",
        des: "老徐数学",
        url: "./laoxushuxue",
        animate: {}

      },
      {
        bu: "shuxuebiji",
        buName: "数学笔记",
        des: "数学笔记",
        url: "./shuxuebiji",
        animate: {}

      }
    ],
    marketFloatData: {

    },
  },
  englishClick: function () {

    this.getNames(function () {
      wx.navigateTo({
        url: './index'
      })
    })

  },
  mathClick: function () {

    this.getNames(function () {
      wx.navigateTo({
        url: './math'
      })
    })

  },
  meizhouyilianClick: function () {


    this.getNames(function () {
      wx.navigateTo({
        url: './meizhouyilian'
      })
    })

  },
  laoxushuxueClick: function () {
    this.getNames(function () {
      wx.navigateTo({
        url: './laoxushuxue'
      })
    })


  },
  yingyubijiClick: function () {
    this.getNames(function () {
      wx.navigateTo({
        url: './yingyubiji'
      })
    })
  },
  shuxuebijiClick: function () {
    this.getNames(function () {
      wx.navigateTo({
        url: './shuxuebiji'
      })
    })
  },
  getNames: function (fn) {

    var mobile = wx.getStorageSync('mobile');

    if (mobile) {
      fn();

    } else {

      wx.navigateTo({
        url: './login'
      })
    }
  }
});
