import { useForm } from "react-hook-form";
import Portal from "../../../components/portal";
import { TypeSubMenu } from "../../../types";
import { useAddTypeSubmenu, useUpdateTypeSubmenu } from "../../../services/typesubmenu-service";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
    isOpen: boolean;
    typeForm: "CREATE" | "UPDATE";
    typeMenu: TypeSubMenu;
    onClose: () => void;
}

const formLabel = {
    "CREATE": "Create new type menu",
    "UPDATE": "Update type menu"
}

export default function ModalFormtype({ isOpen, typeForm, typeMenu, onClose }: Props) {
    const queryClient = useQueryClient()

    const { register, handleSubmit: submit } = useForm<{ name: string }>({
        defaultValues: {
            name: typeMenu?.name || ""
        }
    })

    const updateTypeSubmenu = useUpdateTypeSubmenu()
    const createTypeSubmenu = useAddTypeSubmenu()

    const handleSubmit = submit((state) => {

        if (typeForm === "CREATE") {
            createTypeSubmenu.mutate({ name: state.name }, {
                onSuccess: () => {
                    toast.success("Success create Type")
                    queryClient.invalidateQueries({ queryKey: ["TYPESUBMENU"] })

                    setTimeout(onClose, 100)
                },
                onError: () => {
                    toast.error("Failed create type")
                }
            })
        } else {
            updateTypeSubmenu.mutate({ id: String(typeMenu.id), name: state.name }, {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ["TYPESUBMENU"] })
                    toast.success("Success update Type")

                    setTimeout(onClose, 100)

                },
                onError: () => {
                    toast.error("Failed update type")
                }
            })
        }
    })

    const isLoading = createTypeSubmenu.isPending || updateTypeSubmenu.isPending

    return (
        <Portal isOpen={isOpen} onClose={onClose}>
            <div className="text-xs md:text-sm rounded-lg p-5 bg-white font-medium flex flex-col justify-center items-center gap-4 w-full max-w-sm">
                <div className="space-y-5 w-full">
                    <h2 className="text-base">{formLabel[typeForm]}</h2>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name type</label>
                        <input
                            id="name"
                            type="text"
                            className="bg-gray-100 px-2 py-3 rounded-lg text-xs md:text-sm"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="flex items-center justify-end gap-6">
                        <button type="reset" className="underline" onClick={onClose}>
                            Cancel
                        </button>
                        <button onClick={handleSubmit} className="bg-[#185C99] rounded-md text-white py-2 px-5" disabled={isLoading}>
                            {isLoading ? "Loading..." : "  Simpan"}
                        </button>
                    </div>
                </div>

            </div>
        </Portal>
    )
}