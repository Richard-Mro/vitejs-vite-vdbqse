import { range } from './utils';

function Grid({ numRows, numCols }) {
  const rowIndices = range(numRows);
  const colIndices = range(numCols);

  return (
    <div className="grid">
      {rowIndices.map((rowIndex) => (
        <>
        <div key={`row-${rowIndex}`} className="row">
          {colIndices.map((colIndex) => (
            <div key={`cell-${rowIndex}-${colIndex}`} className="cell"></div>
          ))}
        </div>
        </>
      ))}
    </div>
  );
}

export default Grid;
