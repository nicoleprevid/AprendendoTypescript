import Card from "@/components/dropdown";
export default function Home() {
    return (
        <div className="flex bg-grey-600 w-screen h-screen pt-8 m-0">
            <Card
                titulo="Sobre os Meninos"
                listaDeInformacoes={[
                    { subtitulo: 'Hobbies', texto: 'Futebol, videogames e robótica.' },
                    { subtitulo: 'Educação', texto: 'Estudam em uma escola local.' },
                    { subtitulo: 'Idade', texto: 'Entre 10 e 12 anos.' },
                ]}
                genero="boy"
            />
            <Card
                titulo="Sobre as Meninas"
                listaDeInformacoes={[
                    { subtitulo: 'Hobbies', texto: 'Dança, pintura e leitura.' },
                    { subtitulo: 'Educação', texto: 'Estudam em uma escola local.' },
                    { subtitulo: 'Idade', texto: 'Entre 10 e 12 anos.' },
                ]}
                img='https://images.vexels.com/media/users/3/289454/isolated/preview/80dbd0ffd85c163dd3b4602b1276e0a6-flor-rosa-e-roxa.png'
                genero="girl"
            />
        </div>
    );
}

