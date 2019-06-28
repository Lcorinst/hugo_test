# School of Information and Communication Engineering, Dalian University of Technology 

## 简介

本项目是利用Hugo为依托的静态页面站点

## 安装

1. Hugo下载与安装：` https://github.com/spf13/hugo/releases `

2. 将项目代码下载或clone到本地

## 目录结构

├─archetypes    
├─content            # 页面存放位置         
│  ├─post            # 新闻动态  
│  └─staticpage      # 其他静态页面  
├─data  
├─layouts   
├─static        # 公共静态内容  
│  ├─files      # 文件  
│  └─images # 图片  
└─themes        # 网站主题  
	└─bootstrap         
		├─archetypes    
		├─layouts   #布局文件   
		│  ├─partials       #页面公共内容   
		│  ├─shortcodes                     
		│  ├─staticpage     #静态页面布局   
		│  └─_default       #新闻动态布局   
		└─static            #主题静态内容   
			├─css   
			├─fonts         
			├─images    
			└─js    

## 添加内容

在网站所在目录打开cmd

1. ` $ hugo new post/title.md ` 在` /content/post `目录生成 ` title.md `模板
2. 编辑 ` title.md `模板内容
3. ` $ hugo server --buildDrafts ` 访问` http://localhost:1313/ice `预览网站
4. ` $ hugo --buildDrafts ` 在` /public `文件夹下生成静态页面
5. 将` public `目录上传至站群系统


