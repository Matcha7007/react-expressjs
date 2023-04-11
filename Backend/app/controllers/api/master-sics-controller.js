const { sics, wip } = require("../../../db.js");
const response_format = require("../../helpers/response");

class MasterSICSController {

    GetAllSupplier = async (req, res) => {
        try {
            const response = await sics.v_supplier.findMany();
            
            return res.status(200).send(
                        response_format.response2( 200, true, "List Data Supplier", response)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    GetAllCustomer = async (req, res) => {
        try {
            const response = await sics.v_customer.findMany();

            return res.status(200).send(
                        response_format.response2( 200, true, "List Data Customer", response)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    GetAllBompDataType = async (req, res) => {
        const year = req.query.year ? req.query.year : '';
        const period = req.query.period ? req.query.period : '';
        const size = req.query.size ? req.query.size : '';
        const color = req.query.color ? req.query.color : '';
        const limit = req.query.limit ? Number(req.query.limit) : 20;
        const page = req.query.page ? Number(req.query.page) : 1;
        const skip = page == 1 ? 0 : (page*limit) - limit;

        try {
            const totalItem = await sics.mst_bompdatatype.count()
            const response = await sics.mst_bompdatatype.findMany({
                skip: skip,
                take: limit,
                where: {
                    year: { contains: year },
                    period: { contains: period },
                    size: { contains: size },
                    color: { contains: color }
                }
            });

            const newResp = {
                data:response,
                pageCount: response.length,
                itemCount: totalItem,
                pages: page,
            }

            return res.status(200).send(
                        response_format.paginationResponse( 200, true, "List Bomp Data Type", newResp)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    GetAllMaterialDataType = async (req, res) => {
        const limit = req.query.limit ? Number(req.query.limit) : 20;
        const page = req.query.page ? Number(req.query.page) : 1;
        const skip = page == 1 ? 0 : (page*limit) - limit;

        try {
            const totalItem = await sics.mst_materialdatatype.count()
            const response = await sics.mst_materialdatatype.findMany({
                skip: skip,
                take: limit,
            });

            const newResp = {
                data:response,
                pageCount: response.length,
                itemCount: totalItem,
                pages: page,
            }

            return res.status(200).send(
                        response_format.paginationResponse( 200, true, "List Material Data Type", newResp)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    GetAllSizeDataType = async (req, res) => {
        const cd = req.query.cd ? req.query.cd : '';
        const nm = req.query.nm ? req.query.nm : '';
        const limit = req.query.limit ? Number(req.query.limit) : 20;
        const page = req.query.page ? Number(req.query.page) : 1;
        const skip = page == 1 ? 0 : (page*limit) - limit;

        try {
            const totalItem = await sics.mst_sizedatatype.count()
            const response = await sics.mst_sizedatatype.findMany({
                skip: skip,
                take: limit,
                where: {
                    size_cd: { contains: cd },
                    size_nm: { contains: nm }
                }
            });

            const newResp = {
                data:response,
                pageCount: response.length,
                itemCount: totalItem,
                pages: page,
            }

            return res.status(200).send(
                        response_format.paginationResponse( 200, true, "List Size Data Type", newResp)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    GetAllDailyProductPlan = async (req, res) => {
        try {
            const response = await sics.$queryRaw`
                                        SELECT 
                                            a.wo_no,
                                            a.customer_cd,
                                            a.customer_name,
                                            a.project,
                                            a.type,
                                            a.item_c,
                                            a.item_nm,
                                            b.size_cd,
                                            b.size_nm,
                                            a.requested_due_date,
                                            a.set,
                                            a.length,
                                            a.total_length,
                                            a.cu_unit,
                                            a.cu_qty,
                                            a.wo_staff,
                                            a.wo_staff_name
                                        FROM v_so_wo a 
                                            INNER JOIN mst_sizedatatype b ON RIGHT(a.item_c, 6) = b.size_cd
                                        `;
            return res.status(200).send(
                        response_format.response2( 200, true, "List Data Daily Product Plan", response)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    GetAllProduct = async (req, res) => {
        try {
            const response = await sics.mst_ProductDataType.findMany();
            return res.status(200).send(
                        response_format.response2( 200, true, "List Product Data Type", response)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    GetAllSize = async (req, res) => {
        try {
          const response = await sics.size.findMany();
          return res
            .status(200)
            .send(response_format.response2(200, true, "list data size", response));
        } catch (error) {
          res.status(500).json({ msg: error.message });
        }
      };

}

module.exports = new MasterSICSController()