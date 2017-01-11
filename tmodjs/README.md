起因：header和footer重复，不想用服务器端的include，而且不是正式项目，仅仅是自己的毕设。无关SEO优化，无关别的考虑。
于是：想前端解决。发现jQuery的get()和load()均为异步加载，不靠谱。
想看看有没有能包含文件的js模板框架，发现都无法干这样的事。（AngularJS好像能，但是我只是想包含文件而已…而且其实也是ajax实现的…杀鸡焉用牛刀……）
然后看了看artTemplate，发现它的模板都写在了script标签里。
artTemplate的readme下面的一个小小的tmodjs，说是可以按模块（路径）组织模板，然后编译成最终的js来引用到页面中。于是，开工。
第一：Node.js
第二：设置Path，以在cmd中直接可以使用npm命令。
第三，安装tmod,npm install -g tmodjs
第四，建文件夹，建模板，html的路径/名字就是模块名，
第五，配置：tmod ./tpl/htmls --output ./tpl/build --type default

我的模板都放在tpl文件夹中，htmls用于存放模板页面，每一个后缀名都是.html，而build用于存放编译后输出的模板js。

如果不设置type，默认会将所有的模板编译合并为 template.js ，而如果设置了type，就会单独生成对应js文件。


<script id="test" type="text/html">  
模板内容  
</script>  

一样，var html = template('header',data); 就可以获取把header.html作为模板渲染后的html。

把重复代码抠出，做成xx.html，运行tmod编译。tmod可以一直运行着，一旦模板文件(xx.html)修改，tmod会自动重新编译，输出template.js
所以仅需页面中引入编译好的template.js即可。

自己写个init.js,每个页面都引用：

var html = template('header');  
$('.header').html(html);  
html = template('leftnav');  
$('.leftnav').html(html);  

然后OK。
大概就是这样。
目前看是麻烦了些。
但是估计后期还会用到artTemplate的遍历数据等别的功能。就这样吧。不改了。

项目见 http://git.oschina.net/lgh06/tjnuLost/tree/front/ 
待更新。