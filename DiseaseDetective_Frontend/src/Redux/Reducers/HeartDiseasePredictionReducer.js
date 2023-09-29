const initialState = {
  sex: "",
  age: "",
  smooker: "",
  nbCigerette: "",
  diabetes: "",
  prevalentHyp: "",
  prevalentStroke: "",
  BPMeds: "",
  totChol: "",
  sysBP: "",
  BMI: "",
  heartRate: "",
  glucose: "",
};
const HeartDiseasePredictionReducer = (
  state = initialState,
  { type, key, valeur }
) => {
  let dict = initialState;

  switch (type) {
    case "UPDATE_DATA":
      dict[key] = valeur;

      return {
        data: dict,
      };
    case "CLEAR_DATA":

      return {
        data: {
          sex: "",
          age: "",
          smooker: "",
          nbCigerette: "",
          diabetes: "",
          prevalentHyp: "",
          prevalentStroke: "",
          BPMeds: "",
          totChol: "",
          sysBP: "",
          BMI: "",
          heartRate: "",
          glucose: "",
        }
      };

    default:
      return {data: state};
  }
};
export default HeartDiseasePredictionReducer;
