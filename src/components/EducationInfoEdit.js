import react from "react";

class EducationInfoEdit extends react.Component {
	render () {
		return (
			<div className="education-info-edit">
				<h2 className="eduction-info-edit-header">
					Education
				</h2>
				<form className="education-info-form">
					<label htmlFor="school">
						School name: 
						<input id="school" type="text" />
					</label>
					<label htmlFor="program">
						Program: 
						<input id="program" type="text" />
					</label>
					<label htmlFor="from-edu">
						Studied from:
						<input id="from-edu" type="text" />
					</label>
					<label htmlFor="to-edu">
						Until:
						<input id="to-edu" type="text" />
					</label>
					<button className='submit-button' type='submit'>Update</button>
				</form>
			</div>
		);
	}
}

export default EducationInfoEdit;