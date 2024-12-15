import type { Image, Query, Success, Error } from "../types";
import axios from "axios"
import { useQuery, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";


axios.defaults.baseURL = import.meta.env.VITE_API_URL

export function useGetImages(query: Query) {

    const queryParams = new URLSearchParams();
    queryParams.append("name", query.menu)
    queryParams.append("submenu", query.submenu)
    queryParams.append("type", query.type)

    const GET = async ({ signal }: { signal: AbortSignal }) => {
        const req = await axios.get(`/image/list?${queryParams.toString()}`, { signal })
        return req.data
    }

    return useQuery<Success<Image[]>, AxiosError<Error>>({
        queryKey: ["IMAGES", query],
        queryFn: ({ signal }) => GET({ signal }),
        staleTime: 1 * (60 * 1000), // 1 minute,
        throwOnError: true
    })
}

export function useUploadImage() {
    type Params = {
        formData: FormData;
    }

    const POST = async ({ formData }: Params) => {
        const req = await axios.post("/image/add", formData, { withCredentials: true })
        return req.data
    }

    return useMutation<Success<string>, AxiosError<Error>, Params>({
        mutationKey: ["UPLOAD/IMAGE"],
        mutationFn: POST
    })

}

export function useDeleteImage() {
    type Payload = {
        id: string;
    }

    const DELETE = async ({ id }: Payload) => {
        const req = await axios.delete(`/image/remove/${id}`)
        return req.data
    }

    return useMutation<Success<string>, AxiosError<Error>, Payload>({
        mutationKey: ["DELETE/IMAGE"],
        mutationFn: DELETE
    })
}