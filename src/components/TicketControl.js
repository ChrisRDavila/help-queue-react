import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import DebuggingLesson from './DebuggingLesson';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      goDebug:false,
      askedForHelp: false,
      spentTimeDocumenting: false,
      formVisibleOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this); 
    // this.handleHelp = this.handleHelp.bind(this);
    // this.handleDocumenting = this.handleDocumenting.bind(this);
  }


  handleDebug = () => {
    this.setState(prevState => ({
      goDebug: !prevState.goDebug
    }));
  }

  handleHelp = () => {
    this.setState(prevState => ({
      askedForHelp: !prevState.askedForHelp
    }));
  }

  handleDocumenting = () => {
    this.setState(prevState => ({
      spentTimeDocumenting: !prevState.spentTimeDocumenting
    }));
  }
  
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    
    if (!this.state.goDebug){
      currentlyVisibleState = (
        <React.Fragment>
          <h1>Have you gone through the steps in LHTP lesson?</h1>
          <button onClick={this.handleDebug}>Yes</button>
        </React.Fragment>
      );
      buttonText = "No";
    } 
    else if (!this.state.askedForHelp) {
      currentlyVisibleState = (
        <React.Fragment>
          <h1>Have you asked another pair for help?</h1>
          <button onClick={this.handleHelp}>Yes</button>
        </React.Fragment>
      );
      buttonText = "No";
    } 
    else if (!this.state.spentTimeDocumenting) {
      currentlyVisibleState = (
        <React.Fragment>
          <h1>Have you spent 15 min going through the problem and documenting every step?</h1>
          <button onClick={this.handleDocumenting}>Yes</button>
        </React.Fragment>
      );
      buttonText = "No";        
    } else if (!this.state.formVisibleOnPage) {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
    } else {
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return to Ticket List";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
      </React.Fragment>
    );
  }

}

export default TicketControl; 