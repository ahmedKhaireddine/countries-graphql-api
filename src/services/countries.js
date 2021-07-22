import Country from '../db/models/Country';

const paginateModifier = ({ offset, limit, queryBuilder }) => {
  if (offset === undefined && limit === undefined) return;
  queryBuilder.offset(offset).limit(limit);
};

const findById = (id) => Country.query().findById(id);

const findAll = ({ offset, limit } = {}) =>
  Country.query().modify((queryBuilder) =>
    paginateModifier({ offset, limit, queryBuilder })
  );

export default { findAll, findById }