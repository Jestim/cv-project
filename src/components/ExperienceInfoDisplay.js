const ExperienceInfoDisplay = (props) => {
	const experience = props.experience;

	return (
		<div className="info-display">
			<h2>Experience</h2>
			{experience.map((exp) => {
				return (
					<div key={exp.id} id={exp.id} className="exp">
						<div className="exp-container">
							<p>Company name: {exp.company}</p>
							<p>Position title: {exp.title}</p>
							<p>Main tasks: {exp.tasks}</p>
							<p>Worked from: {exp.from}</p>
							<p>Until: {exp.to}</p>
						</div>
						<button id="exp-edit-button" className="edit-button" onClick={props.onEditExp}>Edit</button>
						<button id="exp-delete-button" className="delete-button" onClick={props.onDeleteExp}>Delete</button>
					</div>
				);
			})}
		</div>
	);
}

export default ExperienceInfoDisplay;