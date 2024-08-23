import React from "react";
import catsExplanation from "@/app/utils/cats-explanation-texts";

export default function Page({params} : {params: {id: string}}) {
    const id = params.id;
    const kitties = catsExplanation.filter(k => k.level === Number(id))[0];

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: kitties.content }}></div>
        </div>
    )
}