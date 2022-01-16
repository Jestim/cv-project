const EducationInfoEdit = (props) => {
	const { school, program, from, to } = props.onChangeValues;

	return (
		<div id="education-info-edit" className="info-section-add hidden">
			<h2 className="eduction-info-edit-header">
				Education
			</h2>
			<form className="add-info-form">
				<label className="form-label" htmlFor="school">
					School name: 
					<input id="school" type="text" value={school} onChange={props.handleEducationInfoChange}/>
				</label>
				<label className="form-label" htmlFor="program">
					Program: 
					<input id="program" type="text" value={program} onChange={props.handleEducationInfoChange}/>
				</label>
				<label className="form-label" htmlFor="from-edu">
					Studied from:
					<input id="from-edu" type="date" value={from} onChange={props.handleEducationInfoChange}/>
				</label>
				<label className="form-label" htmlFor="to-edu">
					Until:
					<input id="to-edu" type="date" value={to} onChange={props.handleEducationInfoChange}/>
				</label>
				<button id="edu-submit-button" className='submit-button' onClick={props.onEduSubmit}>Add</button>
			</form>
		</div>
	);
}

export default EducationInfoEdit;