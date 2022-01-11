const EducationInfoEdit = (props) => {
	return (
		<div className="info-edit">
			<h2 className="eduction-info-edit-header">
				Education
			</h2>
			<form className="edit-info-form">
				<label className="form-label" htmlFor="school">
					School name: 
					<input id="school" type="text" />
				</label>
				<label className="form-label" htmlFor="program">
					Program: 
					<input id="program" type="text" />
				</label>
				<label className="form-label" htmlFor="from-edu">
					Studied from:
					<input id="from-edu" type="date" />
				</label>
				<label className="form-label" htmlFor="to-edu">
					Until:
					<input id="to-edu" type="date" />
				</label>
				<button className='submit-button' type='submit'>Add</button>
			</form>
		</div>
	);
}

export default EducationInfoEdit;