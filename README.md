### 10.1

### 10.2 
  * 购物车界面
  * 优化我的界面
  * 优化配色

### 10.3

### 10.4

### 10.5

### 10.6
  * rpx(规定屏幕宽为750rpx  1rpx=1物理像素)
  * 样式引入(@import "path")
  * 选择器部分支持(.class, #id, element, ::before, ::after) 
  * flex布局
    * 核心：掌握两组概念
    * 容器和项目概念
    * 主轴和交叉轴的概念 

### 10.7    
  * 数据绑定
  * 渲染：条件，循环
    * 条件
    * 循环
    * wx:if  hidden
    * block
    * template 
  * 模版：template
  * 引用
    * import(可以解析模版)
    * include(只能解析静态的) 
  * 事件
    *  视图层到逻辑层的通讯方式
    *  事件对象可以携带额外信息
    *  分类：冒泡事件和非冒泡事件
    *  冒泡 touchxxx tap longtap
    *  事件绑定：bindxxx catchxxx
    *  bind不阻止冒泡事件向上冒泡
    *  catch阻止冒泡事件向上冒泡
    *  事件对象 type timeStamp target currenttarget
        * type 代表事件类型
        * timeStamp 触发事件所经过的毫秒数   
        * Target 触发事件的源组件
        * currentTarget 事件绑定的当前对象
  * 组件
    * swiper 轮播
    * swiper-view  内部滚动
    * progress 进度条  
    * picker-view 嵌入滚动
    * switch 开关选择器
    * icon 图标
    * navigator 页面跳转  在onload函数中 可以用options获得传入的参数
    * wx.navigatorTo({ url: '.....'})
    * audio video 多媒体
    * map 地图
    * canvas 画布

### 10.8
  * 环境的安装
  * 框架结构
    *  逻辑层 javascript
    *  视图层 wxml wxss
  * 目录结构
  * 配置文件
  * 案例 (组件)
  * 项目
    * 豆瓣电影
    * 列表
    * 加载loading
    * 加载下一页
    * 详情页 


  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
  git remote add origin http://gitee.com/feiwuhb/SmallAPP.git

  生成密钥：
  $ ssh-keygen -t rsa -C “邮箱”
  按3个回车，密码为空。

  clip < ~/.ssh/id_rsa.pub
  复制key到剪贴板

  ssh -T
  git@github.com
  测试key是否配置成功

  10.18
  10.19
  10.23
    * 订单页样式，列表样式修改，添加支付确认页面