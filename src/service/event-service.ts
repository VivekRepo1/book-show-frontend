import axios from "axios";

import { BASE_URL } from "../components/constants";

export class EventService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = `${BASE_URL}event`;
    }

    getAll(filters?: any) {
        const queryParams = new URLSearchParams(filters as Record<string, string>).toString();
        return axios
            .get(`${this.baseUrl}?${queryParams}`)
            .then((response) => response.data.data);
    }

    getOne(id: string) {
        return axios
            .get(`${this.baseUrl}/${id}`)
            .then((response) => response.data.data);
    }
};
