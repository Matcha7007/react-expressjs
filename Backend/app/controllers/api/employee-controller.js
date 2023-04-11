const { wip } = require("../../../db.js");
const response_format = require("../../helpers/response");

class EmployeeController {
  GetAll = async (req, res) => {
    try {
      const response = await wip.wip_mst_employee.findMany();
      return res
        .status(200)
        .send(
          response_format.response2(200, true, "list data employee", response)
        );
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  GetById = async (req, res) => {
    const uuid = req.params.uuid;
    try {

      const response = await wip.wip_mst_employee.findMany({
        where: {
          uuid: uuid,
        }});

      return res
        .status(200)
        .send(response_format.response2(200, true, "single data employee", response));
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  Create = async (req, res) => {
    const { nsk, name, department_id, section_id, user_id } = req.body;
    try {

      let employeeCount = await wip.wip_mst_employee.count({
        where: {
          nsk: nsk,
        },
      });

      if (employeeCount > 0) {
        return res
          .status(409)
          .send(
            response_format.response2(
              409,
              false,
              "Employee NSK already exist",
              employeeCount
            )
          );
      }

      const employee = await wip.wip_mst_employee.create({
        data: {
          nsk: nsk,
          name: name,
          department_id: department_id,
          section_id: section_id,
          created_by: user_id,
        },
      });

      return res
        .status(201)
        .send(
          response_format.response2(
            200,
            true,
            "create data employee successfully",
            employee
          )
        );
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  Update = async (req, res) => {
    const { nsk, name, department_id, section_id, user_id } = req.body;
    const uuid = req.params.uuid;
    const date = new Date();
    try {
      const update = await wip.wip_mst_employee.updateMany({
        where: {
          uuid: uuid,
        },
        data: {
          nsk: nsk,
          name: name,
          department_id:department_id,
          section_id:section_id,
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
            "updated data employee successfully",
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

      const employeeCount = await wip.wip_mst_employee.count({
        where: {
          uuid: uuid,
        },
      });

      if(employeeCount > 0) {
        const deleted = await wip.wip_mst_employee.deleteMany({
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
              "deleted data employee successfully",
              deleted
            )
          );
      }
    } catch (error) {
      return res
          .status(404)
          .send(
            response_format.response2(
              404,
              false,
              "data employee not found",
              0
            )
          );
    }
  };
}

module.exports = new EmployeeController();
