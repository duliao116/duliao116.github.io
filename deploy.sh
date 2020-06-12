#!/bin/bash
gitbook build
echo "-----生成html完成------"
rm -rf ../book/duliao116.github.io/*
echo "-----删除远程html目录------"
mv _book/* ../book/duliao116.github.io/
echo "-----复制html目录------"
rm -rf _book/
echo "-----删除html目录------"
cd ../book/duliao116.github.io/
git pull origin master
git add .
git commit -m "$1"
git push origin master
echo "部署完成"
