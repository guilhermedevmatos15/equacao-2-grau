import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// styles
import './Home.css';

// components
import HistoryPreview from '../../components/HistoryPreview/HistoryPreview';

// img
import ImgEquacao from '../../assets/img/equacao.png';

// utils
import solveEquation from '../../utils/solveEquation';

// contexts
import { HistoryContext } from '../../contexts/HistoryProvider';

const Home = () => {
	const { dispatch } = useContext(HistoryContext);

	const [coeficienteA, setCoeficienteA] = useState(1);
	const [coeficienteB, setCoeficienteB] = useState(1);
	const [coeficienteC, setCoeficienteC] = useState(1);

	const [result, setResult] = useState();

	function handleSubmit(e) {
		e.preventDefault();

		let r = solveEquation(coeficienteA, coeficienteB, coeficienteC);

		if (r === false) {
			r = 'Não é uma equação de 2° grau';
		} else if (r.length === 0) {
			r = 'Sem raizes reais!';
		} else if (r.length === 1) {
			r = 'x = ' + r[0];
		} else {
			r = `x = { ${r[0]} ; ${r[1]} }`;
		}

		setResult(r);

		const newDate = new Date();

		dispatch({
			type: 'ADD',
			payload: {
				coefA: coeficienteA,
				coefB: coeficienteB,
				coefC: coeficienteC,
				result: r,
				date: `${
					newDate.getDate() +
					'/' +
					(newDate.getMonth() + 1 < 10
						? '0' + (newDate.getMonth() + 1)
						: newDate.getMonth() + 1)
				} - ${newDate.getHours()}:${newDate.getMinutes()}`,
			},
		});
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

				<p className="cta">
					<Link to="/history">Go to history</Link>
				</p>
			</main>
		</div>
	);
};

export default Home;
