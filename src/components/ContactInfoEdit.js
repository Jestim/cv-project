import react from 'react';

class ContactInfoEdit extends react.Component {
	render () {
		return (
			<div className='contact-info-edit'>
				<h2 className='contact-info-edit-header'>
					Contact info
				</h2>
				<form className='contact-info-form'>
				<label htmlFor='name'>
					Name: 
					<input id='name' type='text' />
				</label>
				<label htmlFor='address'>
					Address: 
					<input id='address' type="text" />
				</label>
				<label htmlFor='email'>
					Email:
					<input id='email' type='email' />
				</label>
				<label htmlFor='phone-number'>
					Phone number: 
					<input id='phone-number' type='text' />
				</label>
				<button className='submit-button' type='submit'>Update</button>
			</form>
			</div>
		);
	}
}

export default ContactInfoEdit;