const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@utils': 'src/utils'
        // Add more aliases as needed
    })(config);

    return config;
};
