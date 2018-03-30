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

      },
      {
        bu: "mianshi",
        buName: "面试指导",
        des: "面试指导",  // 暂时随便使用一个名称，请修改为最终使用的
        // des: "景区演出 / 餐饮 / 服务",  // des 部分应该是不需要的了
        url: "./mianshi",  // url 未修改，请修改
        animate: {}
      },
      // {
      //   bu: "yuwen",
      //   buName: "语文",
      //   des: "语文",
      //   url: "./yuwen",
      //   animate: {}
      // },
      // {
      //   bu: "luoji",
      //   buName: "逻辑",
      //   des: "逻辑",
      //   url: "./luoji",  // url 未修改，请修改
      //   animate: {}
      // },
      {
        bu: "jingyan",
        buName: "经验分享",
        des: "经验分享",  //
        url: "./jingyan",  // url 未修改，请修改
        animate: {}
      },
      {
        bu: "yule",
        buName: "娱乐八卦",
      
        des: "娱乐八卦",
        url: "./yule",  // url 未修改，请修改
        animate: {}
      }
      ,
      {
        bu: "gaoxiaoxinxi",
        buName: "高校信息",
        des: "高校信息",
        url: "./gaoxiaoxinxi",  // url 未修改，请修改
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
