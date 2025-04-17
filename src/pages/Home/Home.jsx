import { useState } from 'react';

import './Home.css';

// components
import HistoryPreview from '../../components/HistoryPreview/HistoryPreview';

// img
import ImgEquacao from '../../assets/img/equacao.png';

const Home = () => {
	const [coeficienteA, setCoeficienteA] = useState(1);
	const [coeficienteB, setCoeficienteB] = useState(1);
	const [coeficienteC, setCoeficienteC] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div className="Home">
			<main>
				<h1>Calculadora de Equação do 2° grau</h1>

				<img src={ImgEquacao} alt="Equação estrutura" />

				<p>Informe os coeficientes:</p>

				<form onSubmit={handleSubmit}>
					<div>
						<label>
							<span>A</span>
							<input
								type="number"
								required
								value={coeficienteA}
								onChange={(e) => setCoeficienteA(e.target.value)}
							/>
						</label>
						<label>
							<span>B</span>
							<input
								type="number"
								value={coeficienteB}
								onChange={(e) => setCoeficienteB(e.target.value)}
							/>
						</label>
						<label>
							<span>C</span>
							<input
								type="number"
								value={coeficienteC}
								onChange={(e) => setCoeficienteC(e.target.value)}
							/>
						</label>
					</div>

					<button className='btn'>Calcular</button>
				</form>

				<HistoryPreview />
			</main>
		</div>
	);
};

export default Home;
