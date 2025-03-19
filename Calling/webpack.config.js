// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/* eslint-disable @typescript-eslint/no-var-requires */
import * as path from 'path';

module.exports = (env) => {
  const babelConfig = require('./.babelrc.js');
  const commonConfig = require('./common.webpack.config')(__dirname, env, babelConfig);
  return commonConfig;
};
