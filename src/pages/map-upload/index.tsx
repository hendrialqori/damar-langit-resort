import SharedLayout from "../../components/shared-layout";
import { useForm } from "react-hook-form"
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner"
import { useQueryClient } from "@tanstack/react-query";
import { LOCATIONS } from "../../constant";
import { useUploadMapmage } from "../../services/map-service";

type Form = {
    gambar: FileList;
    location: string;
}

export default function MapUpload() {
    const queryClient = useQueryClient()

    const { register, handleSubmit: submit, reset } = useForm<Form>()

    const upload = useUploadMapmage()

    const handleSubmit = submit((state) => {
        const formData = new FormData()
        formData.append("image", state.gambar?.[0] as File)
        formData.append("location", state.location)

        upload.mutate({ formData }, {
            onSuccess: () => {
                toast.success("SUCCESS UPLOAD", {
                    description: "Upload map image succees"
                })

                reset()
                queryClient.invalidateQueries({ queryKey: ["MAP"] })
            },
            onError: (err) => {
                const errorMessage = err.response?.data.message ?? "Upload map image fail"
                toast.error("ERROR UPLOAD", {
                    description: errorMessage
                })
            }
        })
    })

    return (
        <SharedLayout>
            <div className="space-y-5">
                <h1 className="font-semibold text-sm md:text-xl">Upload map image</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-medium text-xs md:text-sm">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="image">Gambar</label>
                        <input
                            type="file" id="image"
                            className="bg-gray-100 px-2 py-3 rounded-lg"
                            accept="image/*"
                            {...register("gambar", { required: true })}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="menu">Lokasi*</label>
                        <select id="menu" className="text-xs md:text-sm bg-gray-100 px-2 py-3 rounded-lg"  {...register("location", { required: true })}>
                            <option value="">Pilih lokasi</option>
                            {LOCATIONS.map((location, i) => (
                                <option key={i} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="rounded-lg py-3 bg-[#185C99] text-white"
                        disabled={upload.isPending}
                    >
                        {upload.isPending ? (
                            <div className="flex items-center justify-center gap-2">
                                <CgSpinner className="text-xl animate-spin" />
                                <span>Loading...</span>
                            </div>
                        ) : (
                            <span>Simpan</span>
                        )}
                    </button>
                </form>
            </div>
        </SharedLayout>
    )
}