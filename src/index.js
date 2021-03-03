var metrixjs = require('bitcoinjs-lib')

Object.assign(metrixjs.networks, require('./networks'))

metrixjs.utils = require('./utils')

module.exports = metrixjs