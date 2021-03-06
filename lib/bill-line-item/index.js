Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //如果父页面传入的属性值和属性定义数据类型不一致，组件会自动对其进行转换
    billData: {
      type: Object,
      value: {
        title: '',
        status: '',
        imgSrc: '',
        subTitle: '',
        info: '',
      }
    },
    bold: {
      type: Boolean,
      value: false
    },
    hasPicture: {//组件是否需要图片
      type: Boolean,
      value: true
    },
    hoverClass: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusColor: '',//状态值的不同颜色显示
    statusInfo: ''//状态值的文字描述
  },

  /**
   * 自定义组件生命周期函数对象集合
   */
  lifetimes: {
    /**
     * attached阶段，自定义组件的内部数据就可以进行赋值，相当于page的onload生命阶段
     */
    attached: function () {
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }

})