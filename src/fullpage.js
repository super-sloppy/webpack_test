import React from 'react';
import ReactDOM from 'react-dom';
// import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

class Fullpage extends React.Component {
  render() {
    const options = {

      sectionClassName: 'section',
      verticalAlign: true,
      scrollBar: false,
      navigation: true,
      sectionPaddingTop: '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation: true

    };

    return (
      <div>
        <Header>
          <a href="#sectionOne">Section One</a>
          <a href="#sectionTwo">Section Two</a>
          <a href="#sectionThree">Section Three</a>
        </Header>
        <Footer>
          <a href="">Dcoumentation</a>
          <a href="">Example Source</a>
          <a href="">About</a>
        </Footer>
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
          <Section color="#A7DBD8">Page 2</Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
    );
  }
}

ReactDOM.render(<Fullpage />, document.getElementById('app'));