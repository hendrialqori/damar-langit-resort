import { toast } from "sonner";
import Portal from "../../../components/portal";
import { useQueryClient } from "@tanstack/react-query";
import { useDeletePromo } from "../../../services/promo-service";

interface Props {
    isOpen: boolean;
    id: string | null;
    onClose: () => void;
}

export default function ModalDeleteImage({ id, isOpen, onClose }: Props) {
    const queryClient = useQueryClient()

    const promoDelete = useDeletePromo()

    function deleteAction() {
        promoDelete.mutate({ id: String(id) }, {
            onSuccess: () => {
                toast.success("Delete map image success")
                queryClient.invalidateQueries({ queryKey: ["PROMO"] })
                onClose()
            },
            onError: () => {
                toast.error("Delete map image fail")
            }
        })
    }

    return (
        <Portal isOpen={isOpen} onClose={onClose}>
            <div className="text-xs md:text-sm rounded-lg p-5 bg-white font-medium flex flex-col justify-center items-center gap-4">
                <p>Yakin ingin menghapus gambar ?</p>
                <button
                    className="bg-red-500 rounded-md text-white py-2 px-5"
                    onClick={deleteAction} disabled={promoDelete.isPending}
                >
                    {promoDelete.isPending ? "Mengapus ..." : "Hapus"}
                </button>
            </div>
        </Portal>
    )
}