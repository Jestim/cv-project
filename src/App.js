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

    const newEduArray = this.state.education.concat(newEdu);
    newEduArray.sort((a, b) => {
      return new Date(b.from) - new Date(a.from);
    });

    this.setState({
      education: newEduArray
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
      to: document.getElementById('to-exp').value,
      id: uniqid()
    }

    const newExpArray = this.state.experience.concat(newExp);
    newExpArray.sort((a, b) => {
      return new Date(b.from) - new Date(a.from);
    });

    this.setState({
      experience: newExpArray
    });

    this.resetInputElements(['company', 'title', 'tasks', 'from-exp', 'to-exp']);
  }

  resetInputElements = (elementIds) => {
    elementIds.forEach(element => {
      document.getElementById(element).value = '';
    });
  }

  onAddInfoClick = (e) => {
    e.preventDefault();

    const infoEditSections = document.querySelectorAll('.info-section-add');
    for (let i = 0; i < infoEditSections.length; i++) {
      infoEditSections[i].classList.toggle('hidden');
    }
    
    document.querySelector('.display-cv').classList.toggle('hidden');

    if (e.target.textContent === 'Add info')
      e.target.textContent = 'Preview';
    else 
      e.target.textContent = 'Add info';
  }

  onEducationEditClick = (e) => {
    e.preventDefault();

  }

  onEducationDeleteClick = (e) => {
    e.preventDefault();
    const eduId = e.target.parentElement.id;
    const newEduArray = this.state.education;

    for (let i = 0; i < newEduArray.length; ++i) {
      if (newEduArray[i].id === eduId)
        newEduArray.splice(i, 1);
    }

    this.setState({
      education: newEduArray
    });
  }

  render () {
    const contactInfo = this.state.contactInfo;
    const educationInfo = this.state.education;
    const experienceInfo = this.state.experience;

    return (
      <div className="App">
        <Header
          addInfo={this.onAddInfoClick} />
        <div className='container'>
          <div className='add-cv-info'>
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
              education={educationInfo}
              onEditEdu={this.onEducationEditClick}
              onDeleteEdu={this.onEducationDeleteClick} />
            <ExperienceInfoDisplay 
              experience={experienceInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
