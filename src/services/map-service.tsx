import type { Map as TMap, Success, Error } from "#/types";
import axios from "axios"
import { useQuery, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL

export function useGetMapImageAdmin() {
    const GET = async ({ signal }: { signal: AbortSignal }) => {
        const req = await axios.get(`/map/list`, { signal })
        return req.data
    }

    return useQuery<Success<TMap[]>, AxiosError<Error>>({
        queryKey: ["MAP", location],
        queryFn: ({ signal }) => GET({ signal }),
        staleTime: 1 * (60 * 1000), // 1 minute,
        throwOnError: true
    })
}


export function useGetMapImage(location: string) {

    const queryParams = new URLSearchParams();
    queryParams.append("location", location)

    const GET = async ({ signal }: { signal: AbortSignal }) => {
        const req = await axios.get(`/map/list?${queryParams.toString()}`, { signal })
        return req.data
    }

    return useQuery<Success<TMap[]>, AxiosError<Error>>({
        queryKey: ["MAP", location],
        queryFn: ({ signal }) => GET({ signal }),
        staleTime: 1 * (60 * 1000), // 1 minute,
        throwOnError: true,
        enabled: Boolean(location) 
    })
}


export function useUploadMapmage() {
    type Params = {
        formData: FormData;
    }

    const POST = async ({ formData }: Params) => {
        const req = await axios.post("/map/add", formData, { withCredentials: true })
        return req.data
    }

    return useMutation<Success<string>, AxiosError<Error>, Params>({
        mutationKey: ["UPLOAD/MAP/IMAGE"],
        mutationFn: POST
    })

}

export function useDeleteMapImage() {
    type Payload = {
        id: string;
    }

    const DELETE = async ({ id }: Payload) => {
        const req = await axios.delete(`/map/remove/${id}`)
        return req.data
    }

    return useMutation<Success<string>, AxiosError<Error>, Payload>({
        mutationKey: ["DELETE/MAP/IMAGE"],
        mutationFn: DELETE
    })
}