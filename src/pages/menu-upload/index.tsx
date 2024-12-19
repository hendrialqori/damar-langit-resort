
import { useForm } from "react-hook-form"
import { CgSpinner } from "react-icons/cg";

import { toast } from "sonner"
import { useQueryClient } from "@tanstack/react-query";


import { TypeSubMenu } from "#/types";
import { MENU, SUBMENU } from "#/constant";
import { useUploadImage } from "#/services/menu-service";
import SharedLayout from "#/components/shared-layout";
import SelectType from "./modules/select-type";


type Form = {
    gambar: FileList;
    menu: string;
    submenu: string;
    type: TypeSubMenu;
}

export default function MenuUpload() {
    const queryClient = useQueryClient()

    const { register, handleSubmit: submit, setValue, reset, watch } = useForm<Form>()

    const submenuImage = SUBMENU[watch("menu") as typeof MENU[number]] ?? []

    const typeSubmenu = watch("type")
    function handleChangeTypeSubmenu(value: TypeSubMenu) {
        setValue("type", value)
    }

    const upload = useUploadImage()

    const handleSubmit = submit((state) => {
        const formData = new FormData()
        formData.append("image", state.gambar?.[0] as File)
        formData.append("menu", state.menu)
        formData.append("submenu", state.submenu)
        formData.append("typeSubMenuId", state.type.id.toString())

        upload.mutate({ formData }, {
            onSuccess: () => {
                toast.success("SUCCESS UPLOAD", {
                    description: "Upload image success"
                })

                reset()
                queryClient.invalidateQueries({ queryKey: ["IMAGES"] })
            },
            onError: (err) => {
                const errorMessage = err.response?.data.message ?? "Upload image fail"
                toast.error("ERROR UPLOAD", {
                    description: errorMessage
                })
            }
        })
    })

    return (
        <SharedLayout>
            <div className="space-y-5">
                <h1 className="font-semibold text-sm md:text-xl">Upload Content</h1>
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
                        <label htmlFor="menu">Menu*</label>
                        <select id="menu" className="text-xs md:text-sm bg-gray-100 px-2 py-3 rounded-lg"  {...register("menu", { required: true })}>
                            <option value="">Pilih Menu</option>
                            {MENU.map((menu, i) => (
                                <option key={i} value={menu}>{menu}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="submenu">Sub menu*</label>
                        <select id="submenu" className="text-xs md:text-sm bg-gray-100 px-2 py-3 rounded-lg" {...register("submenu", { required: true })}>
                            <option value="">Pilih Submenu</option>
                            {submenuImage?.map((sub, i) => (
                                <option key={i} value={sub}>{sub}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="type">Type*</label>
                        <SelectType
                            value={typeSubmenu?.name || ""}
                            onChange={handleChangeTypeSubmenu}
                        />
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