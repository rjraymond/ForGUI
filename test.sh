#!/bin/bash

killall node
killall php
(cd src;  php -S localhost:8000 )&
REACT_APP_LOCAL="true" \
REACT_APP_URL="localhost:3000" \
REACT_APP_PWD="./" \
REACT_APP_PHP="./" \
REACT_APP_URL_PHP="localhost:8000" \
BROWSER=none \
exec npm start &
firefox http://localhost:3000
