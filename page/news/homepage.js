var app = getApp();

Page({
  data: {
    items: [
      {
        bu: "english",
        buName: "英语",
        des: "教育短文分享",
        url: "./index",
        animate: {}
      },
      
      {
        bu: "yingyubiji",
        buName: "英语",
        des: "英语笔记",
        url: "./yingyubiji",
        animate: {}

      },
      {
        bu: "math",
        buName: "数学",
        des: "2019年导学练习",
        url: "./math",
        animate: {}

      },
      {
        bu: "meizhouyilian",
        buName: "数学",
        des: "2019年每周一练",
        url: "./meizhouyilian",
        animate: {}

      },
      {
        bu: "laoxushuxue",
        buName: "数学",
        des: "老徐讲数学",
        url: "./laoxushuxue",
        animate: {}

      }
    ],
  },
  englishClick:function(){
    
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
    this.getNames(function(){
      wx.navigateTo({
        url: './yingyubiji'
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
