import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './History.css';

import { HistoryContext } from '../../contexts/HistoryProvider';

import HistoryItem from './HistoryItem/HistoryItem';

const History = () => {
	const { history } = useContext(HistoryContext);

	return (
		<div className="History">
			<main>
				<h1>Histórico de resultados</h1>

				<table>
					<thead>
						<tr>
							<th>A</th>
							<th>B</th>
							<th>C</th>
							<th>Resultado</th>
							<th>Data</th>
						</tr>
					</thead>

					<tbody>
						{history.map((item, index) => (
							<HistoryItem
								coefA={item.coefA}
								coefB={item.coefB}
								coefC={item.coefC}
								result={item.result}
								date={item.date}
								key={index}
							/>
						))}
					</tbody>

					<tfoot>
						<tr>
							<th scope="row">Total de cálculos</th>
							<td>{history?.length || 0}</td>
						</tr>
					</tfoot>
				</table>

				<p>
					<Link to="/">Go to home</Link>
				</p>
			</main>
		</div>
	);
};

export default History;
