import Services from '../services/countries';

export default {
    Query: {
        countries: (parent) => Services.findAll(),
        country: (parent, { id }) => Services.findById(id),
    },
};