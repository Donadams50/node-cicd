#!/bin/sh
ssh -tt kz@192.168.88.142 << 'ENDSSH'
 cd ~/node-project
 git pull
 npm install 
 node index.js
 exit
ENDSSH