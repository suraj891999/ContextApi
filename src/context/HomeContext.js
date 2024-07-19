import createDataContext from "./createDataContext";
import Archik from "../api/Archik";

const homePageReducer = (state, action) => {
  switch (action.type) {
    case "home_page":
        return {
        ...state,
        homepageData: action.payload.data,
        };
    case "moreoptions":
      return { ...state, moreOptions: action.payload };
    default:
      return state;
  }
};

const homeMoreOptions = (dispatch) => {
  return async () => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("mode", "moreoptions");
      const headers = {
        "Content-Type": "multipart/form-data;application/json",
      };
      const response = await Archik.post(
        "/login/index?msg=1",
        bodyFormData,
        headers
      );
      dispatch({
        type: "moreoptions",
        payload: response.data,
      });
    } catch (err) {
      // dispatch({ type: "add_error", payload: "Unable to Verify Otp" });
      console.error(err);
    }
  };
};

const landingPage = (dispatch) => {
  return async (page) => {
    try {
      const response = await Archik.get(
        "/v2/everything?q=Apple&apiKey=b59ad85dbade49acbdfb3b92c5b0fc99"
      );
      dispatch({
        type: "home_page",
        payload: { data: response.data},
      });
    } catch (err) {
      // dispatch({ type: "add_error", payload: "Unable to Verify Otp" });
      console.error(err);
    }
  };
};

export const { Context, Provider } = createDataContext(
  homePageReducer,
  { landingPage, homeMoreOptions},
  {
    homepageData: [],
  }
);
