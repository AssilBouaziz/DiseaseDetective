const initialState = {
  data: [],
};
const searchReducer = (state = initialState, { type, data, searchTerm ,Speciality }) => {
  let list = [];

  switch (type) {
    case "SEARCH_PRODUCT":
      if (Speciality) {
        list = data.filter((el) => 
        el.speciality.toLowerCase().includes(Speciality.toLowerCase()) &&
        el.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      } else {
        list = data.filter((el) =>
        el.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      }
      
      return {
        data: list,
        searching: true,
      };
    case "SAME_CATEGORY_PRODUCT":
      if (searchTerm.toLowerCase()==="tous") {
        list =data ;
      } else {
        list = data.filter((el) =>
        el.speciality.toLowerCase().includes(searchTerm.toLowerCase())
      );
      }
      return {
        data: list,
      };
    default:
      return {
        data: list,
        searching: false,
      };
  }
};
export default searchReducer;
