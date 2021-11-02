import { driversConstant as dc } from "./constants";

const initialState = {
  data: [],
  isLoading: true,
};

const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case dc.SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }
    case dc.LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case dc.ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
};

export default driverReducer;
