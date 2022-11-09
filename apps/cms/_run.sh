#!/bin/bash

export NODE_ENV=production
export PAYLOAD_CONFIG_PATH=dist/payload.config.js
yarn --production --frozen-lockfile

if pm2 reload payload --update-env; then
  echo "Deployed ✅"
else
  pm2 start dist/server.js --name=payload
fi
