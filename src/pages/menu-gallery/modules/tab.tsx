import { useSearchParams } from "react-router-dom"
import { clsx as cn } from "clsx"
import { MENU } from "#/constant"

export default function Tab() {

    const [params, setParams] = useSearchParams()

    const tabValue = params.get("tab") ?? "RESTO"

    function handleMoveTab(value: typeof MENU[number]) {
        return () => setParams((prev) => {
            prev.set("tab", value)
            return prev
        })
    }

    return (
        <div className="grid grid-cols-3 border max-w-[320px] rounded-md overflow-hidden">
            {MENU.map((menu, i) => (
                <button
                    key={i}
                    className={cn(
                        "py-2 text-[0.65rem] md:text-sm font-medium",
                        tabValue === menu ? "font-medium bg-[#185C99] text-white" : "bg-gray-200 text-black"
                    )}
                    onClick={handleMoveTab(menu)}
                >
                    {menu}
                </button>
            ))}
        </div>
    )
}