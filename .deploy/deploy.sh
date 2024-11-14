cd Ulbi-Frontend
npm run build:prod

rm -rf ~/../var/www/Ulbi-Frontend/html
mv Ulbi-Frontend/build ~/../var/www/Ulbi-Frontend/html