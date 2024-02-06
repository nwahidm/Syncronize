const jwt = require('jsonwebtoken');
const debug = require('debug');
const { split } = require('lodash');

module.exports = {
    isVerified: async (req, res, next) => {
        const log = debug('integration-service:is_verified')
        try {
            const { sifig_token } = req.headers;
            const token = split(sifig_token, ' ')[0];
    
            if (!token) return res.status(401).json({ message: 'Invalid token! The access token is missing', error: 'invalid_token' })
            
            const decoded = jwt.verify(token, config.myConfig.sessionSecret);
            log('decoded: ', decoded);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token!', error })
        }
    }
};
