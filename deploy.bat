@REM npm run build

xcopy static dist\static\ /s /e /h /y

cd dist
git init
git add .
git commit -m "update"
git remote add origin https://github.com/Koorye/Koorye.github.io.git
git branch -M main
git push -u origin main -f

cd ..