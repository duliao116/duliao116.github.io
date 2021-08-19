---
title: gh-pages 配合vuepress
---

## deploy写法
别人都是这么写
```js
"deploy": "gh-pages -d dist"
```
无耐之下，只能使用查看一下这个命令的功能都有哪些
```bash
> gh-pages --help

Usage: gh-pages [options]

Options:
  -V, --version            output the version number
  -d, --dist <dist>        Base directory for all source files
  -s, --src <src>          Pattern used to select which files to publish (default: "**/*")
  -b, --branch <branch>    Name of the branch you are pushing to (default: "gh-pages")
  -e, --dest <dest>        Target directory within the destination branch (relative to the root) (default: ".")
  -a, --add                Only add, and never remove existing files
  -x, --silent             Do not output the repository url
  -m, --message <message>  commit message (default: "Updates")
  -g, --tag <tag>          add tag to commit
  --git <git>              Path to git executable (default: "git")
  -t, --dotfiles           Include dotfiles
  -r, --repo <repo>        URL of the repository you are pushing to
  -p, --depth <depth>      depth for clone (default: 1)
  -o, --remote <name>      The name of the remote (default: "origin")
  -u, --user <address>     The name and email of the user (defaults to the git config).  Format is "Your Name <email@example.com>".
  -v, --remove <pattern>   Remove files that match the given pattern (ignored if used together with --add). (default: ".")
  -n, --no-push            Commit only (with no push)
  -f, --no-history         Push force new commit without parent history
  --before-add <file>      Execute the function exported by <file> before "git add"
  -h, --help               output usage information
```
然后用了-b指定了分支，使用-r指定了远程仓库，使用-u指定了用户邮箱，当然了，需要配合本地的ssh-key来使用，否则还要输入密码啥的，麻烦
```js
"deploy": "gh-pages -d dist -b master -r git@github.com:xxx/xxx.github.io.git -u xxx@163.com"
```
