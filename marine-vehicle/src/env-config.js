const env = process.env.REACT_APP_ENV || 'development';

let config;

switch (env) {
    case 'development':
        config = require('./env/development').default;
        break;
    case 'staging':
        config = require('./env/staging').default;
        break;
    case 'production':
        config = require('./env/production').default;
        break;
    default:
        throw new Error(`Unsupported environment: ${env}`);
}

export default config;
