import './HistoryItem.css';

const HistoryItem = ({ coefA, coefB, coefC, result, date }) => {
	return (
		<tr className="HistoryItem">
			<td>{coefA}</td>
			<td>{coefB}</td>
			<td>{coefC}</td>
			<td className="highlight">{result}</td>
			<td>{date}</td>
		</tr>
	);
};

export default HistoryItem;
