import { useState } from 'react';

import './Home.css';

// components
import HistoryPreview from '../../components/HistoryPreview/HistoryPreview';

// img
import ImgEquacao from '../../assets/img/equacao.png';

// utils
import solveEquation from '../../utils/solveEquation';

const Home = () => {
	const [coeficienteA, setCoeficienteA] = useState(1);
	const [coeficienteB, setCoeficienteB] = useState(1);
	const [coeficienteC, setCoeficienteC] = useState(1);

	const [result, setResult] = useState();

	function handleSubmit(e) {
		e.preventDefault();

		const r = solveEquation(coeficienteA, coeficienteB, coeficienteC);

		if (r === false) {
			setResult('Não é uma equação de 2° grau');
		} else if (r.length === 0) {
			setResult('Sem raizes reais!');
		} else if (r.length === 1) {
			setResult('x = ' + r[0]);
		} else {
			setResult(`x = { ${r[0]} ; ${r[1]} }`);
		}
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
								onChange={(e) =>
									setCoeficienteA(Number(e.target.value))
								}
							/>
						</label>
						<label>
							<span>B</span>
							<input
								type="number"
								value={coeficienteB}
								onChange={(e) =>
									setCoeficienteB(Number(e.target.value))
								}
							/>
						</label>
						<label>
							<span>C</span>
							<input
								type="number"
								value={coeficienteC}
								onChange={(e) =>
									setCoeficienteC(Number(e.target.value))
								}
							/>
						</label>
					</div>

					<button className="btn">Calcular</button>

					<output className={result && result?.length && 'active'}>
						Resultado: {result || ''}
					</output>
				</form>

				<HistoryPreview />
			</main>
		</div>
	);
};

export default Home;
