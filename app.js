const host = require('./config').host;


App({
  onLaunch: function () {
    console.log('App Launch')
    this.getMoc();
    // this.getUserInfo();
  },  
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              console.log("--------",res);
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  // lazy loading openid
  getUserOpenId: function(callback) {
    var self = this

    if (self.globalData.openid) {
      callback(null, self.globalData.openid)
    } else {
      wx.login({
        success: function(data) {
          wx.request({
            url: openIdUrl,
            data: {
              code: data.code
            },
            success: function(res) {
              console.log('拉取openid成功', res)
              self.globalData.openid = res.data.openid
              callback(null, self.globalData.openid)
            },
            fail: function(res) {
              console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
              callback(res)
            }
          })
        },
        fail: function(err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
          callback(err)
        }
      })
    }
  },
  onShow: function () {
    console.log('App Show')
    //当小程序启动，或从后台进入前台显示，会触发 onShow
  },
  onHide: function () {
    console.log('App Hide')
    //当小程序从前台进入后台，会触发 onHide
  },
  onError: function(){
    //当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  },
  globalData:{
    userInfo:null,
    hasLogin: false,
    openid: null,
    mock:null,
    names:null,
    mobile:null
  },
  getNames: function (fn) {
    var that = this;
    wx.showToast({
      title: '正在校验...',
      icon: 'loading',
      mask: true
    });
    //newsList
    wx.request({
      url: host + '/names.json',
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function (result) {
        console.log(result.data)
        // that.setData({
        //   newList: that.data.newList ? that.data.newList.concat(result.data.result.list) : result.data.result.list
        // });
        that.globalData.names = result.data;
        wx.hideToast();
        if (fn) fn();
      }
    })
  },
  getMoc: function (fn) {
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      mask: true
    });
    //newsList
    wx.request({
      url: host+'/mock.json',
      method: 'GET',
     header: {
        'Accept': 'application/json'
      },
      success: function (result) {
        console.log(result.data)
        // that.setData({
        //   newList: that.data.newList ? that.data.newList.concat(result.data.result.list) : result.data.result.list
        // });
        that.globalData.mock = result.data;
        wx.hideToast();
        if (fn) fn();
      }
    })
  }
})
