import React from 'react';
import './Table.css';

function Table({ headers = [], columns = [] }) {
  return (
    <table className="generic-table">
      <thead>
        <tr>
          {headers.length > 0 && headers.map((header) => <th>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {columns.length > 0 &&
          columns.map((col) => (
            <tr>
              {col.map((cell) => (
                <td>{cell}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
