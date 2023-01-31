#!/bin/bash

killall node
killall php
(cd src;  php -S localhost:8000 )&
FA_LOCAL=true BROWSER=none exec npm start &
firefox http://localhost:3000
