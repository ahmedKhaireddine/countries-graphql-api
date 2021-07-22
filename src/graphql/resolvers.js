import Services from '../services/countries';

export default {
    Query: {
        countries: (parent, { paginate }) => Services.findAll(paginate),
        country: (parent, { id }) => Services.findById(id),
    },
};