import { driversConstant as dc } from "./constants";
import axios from "axios";

export function driversActions(id) {
  return (dispatch) => {
    dispatch({
      type: dc.LOADING,
    });
    axios.defaults.baseURL = `https://randomuser.me`;
    const data = {
      method: "get",
      url: `/api/?results=30`,
    };

    return axios(data)
      .then((res) => {
        localStorage.setItem("DRIVER", JSON.stringify(res.data.results));
        dispatch({
          type: dc.SUCCESS,
          payload: res.data.results,
        });
      })
      .catch((error) => {
        return dispatch({
          type: dc.ERROR,
          payload: error,
        });
      });
  };
}
