const ContactInfoEdit = (props) => {
	const { name, address, email, phone } = props.onContactChangeValues;

	return (
		<div id="contact-info-edit" className='info-section-add hidden'>
			<h2 className='contact-info-edit-header'>
				Contact info
			</h2>
			<form className='add-info-form'>
			<label htmlFor='name'>
				Name: 
				<input id='name' type='text' value={name} onChange={props.handleContactInfoChange}/>
			</label>
			<label htmlFor='address'>
				Address: 
				<input id='address' type="text" value={address} onChange={props.handleContactInfoChange}/>
			</label>
			<label htmlFor='email'>
				Email:
				<input id='email' type='email' value={email} onChange={props.handleContactInfoChange}/>
			</label>
			<label htmlFor='phone'>
				Phone number: 
				<input id='phone' type='text' value={phone} onChange={props.handleContactInfoChange}/>
			</label>
			<button className='submit-button' onClick={props.onInfoSubmit}>Update</button>
		</form>
		</div>
	);
}

export default ContactInfoEdit;