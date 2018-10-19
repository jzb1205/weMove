// pages/subject/suject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [
      {
        img: 'http://m.iqiyipic.com/common/lego/20180811/42f8da28db964b659ee1ed4a94a99860.jpg'
      },
      {
        img: 'http://pic8.iqiyipic.com/image/20180806/1f/f1/v_117913731_m_601_284_160.jpg'
      },
      {
        img: 'http://pic1.iqiyipic.com/lequ/20180811/3edca6b6558641c483d20fdc6a01c857.jpg'
      },
      {
        img: 'http://pic2.iqiyipic.com/lequ/20180811/500c041b9f834ba792b81c5f47b68e85.jpg'
      },
      {
        img: 'http://pic4.iqiyipic.com/image/20180803/be/8e/v_117833002_m_601_m1_220_124.jpg'
      },
      {
        img: 'http://pic0.iqiyipic.com/image/20180806/df/32/v_117898942_m_601_m1_220_124.jpg'
      },
      {
        img: 'http://pic0.iqiyipic.com/image/20180806/df/32/v_117898942_m_601_m1_220_124.jpg'
      },
      {
        img: 'http://pic0.iqiyipic.com/image/20180806/df/32/v_117898942_m_601_m1_220_124.jpg'
      },
      {
        img: 'http://pic1.iqiyipic.com/image/20180807/f7/eb/v_117924224_m_601_m1_220_124.jpg'
      },
      {
        img: 'http://pic9.iqiyipic.com/image/20180810/99/a5/v_118004194_m_601_m1_220_124.jpg'
      }
    ],
    nameList:[]
  },
  onLoad: function (optionis) {
    wx.request({
      url: 'https://movie.douban.com/j/search_tags?type=movie&source=index',
      header: {
        "Content-Type": "application/text"
      },
      success:res => {
        this.setData({
          nameList: res.data.tags
        })
      }
    })
  },
  toSubjectList(e){
    console.log(e.currentTarget.dataset.type)
    wx.navigateTo({
      url: `/pages/subjectList/subjectList?type=${e.currentTarget.dataset.type}`,
    })
  }

})