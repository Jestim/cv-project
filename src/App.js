import react from 'react';
import uniqid from 'uniqid';
import ContactInfoDisplay from './components/ContactInfoDisplay';
import ContactInfoEdit from './components/ContactInfoEdit';
import EducationInfoDisplay from './components/EducationInfoDisplay';
import EducationInfoEdit from './components/EducationInfoEdit';
import ExperienceInfoEdit from './components/ExperienceInfoEdit';
import Header from './components/Header';

class App extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactInfo: {
        name: 'John Doe',
        address: 'Fake street 23',
        email: 'JohnDoe@fake.com',
        phone: '1234567890',
      },
      education: [],
      experience: []
    }
  }

  onContactInfoSubmit = (e) => {
    e.preventDefault();
    console.log('onContactInfoSubmit called')

    this.setState({
        contactInfo: {
          name: document.getElementById('name').value,
          address: document.getElementById('address').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value
        }
    });

    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  }

  onEducationInfoSubmit = (e) => {
    e.preventDefault();
    console.log('onEducationInfoSubmit called')

    const newEdu = {
      school: document.getElementById('school').value,
      program: document.getElementById('program').value,
      from: document.getElementById('from-edu').value,
      to: document.getElementById('to-edu').value,
      id: uniqid()
    };

    this.setState({
      education: this.state.education.concat(newEdu)
    });

    document.getElementById('school').value = '';
    document.getElementById('program').value = '';
    document.getElementById('from-edu').value = '';
    document.getElementById('to-edu').value = '';

    
  }

  render () {
    const contactInfo = this.state.contactInfo;
    const educationInfo = this.state.education;

    return (
      <div className="App">
        <Header />
        <div className='container'>
          <div className='edit-cv'>
            <ContactInfoEdit 
              onInfoSubmit={this.onContactInfoSubmit} />
            <EducationInfoEdit 
              onEduSubmit={this.onEducationInfoSubmit} />
            <ExperienceInfoEdit />
          </div>
          <div className='display-cv'>
            <ContactInfoDisplay 
              contactInfo={contactInfo} />
            <EducationInfoDisplay 
              education={educationInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
