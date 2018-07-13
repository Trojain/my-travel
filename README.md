## 项目树
```
.

├── build  // 项目打包的webpack的配置文件
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js  // 基础的webpack配置项
│   ├── webpack.dev.conf.js  // 开发的webpack配置项
│   └── webpack.prod.conf.js  // 线上的webpack配置项
├── config  // 项目配置文件
│   ├── dev.env.js  // 开发配置文件
│   ├── index.js  // 基础配置文件
│   └── prod.env.js  // 线上配置文件
├── src  // 项目源码
│   ├── assets  // 项目资源
│   │   ├── images
│   │   │   └── detail.png
│   │   └── styles
│   │       ├── iconfont  // 字体图标库
│   │       │	├── iconfont.css
│   │       │   ├── iconfont.eot
│   │       │   ├── iconfont.svg
│   │       │   ├── iconfont.ttf
│   │       │   └── iconfont.woff
│   │       ├── border.css  // 1像素边框
│   │       ├── index.styl  // 总出口
│   │       ├── mixins.styl  // 公用样式方法
│   │       ├── reset.css  // 样式清零
│   │       └── varibles.styl  // styl配置公用变量
│   ├── common  //公用组件
│   │   ├── fade
│   │   │   └── FadeAnimation.vue
│   │   └── gallary
│   │       └── Gallary.vue
│   ├── pages  //业务组件
│   │   ├── city  // 城市页
│   │   │   ├──  components
│   │   │   │    ├── Alphabet.vue
│   │   │   │    ├── Header.vue
│   │   │   │    ├── List.vue
│   │   │   │    └── Search.vue
│   │   │   └── City.vue
│   │   ├── detail  // 详情页
│   │   │   ├──  components
│   │   │   │    ├── Banner.vue
│   │   │   │    ├── Header.vue
│   │   │   │    └── List.vue
│   │   │   └── Detail.vue
│   │   └── home  // 主页
│   │   │   ├──  components
│   │   │   │    ├── Guess.vue
│   │   │   │    ├── Header.vue
│   │   │   │    ├── Icons.vue
│   │   │   │    ├── Recommend.vue
│   │   │   │    └── Swiper.vue
│   │   │   └── Home.vue
│   ├── router  // 路由
│   │   └── index.js
│   ├── store  //vuex仓库
│   │   ├── index.js // 入口
│   │   ├── mutations.js   // 改变state状态
│   │   └── state.js // 状态
│   ├── App.vue  //项目根组件
│   └── main.js  // 项目入口文件
├── static  // 静态资源
│   └── mock  // 模拟的静态数据
│       ├── city.json
│       ├── detail.json
│       └── index.json
├── .babelrc  // babel配置文件
├── .editorconfig  // 编辑器的配置文件
├── .gitignore  // 提交git忽略的文件
├── .postcssrc.js  //对postcss的配置项
├── index.html  // 默认首页的模本文件
├── package.json  // 三方模块的依赖
├── package-lock.json  // package.json的锁文件
└── README.md  // 项目说明文件


```

----
## 项目运行方式
```
1.npm install

2.npm run dev

```

----

## 除vue-cli额外要安装的依赖：
```
npm install fastclick --save  安装fastclick插件(防止click延迟)
npm install stylus --save     安装stylus插件(css编译)
npm install stylus-loader --save
npm install vue-awesome-swiper@2.6.7 --save (轮播插件 安装2.6.7稳定版)
npm install vuex --save
npm install babel-polyfill --save  (解决浏览器不支持promise导致白屏问题)
```

----

## 指定路径:
```
/build/webpack.base.conf.js修改：

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles': resolve('src/assets/styles'),
      'common': resolve('src/common'),
    }
  },


// 写法1：@import '../../../assets/styles/varibles.styl'
// 写法2：@import '~@/assets/styles/varibles.styl'
// 写法3:
// @ ：表示src目录 (build/webpack.base.config.js 中可配置)
@import '~styles/varibles.styl'
```

----

## 转发请求设置
```
/config/index.js
修改
	proxyTable: {
		'/api': { // 当请求/api接口时
			target: 'http://localhost:8080', //把请求转发到localh:8080
			secure: false, // 若地址为https，需要设置为false
			changeOrigin: ture, // 如果接口跨域，需要配置这个参数
			pathRewrite: { // 替换路径
				'^/api': '/static/mock' // 把/api开头的接口替换成/static/mock
			}
		}
	},
```

----

## 创建git分支
```
1.在gitee.com页面上新建一个index-swiper分支

2.git pull ( 把线上的index-swiper分支拉到本地 )

3.git checkout index-swiper ( 从master切换到index-swiper分支上，就可以在该分支上提交代码 )
  
4.git add .

5.git commit -m 'xxxx'

6.git push ()  ( 代码被提交到线上index-swiper分支上)

7.git checkout master  ( 切换到master主分支 )

8.git merge origin/index-swiper  ( 把index-swiper分支上的代码合并到主分支上 )

9.git push ( 把master主分支的代码提交到线上 )

注：master主分支上存放的是所有功能最新的代码，index-swiper分支上存放的是具体功能模块代码
```

----

## 真机测试
```
不用localhost  用ip访问项目(内网手机可直接访问)

把package.json中：
"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
修改为：
"dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js",

这样localhost:8080和192.168.1.107:8080  都能访问
```

----

## 打包上线
```
npm run build
会新生成一个dist文件夹 这个dist就是要发布到线上的文件夹

dist中的文件夹如果想放到后台环境中某个文件夹(例如放在project文件夹)下，则需要修改/config/index.js中build：里assetsPublicPath的路径(assetsPublicPath:'/project'),再把新生成的dist文件夹改名为project，丢给后台即可
```

----

## 生成ssh公钥
```
1.生成ssh公钥(三次回车即可生成 ssh key)
ssh-keygen -t rsa -C "xxxx@xxx.com"


2.查看公钥
cat ~/.ssh/id_rsa.pub

3.把查询到的公钥复制到SSH公钥页面
```

----

## iconfont

```
1.http://www.iconfont.cn/home/index

2.图标管理——我的项目——下载至本地

3.将其中的iconfont.eot、iconfont.svg、iconfont.ttf、iconfont.woff四个字体文件和iconfont.css放置  	\src\assets\styles\iconfont\ 下

4.在main.js中引入:
  import 'styles/iconfont/iconfont.css' 

5.在html中使用方法:
  <span class="iconfont">&#xe624;</span>  

```

1.轮播图接口：

	https://zt.dujia.qunar.com/api/app_outbound_travel/index_banner.php?callback=jsonp5&city=%E6%B7%B1%E5%9C%B3

	callback: jsonp5
	city: 深圳

	
2.错峰特价：

	https://zt.dujia.qunar.com/zts/cuofeng/api.php?callback=jsonp6&act=get_recommand&city=%E6%B7%B1%E5%9C%B3

	callback: jsonp6
	act: get_recommand
	city: 深圳


3.错峰特价详情：

	https://touch.dujia.qunar.com/item?id=4242529280&it=n_index_oversea_ser_visa_desti_theme_tejia_tejia_desti_theme_tejia_tejia_micro_travel_tejia_tejia_tejia

	id: 4242529280
	it: n_index_oversea_ser_visa_desti_theme_tejia_tejia_desti_theme_tejia_tejia_micro_travel_tejia_tejia_tejia	
	
3.发现旅行：

	https://ugc.dujia.qunar.com/art/like?callback=jsonp9&channelType=2&dep=%E6%B7%B1%E5%9C%B3&keywords=	

	callback: jsonp9
	channelType: 2
	dep: 深圳
	keywords: 
	

4.发现旅行详情页：

	https://ugc.dujia.qunar.com/p/v2/detail?id=2857381631&it=n_index_oversea_ser_visa_desti_theme_tejia_tejia_desti_theme_tejia_tejia_micro_travel&dep=%E6%B7%B1%E5%9C%B3#/?_k=uysz9o	

	id: 2857381631
	dep: 深圳

PC
element     28.7k
iview		16k
	
mint-ui		11.7k
vux	        13.4k
ZanUi		5.5k

	
	
	
function food(a, b, c, d, t) {
	var x = (a / (a + b + c + d) * t).toFixed(2);
	var j = (b / (a + b + c + d) * t).toFixed(2);
	var l = (c / (a + b + c + d) * t).toFixed(2);
	var s = (d / (a + b + c + d) * t).toFixed(2);
	console.log(`大哥今天的饭钱是：${x}\n俊霖今天的饭钱是：${j}\n元鸿今天的饭钱是：${l}\n小仙女今天的饭钱是：${s}`);
}	

food(18.99,12.64,21.98,20.88,50.84)
