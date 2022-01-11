const ContactInfoEdit = (props) => {
	return (
		<div className='info-edit'>
			<h2 className='contact-info-edit-header'>
				Contact info
			</h2>
			<form className='edit-info-form' onSubmit={props.onSubmit}>
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
			<label htmlFor='phone'>
				Phone number: 
				<input id='phone' type='text' pattern='\d'/>
			</label>
			<button className='submit-button' type='submit'>Update</button>
		</form>
		</div>
	);
}

export default ContactInfoEdit;