// pages/uestcNews/uestcNews.js
var dataObj = require("../../data/data.js");
Page({
  data: {
  },
  onLoad: function () {
    this.setData({
      postList: dataObj.postList
    });
  },
  /*  var that = this;
    requestData(that, "");
  */
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  onTapToDetail(event) {
    var postId = event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: "lecture-detail/lecture-detail?id=" + postId
    })
  }
})