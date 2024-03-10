import axios, { AxiosPromise } from "axios"
// import { DeleteBookData } from "../interface/BookData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const deleteData = async (bookId: number): AxiosPromise<any> => {
    const response = await axios.delete(`${API_URL}/books/${bookId}`)
    return response;
}

export function useBookDataDelete() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['book-data']}) 
        }
    })

    return mutate
}