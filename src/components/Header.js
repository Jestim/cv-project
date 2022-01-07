import react from 'react';

class Header extends react.Component {
	render () {
		return (
			<div className='header'>
				<h1 className='header-text'>
					CV
				</h1>
				<h2 className='header-description'>
					Create your CV
				</h2>
			</div>
		);
	}
}

export default Header;