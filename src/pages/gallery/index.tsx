import React from "react";
import SharedLayout from "../../components/shared-layout";
import { useGetImages } from "../../services/menu-service";
import { Query } from "../../types";
import { MdOutlineDelete } from "react-icons/md";
import ModalDeleteImage from "./modules/modal-delete-image";

const QUERY_STATE: Query = {
    menu: "",
    submenu: "",
    type: ""
}

export default function Gallery() {
    const [id, setId] = React.useState<string | null>(null)

    function setIdImage(id: string) {
        return () => setId(id)
    }

    function closeModal() {
        setId(null)
    }

    const gallery = useGetImages(QUERY_STATE)

    return (
        <SharedLayout>
            <div className="space-y-5">
                <h1 className="font-semibold text-base md:text-xl">Gallery</h1>
                <div className="overflow-auto w-full" aria-label="table-container">
                    <div role="table" className="text-[0.5rem] md:text-sm font-medium">
                        <div className="grid grid-cols-5 bg-[#185C99] text-white" role="row">
                            <div className="px-2 py-3">
                                <span>Image</span>
                            </div>
                            <div className="px-2 py-3">
                                <span>Menu</span>
                            </div>
                            <div className="px-2 py-3">
                                <span>Submenu</span>
                            </div>
                            <div className="px-2 py-3">
                                <span>Type</span>
                            </div>
                            <div className="px-2 py-3">
                                <span>Action</span>
                            </div>
                        </div>
                        {gallery.data?.data.map((image, i) => (
                            <div key={i} className="grid grid-cols-5 justify-items-start border-b border-gray-200" role="row">
                                <div className="px-2 py-3">
                                    <img src={image.cloudUrl} className="size-10 md:size-16 object-cover rounded-md" alt="image" loading="lazy" />
                                </div>
                                <div className="px-2 py-3 grid place-items-center">
                                    <span>{image.menu}</span>
                                </div>
                                <div className="px-2 py-3 grid place-items-center">
                                    <span>{image.submenu}</span>
                                </div>
                                <div className="px-2 py-3 grid place-items-center">
                                    <span>{image.type}</span>
                                </div>
                                <button className="flex items-center text-red-500" onClick={setIdImage(image.id.toString())}>
                                    <MdOutlineDelete className="!text-xl" />
                                    <span>Hapus</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ModalDeleteImage isOpen={Boolean(id)} id={id} onClose={closeModal} />
        </SharedLayout>
    )
}
