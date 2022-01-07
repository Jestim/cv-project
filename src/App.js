import react from 'react';
import ContactInfoEdit from './components/ContactInfoEdit';
import EducationInfoEdit from './components/EducationInfoEdit';
import ExperienceInfoEdit from './components/ExperienceInfoEdit';
import Header from './components/Header';

class App extends react.Component {
  // constructor(props) {
  //   super(props);
  // }

  render () {
    return (
      <div className="App">
        <Header />
        <ContactInfoEdit />
        <EducationInfoEdit />
        <ExperienceInfoEdit />
      </div>
    );
  }
}

export default App;
