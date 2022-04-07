import React from "react";
import cardStyles from "./card.module.css"

interface CardOptions {
    description: string,
    link: string
}

export default function Card({ description, link  }: CardOptions) {
    return (
        <div className={cardStyles.card}>
            <p>{description}</p>
            <a target="_blank" href={link}>Project info</a>
        </div>
    )
}