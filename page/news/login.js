//index.js

//获取应用实例
var app = getApp()
Page({
  data: {
    phonenumber: '',
    password: '',
    numShow: 'none',
    psdShow: 'none',
    modelInnerHtml: '123',
    loadingHidden: true,
    modalHidden: true
  },
  onLoad: function () {
    // common.sayHello()

    console.log('onLoad')
    var that = this
   
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 账号修改
  bindNumInput: function (e) {
    this.setData({
      numShow: 'none',
      phonenumber: e.detail.value
    })
    console.log(this.data.phonenumber)
  },
  // 密码修改
  bindPsdInput: function (e) {
    this.setData({
      psdShow: 'none',
      password: e.detail.value
    })
    console.log(this.data.password)
  },
  // 账号失去焦点
  numChange: function () {
    if (this.data.phonenumber == '') {
      this.setData({
        numShow: '',
        psdShow: 'none'
      })

      console.log('手机号不能为空' + this.data.numShow);
    }
  },
  // 密码失去焦点
  psdChange: function () {
    if (this.data.password == '') {
      this.setData({
        numShow: 'none',
        psdShow: ''
      })

      console.log('密码不能为空' + this.data.psdShow);
    }
  },
  // 弹窗消失
  modalChange: function () {
    this.setData({
      modalHidden: true
    })
  },
  // 点击提交按钮
  loginSubmit: function (e) {
    console.log(this)
    var phonenumber = this.data.phonenumber;
    if (phonenumber != '' ) {
      this.setData({
        numShow: 'none',
        psdShow: 'none',
        loadingHidden: false
      })

      console.log("Success");

      var that = this
      // setTimeout(function () {
        that.setData({
          loadingHidden: true
        })
        app.getNames(function(){
          if (app.globalData.names[phonenumber]){
         
            try {
              wx.setStorageSync('mobile', phonenumber)
            } catch (e) {
              console.log(e)
            }
            wx.navigateBack({
              delta: 1
            })
          }else{
            wx.redirectTo({
              url: "./404"
            })
          }
        })
        

        // wx.redirectTo({
        //   url: './homepage'
        // })
       
      // }, 1000)

    } else if (this.data.phonenumber == '') {
      this.setData({
        numShow: '',
        psdShow: 'none',
        modelInnerHtml: '手机号不能为空',
        modalHidden: false
      })

      console.log("phonenumber不能为空" + this.data.numShow)
    } 
  }
})