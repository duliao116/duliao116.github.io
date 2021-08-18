module.exports = {
    title: '沐小家',
    description: '沐小家的故事',
    dest: 'dist', /* 打包文件基础路径, 在命令所在目录下 */
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        search: true,
        searchMaxSuggestions: 10,
        /*侧边栏导航配置 */
        sidebar: [
            {
              title: '工具',
              children: [
                  '/工具/idea_mac_keys',
                  '/工具/test'
              ]
            },
            {
              title: '2018',   // 必要的
              children: [
                  {
                      title: '英语',
                      children: [
                        '/2018/英语/李雷说英语-1',
                        '/2018/英语/李雷说英语-2',
                        '/2018/英语/李雷说英语-3',
                        '/2018/英语/李雷说英语-4',
                        '/2018/英语/李雷说英语-5',
                        '/2018/英语/李雷说英语-6'
                      ]
                  },
                  {
                      title: '总结',
                      children: [
                        '/2018/Java/Assert断言',
                        '/2018/Java/cleanCodeTrain',
                        '/2018/Java/Exception2String',
                        '/2018/Java/queryForLong',
                        '/2018/Java/POI之合并单元格'
                      ]
                  }
              ]
            },
            {
              title: '工作',
              children: [
                  '/工作/设计和实现如何保持一致'
              ]
            }
        ],
    },
    /*markdown配置*/
    markdown: {
      lineNumbers: true,
      /*markdown 扩展插件配置*/
      extendMarkdown: md => {
        // md.set({ breaks: true })
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@')
        md.use(require('markdown-it-plantuml'))
      }
    }
}