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
      experience: [],
      onChangeValues: {
        education: {
          school: '',
          program: '',
          from: '',
          to: '',
          id: ''
        },
        experience: {
          company: '',
          title: '',
          task: '',
          from: '',
          to: '',
          id: ''
        }
      }
    }
  }

  handleContactInfoChange = (e) => {
    const newContactInfo = this.state.contactInfo;
    newContactInfo[e.target.id] = e.target.value;

    this.setState({
      contactInfo: newContactInfo
    });
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

  handleEducationInfoChange = (e) => {
    const newEducationInfo = this.state.onChangeValues.education;
    newEducationInfo[e.target.id.split('-', 1)[0]] = e.target.value;

    this.setState({
      onChangeValues: {
        education: newEducationInfo,
        experience: this.state.onChangeValues.experience
      }
    });
  }

  onEducationEditClick = (e) => {
    e.preventDefault();
    const eduId = e.target.parentElement.id; 
    
    document.getElementById('education-info-edit').classList.toggle('hidden');

    let newEduArray = this.state.education;

    newEduArray.forEach(edu => {
      if (edu.id === eduId){
        this.setState({
          onChangeValues: {
            education: edu,
            experience: this.state.onChangeValues.experience
          }
        });
      }
    });

    const expDeleteButton = document.getElementById('edu-edit-button');
    if (expDeleteButton.textContent === 'Edit')
      expDeleteButton.textContent = 'Close';
    else  
      expDeleteButton.textContent = 'Edit';

    document.getElementById('edu-submit-button').classList.toggle('hidden');
  }

  onEducationInfoSubmit = (e) => {
    e.preventDefault();

    const newEdu = {
      school: document.getElementById('school').value,
      program: document.getElementById('program').value,
      from: document.getElementById('from-edu').value,
      to: document.getElementById('to-edu').value,
      id: uniqid(),
    };

    const newEduArray = this.state.education.concat(newEdu);
    newEduArray.sort((a, b) => {
      return new Date(b.from) - new Date(a.from);
    });

    this.setState({
      education: newEduArray,
      onChangeValues: {
        education: {
          school: '',
          program: '',
          from: '',
          to: '',
          id: '',
        },
        experience: this.state.onChangeValues.experience
      }
    });

    // this.resetInputElements(['school', 'program', 'from-edu', 'to-edu']);
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

  handleExperienceInfoChange = (e) => {
    const newEexperienceInfo = this.state.onChangeValues.experience;
    newEexperienceInfo[e.target.id.split('-', 1)[0]] = e.target.value;
    
    this.setState({
      onChangeValues: {
        education: this.state.onChangeValues.education,
        experience: newEexperienceInfo
      }
    });
  }

  onExperienceEditClick = (e) => {
    e.preventDefault();
    const expId = e.target.parentElement.id; 
    
    document.getElementById('experience-info-edit').classList.toggle('hidden');

    let newExpArray = this.state.experience;

    newExpArray.forEach(exp => {
      if (exp.id === expId){
        console.log('exp update');
        this.setState({
          onChangeValues: {
            education: this.state.onChangeValues.education,
            experience: exp
          }
        });
      }
    });

    const expDeleteButton = document.getElementById('exp-edit-button');
    if (expDeleteButton.textContent === 'Edit')
      expDeleteButton.textContent = 'Close';
    else  
      expDeleteButton.textContent = 'Edit';

    document.getElementById('exp-submit-button').classList.toggle('hidden');

    
  }

  onExperienceInfoSubmit = (e) => {
    e.preventDefault();

    const newExp = {
      company: document.getElementById('company').value,
      title: document.getElementById('title').value,
      task: document.getElementById('task').value,
      from: document.getElementById('from-exp').value,
      to: document.getElementById('to-exp').value,
      id: uniqid(),
    }

    const newExpArray = this.state.experience.concat(newExp);
    newExpArray.sort((a, b) => {
      return new Date(b.from) - new Date(a.from);
    });

    this.setState({
      experience: newExpArray,
      onChangeValues: {
        education: this.state.onChangeValues.education,
        experience: {
          company: '',
          title: '',
          task: '',
          from: '',
          to: '',
          id: ''
        }
      }
    });

    // this.resetInputElements(['company', 'title', 'task', 'from-exp', 'to-exp']);
  }

  onExperienceDeleteClick = (e) => {
    e.preventDefault();
    const expId = e.target.parentElement.id;
    const newExpArray = this.state.experience;

    for (let i = 0; i < newExpArray.length; ++i) {
      if (newExpArray[i].id === expId)
      newExpArray.splice(i, 1);
    }

    this.setState({
      experience: newExpArray
    });
  }

  resetInputElements = (elementIds) => {
    elementIds.forEach(element => {
      document.getElementById(element).value = '';
    });
  }

  onAddInfoClick = (e) => {
    e.preventDefault();

    this.setState({
      onChangeValues: {
        education: {
          school: '',
          program: '',
          from: '',
          to: '',
          id: ''
        },
        experience: {
          company: '',
          title: '',
          task: '',
          from: '',
          to: '',
          id: ''
        }
      }
    })

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
              handleContactInfoChange={this.handleContactInfoChange}
              onInfoSubmit={this.onContactInfoSubmit}
              onContactChangeValues={contactInfo} />
            <EducationInfoEdit 
              handleEducationInfoChange={this.handleEducationInfoChange}
              onEduSubmit={this.onEducationInfoSubmit}
              onEduChangeValues={this.state.onChangeValues.education} />
            <ExperienceInfoEdit 
              handleExperienceInfoChange={this.handleExperienceInfoChange}
              onExpSubmit={this.onExperienceInfoSubmit} 
              onExpChangeValues={this.state.onChangeValues.experience}  />
          </div>
          <div className='display-cv'>
            <ContactInfoDisplay 
              contactInfo={contactInfo} />
            <EducationInfoDisplay 
              education={educationInfo}
              onEditEdu={this.onEducationEditClick}
              onDeleteEdu={this.onEducationDeleteClick} />
            <ExperienceInfoDisplay 
              experience={experienceInfo}
              onEditExp={this.onExperienceEditClick}
              onDeleteExp={this.onExperienceDeleteClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
