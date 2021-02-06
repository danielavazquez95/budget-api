const jwt = require('jwt-simple');

const checkToken = (req, res, next) => {

    if(!req.headers['user-token']){
        return res.json({error: 'You need to include user-token on the headers'});
    }

    const userToken = req.headers['user-token'];
    let payload = {};
    
    try {
        payload = jwt.decode(userToken, 'secret phrase');
    } catch (err) {
        return res.json({error: 'Token is wrong'});
    }
    
    req.userId = payload.userId;

    next();

};

module.exports = {
    checkToken
};