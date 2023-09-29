const SetUser = (data) => {
  return {
    type: "SET_USER",
    data: data,
  };
};
const updateData = (key, valeur) => {
  return {
    type: "UPDATE_DATA",
    key: key,
    valeur: valeur,
  };
};
const clearData = () => {
  return {
    type: "CLEAR_DATA",
  };
};
const SameCategoryProduct = (data, event) => {
  return {
    type: "SAME_CATEGORY_PRODUCT",
    data: data,
    searchTerm: event,
  };
};
const searchProduct = (data, search, speciality) => {
  return {
    type: "SEARCH_PRODUCT",
    data: data,
    searchTerm: search,
    Speciality :speciality,
  };
};
export { SetUser, updateData, clearData, SameCategoryProduct, searchProduct };
