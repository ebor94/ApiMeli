const host = "https://api.mercadolibre.com/";

const apiItems = {
  url: host,
  name: "items",
};
const apiCategory = {
  url: host,
  name: "categories",
};
const apiCurrency = {
  url: host,
  name: "currencies",
};
const apiSellers = {
  url: host,
  name: "users",
};

module.exports = { apiItems, apiCategory, apiCurrency, apiSellers };
