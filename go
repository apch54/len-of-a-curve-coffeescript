#!/bin/bash

rm -f ./js/*.js

cat ./**/*.coffee | coffee --compile --bare --stdio > ./js/app.js
node ./js/app.js