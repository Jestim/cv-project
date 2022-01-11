const EducationInfoDisplay = (props) => {
	console.log('EducationInfoDisplay called');
	const education = props.education;
	return (
		<div className="info-display">
			<h2>Education</h2>
			{education.map((edu) => {
				return (
					<div key={edu.id} className="edu">
						<p>School: {edu.school}</p>
						<p>Program: {edu.program}</p>
						<p>from: {edu.from}</p>
						<p>to: {edu.to}</p>
					</div>
				);
			})}
		</div>
	);
}

export default EducationInfoDisplay;