const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@api': 'src/api',
        '@utils': 'src/utils',
        '@models': 'src/models',
        '@constants': 'src/constants',
        '@redux': 'src/redux',
        '@services': 'src/services',
        '@features': 'src/features',
        // Add more aliases as needed
    })(config);

    return config;
};
