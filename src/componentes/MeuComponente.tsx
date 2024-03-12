//Faça um componente que faça um retângulo da largura da tela 
// por 200px 

//crie uma variável com LET no js que contenha o valor "Meu Componente"

// Crie uma div no componente que dentro dela mostre um parágrafo <p> contendo o valor da variável
import './style.css';



function MeuComponente() {
    let nome = "Meu Componente";
    return(<div className="retangulo">
        <p> {nome} </p>
    </div>)
};

export default MeuComponente
