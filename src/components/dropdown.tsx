
'use client';
import { GENEROESTILO } from './utils';
import { useState } from 'react';

type Informacoes = {
    subtitulo: string,
    texto: string,
}
type Props = {
    titulo: string,
    listaDeInformacoes: Informacoes[],
    img?: string;
    genero: "boy" | "girl"
}

const EstiloCard = (genero: "boy" | "girl") => {
    const style = `rounded-lg shadow-md bg-white p-4 m-10 flex h-1/2 ${GENEROESTILO[genero]}`;
    return style;
};

export default function Card({
    titulo, 
    listaDeInformacoes,
    img,
    genero = "boy"


}: Props) {

    return (

        <div className= {EstiloCard(genero)}>
            <div className="w-2/3 pr-4" >
                <header className="text-2xl text-white font-semibold mb-4">{titulo}</header>
                <div>
                    Info:
                    {listaDeInformacoes.map((informacao, index) => (
                        <div key={index} className="text-gray-700 mb-2">
                            {informacao.subtitulo}: <br></br>
                             {informacao.texto}
                        </div>
                    ))}
                </div>
            </div>
            {img && (
                <div className="w-1/3">
                    <img src={img} alt="Imagem" className="rounded-lg" />
                </div>
            )}
            
        </div>
    )
}