import type { TypeSubMenu, Success, Error } from "#/types";
import axios from "axios"
import { useQuery, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL

export function useGetTypeSubmenu() {
    const GET = async ({ signal }: { signal: AbortSignal }) => {
        const req = await axios.get(`/typesubmenu/list`, { signal })
        return req.data
    }

    return useQuery<Success<TypeSubMenu[]>, AxiosError<Error>>({
        queryKey: ["TYPESUBMENU"],
        queryFn: ({ signal }) => GET({ signal }),
        staleTime: 1 * (60 * 1000), // 1 minute,
        // throwOnError: true
    })
}

export function useAddTypeSubmenu() {
    type Payload = {
        name: string;
    }
    const POST = async (payload: Payload) => {
        const req = await axios.post("/typesubmenu/add", payload, { withCredentials: true })
        return req.data
    }

    return useMutation<Success<string>, AxiosError<Error>, Payload>({
        mutationKey: ["ADD/TYPESUBMENU"],
        mutationFn: POST
    })

}

export function useUpdateTypeSubmenu() {
    type Payload = {
        id: string;
        name: string;
    }

    const UPDATE = async (payload: Payload) => {
        const req = await axios.put(`/typesubmenu/update/${payload.id}`, { name: payload.name })
        return req.data
    }

    return useMutation<Success<string>, AxiosError<Error>, Payload>({
        mutationKey: ["UPDATE/TYPESUBMENU"],
        mutationFn: UPDATE
    })
}