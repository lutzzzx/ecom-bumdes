import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const uploadImg = async (data) => {
    const response = await axios.put(`${base_url}upload/`, data, config);
    return response.data;
};

const deleteImg = async (id) => {
    const response = await axios.delete(`${base_url}upload/delete-img/${id}`, config);
    return response.data;
};

const uploadService = {
    uploadImg,
    deleteImg,
};

export default uploadService;