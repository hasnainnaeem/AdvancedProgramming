import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import Label from './Label';
import Feedback from './Feedback';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',

      isNameValid: true,
      isEmailValid: false,
      isSubjectValid: true,
      isMessageValid: false,
      isSubmitPressed: false,

      buttonMessage: 'Submit',
      messageSent: false,
    };

    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.subjectChange = this.subjectChange.bind(this);
    this.messageChange = this.messageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameChange(name) {
    this.setState({name: name});
    if (name.length > 100) {
      this.setState({isNameValid: false});
    } else {
      this.setState({isNameValid: true});
    }
  }

  emailChange(email) {
    this.setState({email: email});
    let isEmailValid = App.validateEmail(email);
    if (isEmailValid) {
      this.setState({isEmailValid: true});
    } else {
      this.setState({isEmailValid: false});
    }
  }

  subjectChange(subject) {
    this.setState({subject: subject});
    if (subject.length > 200) {
      this.setState({isSubjectValid: false});
    } else {
      this.setState({isSubjectValid: true});
    }
  }

  messageChange(message) {
    this.setState({message: message});
    let messageLen = message.length;
    if (messageLen < 10 && messageLen > 1000) {
      this.setState({isMessageValid: false});
    } else {
      this.setState({isMessageValid: true});
    }
  }

  static validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleSubmit() {
    this.setState({isSubmitPressed: true});
    if (
      this.state.isNameValid &&
      this.state.isEmailValid &&
      this.state.isSubjectValid &&
      this.state.isMessageValid
    ) {
      this.setState({buttonMessage: 'Sent', messageSent: true});
    } else {
      this.setState({buttonMessage: 'Submit', messageSent: false});
    }
  }

  render() {
    let {name, email, subject, message} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />

          <Label text="Full Name" />
          <Input
            inputValue={name}
            inputChange={text => this.nameChange(text)}
            placeholder="Enter the your full name"
            style={{marginBottom: 10}}
          />
          {!this.state.isNameValid && this.state.isSubmitPressed ? (
            <Feedback
              text="Name cannot contain more than 100 characters"
              type="negative"
            />
          ) : (
            <View />
          )}

          <Label text="Email" />
          <Input
            inputValue={email}
            inputChange={text => this.emailChange(text)}
            placeholder="Enter your email"
            style={{marginBottom: 10}}
          />
          {!this.state.isEmailValid && this.state.isSubmitPressed ? (
            <Feedback text="Invalid Email" type="negative" />
          ) : (
            <View />
          )}

          <Label text="Subject" />
          <Input
            inputValue={subject}
            inputChange={text => this.subjectChange(text)}
            placeholder="Enter subject"
            style={{marginBottom: 10}}
          />
          {!this.state.isSubjectValid && this.state.isSubmitPressed ? (
            <Feedback
              text="Subject cannot contain more than 200 characters"
              type="negative"
            />
          ) : (
            <View />
          )}

          <Label text="Message" />
          <Input
            inputValue={message}
            inputChange={text => this.messageChange(text)}
            placeholder="Enter Message"
            style={{height: 200, marginBottom: 10}}
          />
          {!this.state.isMessageValid && this.state.isSubmitPressed ? (
            <Feedback text="Message field cannot be empty." type="negative" />
          ) : (
            <View />
          )}
          <Button
            text={this.state.buttonMessage}
            handlePress={this.handleSubmit}
            isDisabled={this.state.messageSent}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default Contact;
