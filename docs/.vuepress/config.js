module.exports = {
    title: '沐小家',
    description: '沐小家的故事',
    dest: 'dist', /* 打包文件基础路径, 在命令所在目录下 */
    themeConfig: {
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
            }
          ]
    }
}