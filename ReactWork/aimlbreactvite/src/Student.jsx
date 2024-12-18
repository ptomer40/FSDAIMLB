import React from 'react'
import './studentstyle.css';
function Student({data}) {
  return (
    <div className='icard'>

        {/* {
            JSON.stringify(data)
        } */}
<table>
<tbody>
<tr><td colSpan={2}>{data.college}</td></tr>
<tr><td colSpan={2}><img src={data.pic} height={100} width={100} alt='student pic' /></td></tr>
<tr><td>Roll:</td><td>{data.roll}</td></tr>
<tr><td>Name:</td><td>{data.name}</td></tr>
<tr><td>Branch:</td><td>{data.branch}</td></tr>
<tr><td>Section:</td><d>{data.section}</d></tr>
</tbody>

</table>

    </div>
  )
}

// Student.defaultProps={
//     college:"AKG Engineering College"  
// }

export default Student