import type { Promo, Success, Error } from "../types";
import axios from "axios"
import { useQuery, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL

export function useGetPromos() {
    const GET = async ({ signal }: { signal: AbortSignal }) => {
        const req = await axios.get(`/promo/list`, { signal })
        return req.data
    }

    return useQuery<Success<Promo[]>, AxiosError<Error>>({
        queryKey: ["PROMO", location],
        queryFn: ({ signal }) => GET({ signal }),
        staleTime: 1 * (60 * 1000), // 1 minute,
        throwOnError: true
    })
}


export function useUploadPromo() {
    type Params = {
        formData: FormData;
    }

    const POST = async ({ formData }: Params) => {
        const req = await axios.post("/promo/add", formData, { withCredentials: true })
        return req.data
    }

    return useMutation<Success<string>, AxiosError<Error>, Params>({
        mutationKey: ["UPLOAD/PROMO/IMAGE"],
        mutationFn: POST
    })

}

export function useDeletePromo() {
    type Payload = {
        id: string;
    }

    const DELETE = async ({ id }: Payload) => {
        const req = await axios.delete(`/promo/remove/${id}`)
        return req.data
    }

    return useMutation<Success<string>, AxiosError<Error>, Payload>({
        mutationKey: ["DELETE/PROMO/IMAGE"],
        mutationFn: DELETE
    })
}