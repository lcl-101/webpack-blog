
const config = require('./qk.dconfig.js')
const fs = require('fs')

const dpsConfig = {
	url: config.url,      				// 待生成骨架屏页面的地址，用百度（https://baidu.com）试试也可以
	output: {
		filepath: '',   				// 生成骨架屏的存放页面，一般为项目的入口页面
		injectSelector: '#app'  		// 生成的骨架屏插入页面的节点
	},
	background: '#eee',
	animation: 'opacity 1s linear infinite',
	writePageStructure: function(html) {
		//自己处理生成的骨架屏
		fs.writeFileSync(config.filepath,'<style>@keyframes opacity { 0% {opacity: 1} 50% {opacity: .5} 100% {opacity: 1}}._ {transform: scale(0.95);}</style>' + html);
	},
	init: function() {
		// 生成骨架屏之前的操作，比如删除干扰节点
		const umdList = ['QkAddress','QkPendant','QkBottomNavBar']
		for(let i = 0; i< umdList.length; i++){
			if(document.querySelector(`[code=${umdList[i]}]`)){
				document.querySelector(`[code=${umdList[i]}]`).remove();
			}
		}
	}
}

module.exports = dpsConfig;


