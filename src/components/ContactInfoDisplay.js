const ContactInfoDisplay = (props) => {
	const { 
		name, 
		address, 
		email, 
		phone } = props.contactInfo;

	return (
		<div className="info-display">
			<h1>{name}</h1>
			<h3>{address}</h3>
			<h3>{email}</h3>
			<h3>{phone}</h3>
		</div>
		
	);
}

export default ContactInfoDisplay;