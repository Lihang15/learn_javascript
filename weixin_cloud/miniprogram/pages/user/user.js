// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   user:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that =this
      const db = wx.cloud.database()
      db.collection('mydata').doc(options._id).get({
        success: function(res) {
          // res.data 包含该记录的数据
          that.setData({
            user:res.data
          })
        }
      })
  },
  formSubmit(e){
    const db = wx.cloud.database()
    db.collection('mydata').doc(e.detail.value._id).update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        username:e.detail.value.username,
        idcode:e.detail.value.idcode,
      },
      success: function(res) {
        wx.switchTab({
          url: '/pages/find/find'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})