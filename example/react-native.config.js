// Temporary location for assets during development phase
const location = '../src/assets/';
module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: [`${location}fonts/`, `${location}icons/`],
};
