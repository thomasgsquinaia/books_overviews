import axios, { AxiosPromise } from "axios"
import { BookData } from "../interface/BookData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const getData = async (): AxiosPromise<BookData[]> => {
    const response = await axios.get(`${API_URL}/books`)
    return response;
}

export function useBookData() {
    const query = useQuery({
        queryFn: getData,
        queryKey: ['book-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}