import axios, { AxiosPromise } from "axios"
import { UpdateBookData } from "../interface/BookData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const putData = async (data: UpdateBookData): AxiosPromise<any> => {
    const response = await axios.put(`${API_URL}/books`, data)
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