
//获取应用实例
var app = getApp()
Page({
    data: {
        page:1,
        newList:[],
        imgUrls: [
            '../../image/ad.jpg',
          '../../image/ad.jpg',
          '../../image/ad.jpg'
        ],   
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,    
        nopic:"../../nopic.jpg", 
        loadingHidden: false  // loading
    },

    //事件处理函数
    swiperchange: function(e) {
        //console.log(e.detail.current)
    },

    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        /*app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })  */
        that.newsListLoad();     
    },
    setList: function () {
      var that = this;
      var math = app.globalData.mock["math-meizhouyilian"];
      var lists = [];
      for (var key in math) {
        var item = {
          "id": key*1,
          "type": "math-meizhouyilian",
          "title": "每周一练 " + key,
          "firstImg": "http://img0.imgtn.bdimg.com/it/u=3712704882,302496018&fm=27&gp=0.jpg",
          "desc": "Keep on going never give up."
        }
        lists.push(item)

      }
      lists.sort(function (a, b) { return b.id - a.id });
      that.setData({
        newList: lists
      });
    },
    newsListLoad: function () {
      var that = this;
      if (app.globalData.mock.english) {
        that.setList()
      } else {
        app.getMoc(function () {
          that.setList()
        })
      }
    },   
    onReachBottom: function() {
     
    }
})
