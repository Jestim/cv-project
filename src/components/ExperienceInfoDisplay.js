const ExperienceInfoDisplay = (props) => {
	const experience = props.experience;

	return (
		<div className="info-display">
			<h2>Experience</h2>
			{experience.map((exp) => {
				return (
					<div key={exp.id} className="exp">
						<p>Company name: {exp.company}</p>
						<p>Position title: {exp.title}</p>
						<p>Main tasks: {exp.tasks}</p>
						<p>Worked from: {exp.from}</p>
						<p>Until: {exp.to}</p>
					</div>
				);
			})}
		</div>
	);
}

export default ExperienceInfoDisplay;