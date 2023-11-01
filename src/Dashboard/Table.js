import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        {/* <tr>
          <th>Label</th>
          <th>Value</th>
        </tr> */}
      </thead>
      <tbody>
        <tr>          
          <td>{data.label}</td>
          <td>{data.value}</td>
        </tr>        
      </tbody>
    </table>
  );
};

export default Table;
