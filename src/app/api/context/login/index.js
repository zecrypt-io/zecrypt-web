import axiosInstance from "../../axiosInstance";
import { USER_LOGIN } from "../../constants";

// Function to create/update enquiry 
export const userLogin = (props) => onResponse => {

    try {
        axiosInstance.post(USER_LOGIN, props)
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