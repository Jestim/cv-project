const ExperienceInfoEdit = (props) => {
	return (
		<div className="info-edit">
			<h2 className="experience-info-edit-header">
				Experience
			</h2>
			<form className="edit-info-form">
				<label className="form-label" htmlFor="company">
					Company name: 
					<input id="company" type="text" />
				</label>
				<label className="form-label" htmlFor="title">
					Title: 
					<input id="title" type="text" />
				</label>
				<label className="form-label" htmlFor="tasks">
					Main tasks: 
					<textarea id="tasks" type="text" />
				</label>
				<label className="form-label" htmlFor="from-exp">
					Worked from:
					<input id="from-exp" type="date" />
				</label>
				<label className="form-label" htmlFor="to-exp">
					Until:
					<input id="to-exp" type="date" />
				</label>
				<button className='submit-button' onClick={props.onExpSubmit}>Add</button>
			</form>
		</div>
	);
}

export default ExperienceInfoEdit;