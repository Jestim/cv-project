const ExperienceInfoEdit = (props) => {
	const { company, title, task, from, to } = props.onExpChangeValues;
	
	return (
		<div id="experience-info-edit" className="info-section-add hidden">
			<h2 className="experience-info-edit-header">
				Experience
			</h2>
			<form className="add-info-form">
				<label className="form-label" htmlFor="company">
					Company name: 
					<input id="company" type="text" value={company} onChange={props.handleExperienceInfoChange}/>
				</label>
				<label className="form-label" htmlFor="title">
					Title: 
					<input id="title" type="text" value={title} onChange={props.handleExperienceInfoChange}/>
				</label>
				<label className="form-label" htmlFor="tasks">
					Main tasks: 
					<textarea id="task" type="text" value={task} onChange={props.handleExperienceInfoChange}/>
				</label>
				<label className="form-label" htmlFor="from-exp">
					Worked from:
					<input id="from-exp" type="date" value={from} onChange={props.handleExperienceInfoChange}/>
				</label>
				<label className="form-label" htmlFor="to-exp">
					Until:
					<input id="to-exp" type="date" value={to} onChange={props.handleExperienceInfoChange}/>
				</label>
				<button id="exp-submit-button" className='submit-button' onClick={props.onExpSubmit}>Add</button>
			</form>
		</div>
	);
}

export default ExperienceInfoEdit;