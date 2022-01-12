import react from 'react';
import uniqid from 'uniqid';
import ContactInfoDisplay from './components/ContactInfoDisplay';
import ContactInfoEdit from './components/ContactInfoEdit';
import EducationInfoDisplay from './components/EducationInfoDisplay';
import EducationInfoEdit from './components/EducationInfoEdit';
import ExperienceInfoDisplay from './components/ExperienceInfoDisplay';
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

    this.resetInputElements(['name', 'address', 'email', 'phone']);
  }

  onEducationInfoSubmit = (e) => {
    e.preventDefault();

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

    this.resetInputElements(['school', 'program', 'from-edu', 'to-edu']);
  }

  onExperienceInfoSubmit = (e) => {
    e.preventDefault();

    const newExp = {
      company: document.getElementById('company').value,
      title: document.getElementById('title').value,
      tasks: document.getElementById('tasks').value,
      from: document.getElementById('from-exp').value,
      to: document.getElementById('to-exp').value
    }

    this.setState({
      experience: this.state.experience.concat(newExp)
    });

    this.resetInputElements(['company', 'title', 'tasks', 'from-exp', 'to-exp']);
  }

  resetInputElements = (elementIds) => {
    elementIds.forEach(element => {
      document.getElementById(element).value = '';
    });
  }

  render () {
    const contactInfo = this.state.contactInfo;
    const educationInfo = this.state.education;
    const experienceInfo = this.state.experience;

    return (
      <div className="App">
        <Header />
        <div className='container'>
          <div className='edit-cv'>
            <ContactInfoEdit 
              onInfoSubmit={this.onContactInfoSubmit} />
            <EducationInfoEdit 
              onEduSubmit={this.onEducationInfoSubmit} />
            <ExperienceInfoEdit 
              onExpSubmit={this.onExperienceInfoSubmit} />
          </div>
          <div className='display-cv'>
            <ContactInfoDisplay 
              contactInfo={contactInfo} />
            <EducationInfoDisplay 
              education={educationInfo} />
            <ExperienceInfoDisplay 
              experience={experienceInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
