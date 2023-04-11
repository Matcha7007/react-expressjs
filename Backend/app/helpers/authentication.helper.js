const jwt = require('jsonwebtoken');
require('dotenv').config();
const crypto = require('crypto');
const moment = require('moment');
const randomstring = require("randomstring");


exports.AuthenticateToken  = (req,res,next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader &&  authHeader.split(' ')[1];
    if(token == null) return res.status(401).send({
      message:"Unauthorized"
    });
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user) => {
      if(err) return res.status(403).send({
        message:"Forbiden"
      });
      req.validatedUser = user;
      req.token = token;
      next()
    })
};

exports.getAuth = function (req) {
  return jwt.decode(req?.headers?.authorization?.split(' ')[1])
}

exports.getBearerToken = function (req) {
  return req?.headers?.authorization.split(' ')[1] ? req?.headers?.authorization.split(' ')[1] :null;
}

// Method to set salt and hash the password for a user 
exports.setPassword = function(password) { 
  let result = {};
  // Creating a unique salt for a particular user 
     let salt = crypto.randomBytes(16).toString('hex'); 
   
     // Hashing user's salt and password with 1000 iterations, 
      
     let hash = crypto.pbkdf2Sync(password, salt,  
     1000, 64, `sha512`).toString(`hex`); 

    result['hash'] = hash;
    result['salt'] = salt;
    
     return result;
}; 
   
 // Method to check the entered password is correct or not 
 exports.cekValidPassword = function(password,hash,salt) { 
     var hashnew = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`); 
     return hashnew === hash; 
};

exports.generateToken = function(user){  
  var now = moment(Date.now()).locale('id');
  var future = moment(now).add(1, 'days').toDate();
  var server = '0.0.0.0';
  var jti = randomstring.generate();
  const payload = { 
    username :user?.dataValues?.username ? user?.dataValues?.username :"",
    exp : future.getTime() / 1000,
    jti : jti,
    sub : server,
    uuid : user?.dataValues?.uuid ? user?.dataValues?.uuid : "",
    kd_kotama : user?.satuan?.dataValues?.kotama ? user?.satuan?.dataValues?.kotama : "",
    kd_satpor : user?.satuan?.dataValues?.kd_satpor ? user?.satuan?.dataValues?.kd_satpor : "",
    nm_satpor : user?.satuan?.dataValues?.satuan ? user?.satuan?.dataValues?.satuan : "",
    level : user?.dataValues?.level ? user?.dataValues?.level:"satuan"
  }

  token = jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET);
  const data = {
    accessToken : token,
    tokenType : "Bearer",
    expiresIn :  future.getTime() / 1000,
    issued : now,
    expires : future
  }
  return data;
};