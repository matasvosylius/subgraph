#!/bin/bash

npm run prepare-local
npm run getAbi
npm run codegen
npm run build
npm run create-local
npm run deploy-local