// module.exports = {
//   plugins: {
//     'postcss-px-to-viewport': {
//       // 标准屏宽度
//       viewportWidth: 375
//     }
//   },

module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375 // 设计稿宽度，一般是 375 或 750
      // viewportHeight: 667, // 设计稿高度
      // unitPrecision: 5, // px 转 vw 的小数精度
      // viewportUnit: 'vw', // 目标单位
      // selectorBlackList: [], // 不需要转换的选择器
      // minPixelValue: 1, // 小于 1px 不转换
      // mediaQuery: false // 媒体查询中是否转换
    }
  }
}
