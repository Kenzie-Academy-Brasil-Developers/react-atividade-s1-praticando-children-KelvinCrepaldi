import "./style.css";

const Card = ({ title }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="div-esquerda">
        <h2>Igredientes</h2>
        <ul>
          <li>300 g de macarrão para yakisoba</li>
          <li>1 cebola grande picada em pedaços médios</li>
          <li>1 colher (sopa) de óleo</li>
          <li>1/2 maço pequeno de brócolis</li>
          <li>1/2 maço pequeno de couve-flor</li>
          <li>250 ml de molho para yakissoba</li>
          <li>6 colheres (sopa) de molho shoyu</li>
          <li>400 g de tirinhas de carne (mignon, patinho ou alcatra)</li>
          <li>100 g de champignon</li>
          <li>1 cenoura cortada em diagonal</li>
          <li>4 folhas de acelga cortadas em diagonal</li>
        </ul>
      </div>
      <div className="div-direita">
        <h2>Preparo</h2>
        <ul>
          <li>Cozinhe o macarrão em água salgada e reserve.</li>
          <li>Em uma panela grande, coloque o óleo e refogue a cebola.</li>
          <li>
            Acrescente a carne, o brócolis, a couve-flor, a cenoura, a acelga, o
            champignon e tempere com shoyu.
          </li>
          <li>
            Despeje o molho para yakisoba e deixe cozinhar até os legumes
            ficarem cozidos em ponto al dente.
          </li>
          <li>Adicione o macarrão, misture bem e sirva logo a seguir.</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
