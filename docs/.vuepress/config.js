module.exports = {
    title: 'HLLQK文档',  // 文档标题，左上角显示
    description: 'hllqk文档合集',
    base: '/', // 这里写你的仓库名称
		publicPath: './',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/jyjwebdocs/favicon.ico` }]
    ], //这里配置你的网页头部信息等
    themeConfig: {
		sidebarDepth : 2,
		displayAllHeaders: true, // 默认值：false
		nav: [
            { text: '首页', link: '/' },
						{ text: 'hllqk blog', link: 'https://hllqk.vercel.app/' },
            { 
                text: '关于我', 
                items: [
                    { text: 'Github', link: 'https://github.com/hllqk' },
                    { text: 'Bilibili', link: 'https://space.bilibili.com/227561303?spm_id_from=333.1007.0.0' }
                ]
            }
        ],
    sidebar:
	[
							'/',
              '/guide/',
							'/guide/api/'
							],
}
}
