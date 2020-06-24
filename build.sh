gnome-terminal --tab -e "sass --watch --sourcemap=none public/css/style.scss:public/css/main.css" 1> /dev/null
gnome-terminal --tab -e "npx babel --watch public/js/index.js --out-file public/js/main.js --presets=@babel/preset-env" 1> /dev/null
gulp