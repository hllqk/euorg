(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{273:function(t,v,_){"use strict";_.r(v);var r=_(13),a=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"setuapi"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#setuapi"}},[t._v("#")]),t._v(" SetuAPI")]),t._v(" "),v("p",[v("strong",[t._v("数据库在release里")])]),t._v(" "),v("p",[t._v("API: https://setu.yuban10703.xyz/setu")]),t._v(" "),v("p",[t._v("请求方法:GET,POST")]),t._v(" "),v("p",[t._v("返回数据为JSON")]),t._v(" "),v("h3",{attrs:{id:"api文档地址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#api文档地址"}},[t._v("#")]),t._v(" API文档地址")]),t._v(" "),v("p",[t._v("https://setu.yuban10703.xyz/docs")]),t._v(" "),v("h3",{attrs:{id:"请求字段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求字段"}},[t._v("#")]),t._v(" 请求字段")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("r18")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("0:性感,1:色情,2:all")])]),t._v(" "),v("tr",[v("td",[t._v("num")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("数量,最大50")])]),t._v(" "),v("tr",[v("td",[t._v("tags")]),t._v(" "),v("td",[t._v("array[string]")]),t._v(" "),v("td",[t._v("可以传入多个tag")])]),t._v(" "),v("tr",[v("td",[t._v("replace_url")]),t._v(" "),v("td",[t._v("HttpUrl")]),t._v(" "),v("td",[t._v("反代的链接,用于替换默认的https://i.pximg.net  例如https://i.pixiv.cat")])])])]),t._v(" "),v("h3",{attrs:{id:"返回数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#返回数据"}},[t._v("#")]),t._v(" "),v("strong",[t._v("返回数据")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("数据类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("detail")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("没东西就是正常")])]),t._v(" "),v("tr",[v("td",[t._v("tags")]),t._v(" "),v("td",[t._v("array[string]")]),t._v(" "),v("td",[t._v("你请求的时候发送的tags")])]),t._v(" "),v("tr",[v("td",[t._v("count")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("data内的数据数量")])]),t._v(" "),v("tr",[v("td",[t._v("data")]),t._v(" "),v("td",[t._v("array[setu]")]),t._v(" "),v("td",[t._v("setu列表")])])])]),t._v(" "),v("h3",{attrs:{id:"setu"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#setu"}},[t._v("#")]),t._v(" "),v("strong",[t._v("setu")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("数据类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("artwork")]),t._v(" "),v("td",[t._v("array[artwork]")]),t._v(" "),v("td",[t._v("画廊的标题和P站id")])]),t._v(" "),v("tr",[v("td",[t._v("author")]),t._v(" "),v("td",[t._v("array[author]")]),t._v(" "),v("td",[t._v("作者的名字和P站ID")])]),t._v(" "),v("tr",[v("td",[t._v("count")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("获取到的数量")])]),t._v(" "),v("tr",[v("td",[t._v("sanity_level")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("P站给的字段 可能是色情等级吧")])]),t._v(" "),v("tr",[v("td",[t._v("r18")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("是否R18")])]),t._v(" "),v("tr",[v("td",[t._v("page")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("作品在画廊的第几P(从0开始算)")])]),t._v(" "),v("tr",[v("td",[t._v("create_date")]),t._v(" "),v("td",[t._v("string($date-time)")]),t._v(" "),v("td",[t._v("P站的字段 应该是最后更新日期")])]),t._v(" "),v("tr",[v("td",[t._v("size")]),t._v(" "),v("td",[t._v("array[size]")]),t._v(" "),v("td",[t._v("图片的长宽")])]),t._v(" "),v("tr",[v("td",[t._v("tags")]),t._v(" "),v("td",[t._v("array[string]")]),t._v(" "),v("td",[t._v("图片的标签")])]),t._v(" "),v("tr",[v("td",[t._v("urls")]),t._v(" "),v("td",[t._v("array[urls]")]),t._v(" "),v("td",[t._v("图片的链接")])])])]),t._v(" "),v("h3",{attrs:{id:"artwork"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#artwork"}},[t._v("#")]),t._v(" "),v("strong",[t._v("artwork")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("数据类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("title")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("作品标题")])]),t._v(" "),v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("作品的P站ID")])])])]),t._v(" "),v("h3",{attrs:{id:"author"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[t._v("#")]),t._v(" "),v("strong",[t._v("author")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("数据类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("name")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("作者名字")])]),t._v(" "),v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("作者的P站ID")])])])]),t._v(" "),v("h3",{attrs:{id:"size"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[t._v("#")]),t._v(" "),v("strong",[t._v("size")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("数据类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("width")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("宽")])]),t._v(" "),v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("高")])])])]),t._v(" "),v("h3",{attrs:{id:"urls"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#urls"}},[t._v("#")]),t._v(" "),v("strong",[t._v("urls")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名")]),t._v(" "),v("th",[t._v("数据类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("original")]),t._v(" "),v("td",[t._v("string($uri)")]),t._v(" "),v("td",[t._v("链接(画质:original)")])]),t._v(" "),v("tr",[v("td",[t._v("large")]),t._v(" "),v("td",[t._v("string($uri)")]),t._v(" "),v("td",[t._v("链接(画质:large)")])]),t._v(" "),v("tr",[v("td",[t._v("medium")]),t._v(" "),v("td",[t._v("string($uri)")]),t._v(" "),v("td",[t._v("链接(画质:medium)")])])])]),t._v(" "),v("h3",{attrs:{id:"docker"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" docker")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("docker build -t setuapi:v1.7 .\n")])])]),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('docker run -d \\\n-p 9001:80 \\\n-e mongodb="mongodb+srv://username:password@cludn.mongodb.net/setu?retryWrites=true&w=majority" \\\n-e db="setu" \\\n-e col="setu_v5" \\\n-e LOG_LEVEL="debug" \\\nsetuapi:v1.7\n')])])]),v("h3",{attrs:{id:"mongodb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[t._v("#")]),t._v(" mongodb")]),t._v(" "),v("p",[t._v("要给r18,tags字段分别建索引")]),t._v(" "),v("h3",{attrs:{id:"感谢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#感谢"}},[t._v("#")]),t._v(" 感谢")]),t._v(" "),v("p",[t._v("https://cloud.mongodb.com")]),t._v(" "),v("p",[t._v("https://vercel.com")])])}),[],!1,null,null,null);v.default=a.exports}}]);