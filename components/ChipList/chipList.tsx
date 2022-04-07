import React, { PropsWithChildren, ReactChildren } from "react";
import chipListStyles from "./chipList.module.css"

export default function ChipList({ children }: PropsWithChildren<any>) {
    return (
        <div className={chipListStyles.chipList}>
            {children}    
        </div>
    )
}