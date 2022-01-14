const Header = (props) => {
		return (
			<div className='header'>
				<h1 className='header-text'>
					CV
				</h1>
				<h2 className='header-description'>
					Create your CV
				</h2>
				<button className="add-info-button" onClick={props.addInfo}>Add info</button>
			</div>
		);
}

export default Header;