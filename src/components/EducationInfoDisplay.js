const EducationInfoDisplay = (props) => {
	const education = props.education;
	return (
		<div className="info-display">
			<h2>Education</h2>
			{education.map((edu) => {
				return (
					<div key={edu.id} id={edu.id} className="edu">
						<div className="edu-container">
							<p>School: {edu.school}</p>
							<p>Program: {edu.program}</p>
							<p>from: {edu.from}</p>
							<p>Until: {edu.to}</p>
						</div>
						<button className="edit-button" onClick={props.onEditEdu}>Edit</button>
						<button className="edit-button" onClick={props.onDeleteEdu}>Delete</button>
					</div>
				);
			})}
		</div>
	);
}

export default EducationInfoDisplay;