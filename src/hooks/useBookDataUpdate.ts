import axios, { AxiosPromise } from "axios"
import { BookData } from "../interface/BookData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const putData = async (data: BookData): AxiosPromise<any> => {
    const response = axios.put(`${API_URL}/books`, data)
    console.log(response);
    return response;
}

export function useBookDataUpdate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: putData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['book-data']}) 
        }
    })

    return mutate
}