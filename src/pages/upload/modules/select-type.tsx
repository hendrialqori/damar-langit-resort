import React from "react";
import { motion } from "framer-motion";
import type { TypeSubMenu } from "../../../types"
import ModalFormType from "./modal-form-type";
import { useClickOutside } from "../../../hooks/use-clickoutside";
import { useGetTypeSubmenu } from "../../../services/typesubmenu-service";

interface Props {
    value: string;
    onChange: (value: TypeSubMenu) => void;
}

export default function SelectType({ value, onChange }: Props) {
    const ref = React.useRef<HTMLDivElement | null>(null)

    const [show, setShow] = React.useState(false)
    const [typeMenu, setTypeMenu] = React.useState<TypeSubMenu | null>(null)
    const [typeForm, setTypeForm] = React.useState<"CREATE" | "UPDATE" | null>(null)

    const typeSubmenu = useGetTypeSubmenu()

    function toggle() { setShow((prev) => !prev) }

    function selectType(value: TypeSubMenu) {
        return () => {
            onChange(value)
            setShow(false)
        }
    }

    function handleFormType(form: typeof typeForm, type?: TypeSubMenu) {
        return () => {
            setTypeMenu(type!)
            setTypeForm(form)
        }
    }

    function closeModal() {
        setTypeForm(null)
        setTypeMenu(null)
    }

    const label = value || "Pilih type"

    useClickOutside(ref, () => setShow(false))

    return (
        <React.Fragment>
            <div ref={ref} className="relative">
                <button className="form-select text-xs md:text-sm w-full text-left bg-gray-100 px-2 py-3 rounded-lg" onClick={toggle} type="button">
                    {label}
                </button>
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: show ? "auto" : 0 }}
                    className="absolute overflow-hidden w-full bg-white h-auto rounded-md translate-y-1">
                    {typeSubmenu.data?.data.map((type) => (
                        <div key={type.id} className="relative cursor-pointer">
                            <button
                                type="button"
                                className="text-left size-full p-3 bg-gray-100 hover:bg-gray-200"
                                onClick={selectType(type)}
                            >
                                {type.name}
                            </button>
                            <button
                                type="button"
                                className="right-0 absolute top-0 bottom-0 px-5 md:px-10 bg-gray-300 border-b"
                                onClick={handleFormType("UPDATE", { id: type.id, name: type.name },)}
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                    {typeSubmenu.data?.data.length! < 2 && (
                        <div className="relative cursor-pointer">
                            <button
                                type="button"
                                className="text-left size-full p-3 bg-gray-100 hover:bg-gray-200"
                                onClick={handleFormType("CREATE")}
                            >
                                Create new type
                            </button>
                        </div>
                    )}

                </motion.div>
            </div>
            <ModalFormType
                key={typeForm}
                isOpen={Boolean(typeForm)}
                typeForm={typeForm!}
                typeMenu={typeMenu as TypeSubMenu}
                onClose={closeModal}
            />
        </React.Fragment>
    )
}