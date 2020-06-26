arg=''
if test $1
then
  arg="${1}/"
fi

gnome-terminal --tab -e "sass --watch --sourcemap=none public/${arg}css/style.scss:public/${arg}css/main.css" 1> /dev/null
gnome-terminal --tab -e "npx babel --watch public/${arg}js/index.js --out-file public/${arg}js/main.js --presets=@babel/preset-env" 1> /dev/null
if test $1
then
  gulp --$1
else
  gulp
fi
