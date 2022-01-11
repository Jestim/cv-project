import react from 'react';
import uniqid from 'uniqid';
import ContactInfoDisplay from './components/ContactInfoDisplay';
import ContactInfoEdit from './components/ContactInfoEdit';
import EducationInfoEdit from './components/EducationInfoEdit';
import ExperienceInfoEdit from './components/ExperienceInfoEdit';
import Header from './components/Header';

class App extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        school: '',
        program: '',
        from: '',
        to: '',
        id: uniqid()
      },
      experience: {
        company: '',
        title: '',
        task: '',
        from: '',
        to: '',
        id: uniqid()
      },
      cvInfo: {
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
  }

  onContactInfoSubmit = (e) => {
    e.preventDefault();

    this.setState({
      cvInfo: {
        contactInfo: {
          name: document.getElementById('name').value,
          address: document.getElementById('address').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value
        }
      }
    });

    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  }

  

  render () {
    const contactInfo = this.state.cvInfo.contactInfo;

    return (
      <div className="App">
        <Header />
        <div className='container'>
          <div className='edit-cv'>
            <ContactInfoEdit 
              onSubmit={this.onContactInfoSubmit} />
            <EducationInfoEdit />
            <ExperienceInfoEdit />
          </div>
          <div className='display-cv'>
            <ContactInfoDisplay 
              contactInfo={contactInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
