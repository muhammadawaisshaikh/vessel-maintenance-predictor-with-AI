import axios from "axios";
import apiCall from "./api";

const axiosInstanceProperty = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_VESSEL_BASE_URL}`,
    timeout: 10000,
});

export const generatePredictionReport = (file: any) => {
    const headers = {
        // 'Content-Type': "multipart/form-data"
    };

    return apiCall<any>(axiosInstanceProperty, 'post', `/api/process_excel`, file, headers);
}


