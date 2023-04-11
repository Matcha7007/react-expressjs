
const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (page, limit, data, order = []) => {

    const  totalItems = data.count;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { currentPage , totalPages , totalItems, data};
};



module.exports = {
    getPagination,
    getPagingData
}

