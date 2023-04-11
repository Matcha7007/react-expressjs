const { DB } = require("../../../db.js");
const response_format = require("../../helpers/response");
const InvalidCredentialException = require("../../exceptions/invalid-credential-exception");
const UnauthenticatedException = require("../../exceptions/unauthenticated-exception");
const AuthService = require("../../helpers/auth");

class AuthController {
  async login(req, res, next) {
    const { username, password } = req.body;

    try {
      const user = await DB.mst_user.findUnique({
        where: {
          username: username,
        },
      });

      if (user == null)
        throw new InvalidCredentialException("Invalid login credentials!", 401);

      if (!(await AuthService.isPasswordAMatch(password, user.password)))
        throw new UnauthenticatedException(
          "You need to be authenticated to perform this action!",
          401
        );

      const payload = { id: user.id, username: user.username };
      const tokens = await AuthService.generateTokens(payload);

      // var jsonArrayRole = user.role;
      // let roleResponse = []
      // for (var i = 0; i < jsonArrayRole.length; i++){
      //   var obj = jsonArrayRole[i];
      //   for (var key in obj){
      //       var attrName = key;
      //       var attrValue = obj[key];
      //       roleResponse.push(attrValue);
      //   }
      // }

      let roleResponse = []
      for (let role of user.role) 
      {
        roleResponse.push(role.role_name);
      }

     
      return res.status(200).send(
        response_format.response2(200, true, "Login successfully", {
          id: user.id,
          uuid: user.uuid,
          username: user.username,
          role : roleResponse,
          accessToken: tokens,
        })
      );
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();
