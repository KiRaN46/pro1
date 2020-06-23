import React from 'react';
import data from './data.json';
import profileIcon from './man.svg';
import profileIcon1 from './woman.svg';

let Resume=(prop)=>{
	let info=data.profiles[prop.location.data.id]; 
	return(
		<div className="row justify-content-center">
	    {/* left part*/}
	    <div className="col-lg-3 m-2">
	    	<div className="card shadow">
	    		<div className="card-body p-2 text-center">
	    		{info.basics.gender==="male" ? <img src={profileIcon} alt="Profile icon" style={{width:"60px"}}/> : <img src={profileIcon1} alt="Profile icon" style={{width:"60px"}}/>}
	    		<h2>{info.basics.name}</h2>
	    		<h5 className="text-secondary" style={{fontStyle:"italic"}}> {info.basics.role}</h5> <hr/>
            	<a href={"mailto:"+info.basics.email}> {info.basics.email}</a> <br>
                        </br>
            	<a href={"tel:"+info.basics.mobile}> {info.basics.mobile}</a> <br />
            	<p>{info.basics.address}</p>
	    		</div>
	    	</div>
	    </div>
			{/* right part*/}
		<div className="col-lg-8 m-2">
			<div className="card shadow">
				<div className="card-body">
					<h3>Summary</h3><hr/>
					 <ul>
                            {info.summary.map((summaryValue,summaryIndex)=>(
                                <li key={summaryIndex}>{summaryValue}</li>
                            ))}
                       </ul>

                       <h3>Educational Qualifications</h3><hr/>
                       <div className="table-responsive">
                       <table className="table">
                       	<thead className="thead-dark">
                       		<tr>
                       			<th>Degree</th>
                       			<th>Institute</th>
                       			<th>Percentage</th>
                       		</tr>
                       	</thead>

                       	<tbody>
                       		{info.education.map((educationValue,educationIndex)=>(
                       			<tr key={educationIndex}>
                       				<td> {educationValue.degree}</td>
                       				<td> {educationValue.institute}</td>
                       				<td> {educationValue.percentage}</td>
                       			</tr>
                       			))}
                       		</tbody>
                       	</table>
                       </div>
				</div>
			</div>
		</div>
		</div>
	)
}
export default Resume;