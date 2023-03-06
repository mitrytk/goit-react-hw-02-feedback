import React, { Component } from "react";

import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (grade) => {
    this.setState( prevState => {
        return ({[grade]: prevState[`${grade}`] +1})
    }) 
  } 

  countTotalFeedback = () => {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;

    return (good + neutral + bad);
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    
    return (good/total * 100).toFixed(0);
}

  render() {
    return (

      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
        </Section>

        <Section title='Statistics'>
          { this.countTotalFeedback() === 0 
          ? (<Notification message="There is no feedback"></Notification>)
          : (<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />)
          }
        </Section>
      </>
    );
  }
}
