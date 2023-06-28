import React, { useContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "./actions";
import reducer from "./reducer";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initialState = {
  showAlert: false,
  isLoading: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token || null,
  showSidebar: false,
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { t } = useTranslation();
  const authFetch = axios.create({ baseURL: "/api/v1" });
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  authFetch.interceptors.response.use(
    (resonse) => {
      return resonse;
    },
    (error) => {
      if (error.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );
  const displayAlert = (alertText) => {
    dispatch({ type: DISPLAY_ALERT, payload: { alertText: alertText } });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const setupUser = ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    axios
      .post(`/api/v1/auth/${endPoint}`, currentUser)
      .then(({ data }) => {
        const { user, token } = data;
        dispatch({
          type: SETUP_USER_SUCCESS,
          payload: { user, token, alertText },
        });
        addUserToLocalStorage({ user, token });
      })
      .catch((error) => {
        dispatch({
          type: SETUP_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      });
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);
      const { user, token } = data;
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token, alertText: t("modify.success") },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { alertText: t("modify.failed") },
        });
      }
    }
    clearAlert();
  };

  const createNote = async (title) => {
    const res = await axios.post("/api/v1/notes/createNote", { title });

    console.log(res);
  };

  const getNote = async () => {
    console.log("Fetching notes...");
    try {
      const res = await axios.get("/api/v1/notes/getNote");
      const allNotes = res.data;
      console.log(allNotes);
      return allNotes;
    } catch (error) {
      console.error(error);
    }
  };
  const deleteNote = async (noteId) => {
    try {
      await axios.delete(`/api/v1/notes/deleteNote/${noteId}`);
    } catch (error) {
      console.error(error);
    }
  };
  const updateNote = async (noteId, isCompleted) => {
    try {
      await axios.patch(`/api/v1/notes/updateNote/${noteId}`, { isCompleted });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        logoutUser,
        updateUser,
        createNote,
        getNote,
        deleteNote,
        updateNote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
