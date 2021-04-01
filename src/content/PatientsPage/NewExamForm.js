import React from 'react';
import {
  Form, Button, InlineNotification
} from 'carbon-components-react';
import axios from 'axios'
import UzdForm from './Forms/UzdForm'
import UzdTwinsForm from './Forms/UzdTwinsForm'
import UzftForm from './Forms/UzftForm'

export class NewExamForm extends React.Component {
  
  values ={}; //temporary store values of all form fields
  constructor(props) {
    super(props);

    this.state = {
      timestamp: new Date().toISOString(),
      status: { kind: "info", displayText: "" },
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = target.id;
    this.setState({
      status: { kind: "warning", displayText: "Внимание! Незапазени промени!" }
    });
    this.values[id]=value;
  }

  handleSubmit = () => {

    let content = {
      timestamp: this.state.timestamp,
      examId: this.props.type,
      patient: { patientEGN: this.props.patientEGN, patientName: this.props.patientName },
      exam: { examTitle: this.props.examTitle, examValues: this.values }
    };

    console.debug("submitting: ", content);
    this.setState({ status: { kind: "info", displayText: "Записвам..." } });
    axios.post(process.env.REACT_APP_BACK_END_URL + process.env.REACT_APP_EXAM_ADD_API, content)
      .then(res => {
        console.debug(res);
        console.log("submit exam record result: ", res.status, res.statusText, res.data);
        this.setState({ status: { kind: "success", displayText: "Успех" } });
      })
      .catch(err => {
        this.setState({ status: { kind: "error", displayText: "Грешка при запис. Опитайте отново." } });
        console.log("Error submiting data: ", err.message);
        console.debug(err);
      })
  }

  render() {
    let props = this.props;

    return (
      <Form>
        <div className="bx--grid bx--grid--full-width">
          {(()=>{if (props.type === "uzd") return (<UzdForm handleChange={this.handleInputChange}></UzdForm>)})()}
          {(()=>{if (props.type === "uzdb") return (<UzdTwinsForm handleChange={this.handleInputChange}></UzdTwinsForm>)})()}
          {(()=>{if (props.type === "uzd-twins") return (<UzdTwinsForm handleChange={this.handleInputChange}></UzdTwinsForm>)})()}
          {(()=>{if (props.type === "uzft") return (<UzftForm handleChange={this.handleInputChange}></UzftForm>)})()}
          <div className="bx--row bx--row-padding">
            <div className="bx--col">
              <h6 className='exam-subtitle'>Забележки</h6>
              <div>1. Някои вродени аномалии на плода не могат да бъдат диагностицирани при ултразвуково изследване.</div>
              <div>2. Хромозомните аномалии на плода не могат да се диагностицират чрез ултразвук.</div>
              <p className='signature' >Извършил изследването: Д-р Арабаджикова</p>
            </div>
          </div>

          <div className="bx--row bx--row-padding">
            <div className="bx--col ">
              <Button kind="primary" onClick={this.handleSubmit}>Запис</Button>
              <Button kind="secondary" >Печат</Button>
            </div>
            {(() => {
              if (this.state.status.displayText.length === 0)
                return false;

              return (
                <div className="bx-col">
                  <InlineNotification
                    hideCloseButton lowContrast
                    kind={this.state.status.kind || "info"}
                    subtitle={this.state.status.displayText}
                    title=""
                  />
                </div>)
            })()}
          </div>
        </div>
      </Form>
    )
  }
}