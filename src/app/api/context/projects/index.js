import axiosInstance from "../../axiosInstance";
import { CREATE_PROJECT, GET_PROJECT_LIST } from "../../constants";

export const getProjectList = (props) => onResponse => {
    try {
        let BASE_URL = GET_PROJECT_LIST + "?";

        if (props?.page) {
            BASE_URL = BASE_URL + `page=${props.page}&`
        }
        if (props?.filter?.search) {
            BASE_URL += `search=${props.filter?.search}&`
        }
        if (props?.limit) {
            BASE_URL += `limit=${props?.limit}&`
        }

        axiosInstance.get(BASE_URL)
            .then((response) => {
                onResponse(response.data);
            })
            .catch((err) => {
                console.log(err)
                onResponse(err);
            });

    } catch (error) {

    }
}


export const createProject = (props) => onResponse => {

    try {
        axiosInstance.post(CREATE_PROJECT, props)
            .then((response) => {
                onResponse(response.data);
            })
            .catch((err) => {
                console.log(err)
                onResponse(err);
            });

    } catch (error) {

    }
}