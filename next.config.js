const path = require('path')

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve('./src')
    return config
  },
}
