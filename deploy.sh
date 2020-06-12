gitbook build
mv _book/* ../book/duliao116.github.io/
cd ../book/duliao116.github.io/
git pull origin html
git add .
git commit -m 'update'
git push origin html