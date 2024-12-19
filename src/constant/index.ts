export const MENU = ["RESTO", "ROOM", "ADVENTURE"] as const

export const SUBMENU = {
    "RESTO": ["DTP", "PAKIS", "DINING", "KEDAI"],
    "ROOM": ["CAMPING", "SUPERIOR", "GLAMPING", "VILLA KAYU", "GRAND DELUXE", "EXECUTIVE", "2B VILLA", "VILLA LUMBUNG"],
    "ADVENTURE": ["AUZORA WATERFALL", "DAMAR WATERFALL", "AMARA SPA", "SHOOT AND ADVENTURE"],
    undefined: []
}

export const TYPES = ["ARABIC", "NATIONAL"]

export const LOCATIONS = [
    "ADVENTURE AND RECREATION",
    "AUZORA WATERFALL",
    "CAMPING GROUND",
    "DAMAR WATERFALL",
    "DAMAR LANGIT DINING",
    "DTP",
    "HERRITAGE",
    "SWIMINGPOOL",
    "KEDAI",
    "PAKIS",
    "GLAMPING",
    "VILLA LUMBUNG",
    "VILLA KAYU",
    "PARKING",
    "PARKING 2",
    "KEDAKA",
    "FRONT OFFICE",
    "MEETING ROOM",
    "VILLA TENGAH",
    "VILLA 2BR"
]

export const COORDINATES = [
    {
        name: "HERRITAGE",
        x: 55,
        y: 380
    },
    {
        name: "AUZORA WATERFALL",
        x: 410,
        y: 84
    },
    {
        name: "ADVENTURE AND RECREATION",
        x: 350,
        y: 420
    },
    {
        name: "DAMAR WATERFALL",
        x: 510,
        y: 126
    },
    {
        name: "KEDAI",
        x: 433,
        y: 323
    },
    {
        name: "GLAMPING",
        x: 632,
        y: 326
    },
    {
        name: "VILLA KAYU",
        x: 752,
        y: 340
    },
    {
        name: "VILLA LUMBUNG",
        x: 330,
        y: 335
    },
    {
        name: "SWIMINGPOOL",
        x: 740,
        y: 480
    },
    {
        name: "CAMPING GROUND",
        x: 397,
        y: 263
    },
    {
        name: "DAMAR LANGIT DINING",
        x: 790,
        y: 421
    },
    {
        name: "PAKIS", // RAJA KOPI,
        x: 865,
        y: 455

    },
    {
        name: "DTP",
        x: 850,
        y: 515
    },
    {
        name: "PARKING 2",//second parking
        x: 325,
        y: 195
    },
    {
        name: "PARKING",
        x: 990,
        y: 550
    },
    {
        name: "KADAKA",
        x: 950,
        y: 520
    },
    {
        name: "FRONT OFFICE",
        x: 915,
        y: 500
    },
    {
        name: "VILLA 2BR",
        x: 723,
        y: 417
    },
    {
        name: "MEETING ROOM",
        x: 793,
        y: 527
    },
    {
        name: "VILLA TENGAH",
        x: 743,
        y: 565
    }
]
