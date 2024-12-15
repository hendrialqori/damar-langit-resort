import { toast } from "sonner";
import Portal from "../../../components/portal";
import { useDeleteImage } from "../../../services/menu-service";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
    isOpen: boolean;
    id: string | null;
    onClose: () => void;
}

export default function ModalDeleteImage({ id, isOpen, onClose }: Props) {
    const queryClient = useQueryClient()

    const imageDelete = useDeleteImage()

    function deleteAction() {
        imageDelete.mutate({ id: String(id) }, {
            onSuccess: () => {
                toast.success("Delete image success")
                queryClient.invalidateQueries({ queryKey: ["IMAGES"] })
                onClose()
            },
            onError: () => {
                toast.error("Delete image fail")
            }
        })
    }

    return (
        <Portal isOpen={isOpen} onClose={onClose}>
            <div className="text-xs md:text-sm rounded-lg p-5 bg-white font-medium flex flex-col justify-center items-center gap-4">
                <p className="">Yakin ingin menghapus gambar ?</p>
                <button className="bg-red-500 rounded-md text-white py-2 px-5" onClick={deleteAction} disabled={imageDelete.isPending}>
                    {imageDelete.isPending ? "Mengapus ..." : "Hapus"}
                </button>
            </div>
        </Portal>
    )
}