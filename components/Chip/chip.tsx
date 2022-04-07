import React from "react";
import chipStyles from "./chip.module.css"

interface ChipOptions {
    value: string,
    selected: boolean,
    onSelected: () => void
}

export default function Chip({ value, selected, onSelected }: ChipOptions) {
    return (
        <button className={chipStyles.chip +" "+ (selected && chipStyles.selected)} onClick={onSelected}>
            {value}
        </button>
    )
}