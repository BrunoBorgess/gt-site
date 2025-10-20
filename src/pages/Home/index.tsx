
import backgroundTech from "../../assets/fundo.jpeg"; // Imagem azul com pontilhados
import logo from "../../assets/ghost-logo.png"; // Imagem do logo ghost

function Home() {
    return (
    <div 
      className="w-full min-h-screen text-white overflow-hidden relative font-thin"
      style={{
        backgroundImage: `url(${backgroundTech})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
        <div className="flex flex-col items-center justify-center min-h-screen  p-4">
            <img src={logo} alt="Ghost Logo" className="w-48 h-48 mb-8 bg-transparent" />
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-center">Bem vindo á Ghost Tech</h1>
            <p className="text-lg md:text-2xl text-center max-w-2xl">
                Amante de técnologia que precisa de componentes para montar seu setup com preço justo? Nós temos os produtos e as soluções que você precisa.
            </p>
        </div>

    </div>
    )
}

export default Home;