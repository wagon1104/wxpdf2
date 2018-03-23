const app = getApp();
const host = require('../../config').host;
Page({
    data:{         
        article:{
          title:'',
          content:''
        },
        page: 1,
        newList: [],
        imgUrls: [
          // '../../image/1.16众凯教育短文训练2-1.png',
          // '../../image/1.16众凯教育短文训练2-2.png'
        ],
        indicatorDots: true,
        autoplay: false,
        vertical:false,
        interval: 5000,
        duration: 1000,
        nopic: "../../nopic.jpg",
        loadingHidden: false  // loading         
    },
    onLoad: function (options) {
      console.log('onLoad')
      var that = this
      that.newsListLoad(options);
    },
    setList: function (options) {
      var that = this;
      var id = options.id;
      var type = options.type;
      var articles = app.globalData.mock;
      var article = articles[type];

     
      var currArticle = article[id];
      var length = currArticle.length;
      var imgUrls = [];
      var imgUrls_answer = [];

      for (var i = 0; i < length; i++) {
        var suffix = ".svg"
        // if (id == 53) {
        //   suffix = ".svg"
        // }
        imgUrls.push(host+'/image/' + type + '/' + id + '/' + (i + 1) + suffix)
        
      }
      if (type == "math" || type=="math-meizhouyilian") {
        var article_answer = articles[type + "-answer"];
        var currArticle_answer = article_answer[id];
        var length_answer = currArticle_answer.length;
        for (var j = 0; j < length_answer; j++) {
          var suffix = ".svg"
          imgUrls_answer.push(host + '/image/' + type + '-answer/' + id + '/' + (j + 1) + suffix)
        }

      }
      imgUrls = imgUrls.concat(imgUrls_answer);
      var title = "英语短文分享"
      if (type == "math") {
        title = "导学练习"
      }
      if (type == "math-meizhouyilian") {
        title = "每周一练"
      }
      if (type == "laoxushuxue") {
        title = "老徐讲数学"
      }
      if (type == "yingyubiji") {
        title = "英语笔记"
      }
      if (type == "shuxuebiji") {
        title = "数学笔记"
      }
      
      wx.setNavigationBarTitle({
        title: title + " " + id
      })

      this.setData({
        imgUrls: imgUrls
      });



    },
    newsListLoad: function (options) {
      var that = this;
      if (app.globalData.mock.english) {
        that.setList(options)
      } else {
        app.getMoc(function () {
          that.setList(options)
        })
      }
    }
})