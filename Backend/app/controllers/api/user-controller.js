const { DB } = require("../../../db.js");
const response_format = require("../../helpers/response");
const bcrypt = require("bcrypt");

class UserController {
  GetAll = async (req, res) => {
    try {
      const response = await DB.$queryRaw`
                               SELECT 
                                    a.id,
                                    a.uuid, 
                                    a.username, 
                                    a.employee_id,
                                    b.name,
                                    c.department_name,
                                    d.section_name,
                                    a.role
                                FROM mst_user a 
                                    INNER JOIN mst_employee b ON a.employee_id= b.id
                                    INNER JOIN mst_department c ON b.department_id= c.id
                                    INNER JOIN mst_section d ON b.section_id= d.id
                                    `;
      return res
        .status(200)
        .send(response_format.response2(200, true, "list data user", response));
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  GetById = async (req, res) => {
    const uuid = req.params.uuid;
    try {

      const response = await DB.$queryRaw`
                               SELECT 
                                    a.id,
                                    a.uuid, 
                                    a.username, 
                                    a.employee_id,
                                    b.name,
                                    c.id as department_id,
                                    c.department_name,
                                    d.section_name,
                                    a.role
                                FROM mst_user a 
                                    INNER JOIN mst_employee b ON a.employee_id= b.id
                                    INNER JOIN mst_department c ON b.department_id= c.id
                                    INNER JOIN mst_section d ON b.section_id= d.id
                                    WHERE a.uuid::varchar  = ${uuid}`;
      return res
        .status(200)
        .send(response_format.response2(200, true, "list data user", response));

      // const response = await DB.mst_user.findMany({
      //   where: {
      //     uuid: uuid,
      //   }});

      // return res
      //   .status(200)
      //   .send(response_format.response2(200, true, "single data user", response));
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };


  Create = async (req, res) => {
    const { username, password, employee_id, role, user_id } = req.body;

    try {

      
      let userCount = await DB.mst_user.count({
        // where: {
        //   username: username,
        // },
        where: {
          OR: [
            { username: username },
            { employee_id: employee_id },
          ],
        },
      });

      if (userCount > 0) {
        return res
          .status(409)
          .send(
            response_format.response2(
              409,
              false,
              "Username  or employee id already exist",
              userCount
            )
          );
      }

      const response = await DB.mst_user.create({
        data: {
          username: username,
          password: bcrypt.hashSync(password, 10),
          employee_id: employee_id,
          role: role,
          created_by: user_id,
        },
      });

      return res
        .status(201)
        .send(
          response_format.response2(
            200,
            true,
            "create data user successfully",
            response
          )
        );
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  Update = async (req, res) => {
    const { username, employee_id, role, user_id } = req.body;
    const uuid = req.params.uuid;
    const date = new Date();
    try {
      const update = await DB.mst_user.updateMany({
        where: {
          uuid: uuid,
        },
        data: {
          username: username,
          employee_id: employee_id,
          role: role,
          modified_by: user_id,
          modified_on: date,
        },
      });
      return res
        .status(200)
        .send(
          response_format.response2(
            200,
            true,
            "updated data user successfully",
            update
          )
        );
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  Delete = async (req, res) => {
    const uuid = req.params.uuid;
    try {
      const deleted = await DB.mst_user.deleteMany({
        where: {
          uuid: uuid,
        },
      });
      return res
        .status(200)
        .send(
          response_format.response2(
            200,
            true,
            "deleted data user successfully",
            deleted
          )
        );
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
}

module.exports = new UserController();
