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
        that.newsListLoad();     
    },
    setList:function(){
      var that = this;
      var english = app.globalData.mock.english;
      var lists = [];
      for (var key in english){
        var item = {
          "id":key*1,
          "type": "english",
          "title": "英语短文分享 "+key,
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
    newsListLoad: function(){
        var that = this;
        console.log("@@@@@@@@@@@@@@@@@", app.globalData.mock)
        if (app.globalData.mock&&app.globalData.mock.english){
          that.setList()
        }else{
          app.getMoc(function(){
            that.setList()
          })
        }
    },    
    onReachBottom: function() {
                 
    }
})
