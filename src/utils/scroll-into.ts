export const scrollInto = (target: string) => {
    const element = document.querySelector(target)
    if (!element) {
        throw new Error("Element not found")
    }
    element.scrollIntoView({ behavior: "smooth" })

}