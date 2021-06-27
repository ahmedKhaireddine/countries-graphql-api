import Country from '../db/models/Country';

const findById = (id) => Country.query().findById(id);

const findAll = () => Country.query();

export default { findAll, findById }