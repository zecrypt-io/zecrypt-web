import axiosInstance from "../../axiosInstance";
import { DELETE_LABEL, GET_OR_CREATE_LABEL } from "../../constants";

export const getLabelList = (props) => onResponse => {
    try {
        let BASE_URL = GET_OR_CREATE_LABEL + "?";

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


export const createLabel = (props) => onResponse => {
    const label_id = props.label_id
    let URL = axiosInstance.post(`${GET_OR_CREATE_LABEL}`, props)
    if (label_id) {

        URL = axiosInstance.patch(`${GET_OR_CREATE_LABEL}/${label_id}`, { name: props?.name, label_id: label_id })
    }
    try {
        URL
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

export const deleteLabel = (props) => onResponse => {
    try {
        axiosInstance.delete(DELETE_LABEL, props)
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