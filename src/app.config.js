export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subPackages: [
    {
      root: 'subpages',
      pages: [
        'home/index', 'my/index', 'list/index',
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#1777FF',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  }
})
