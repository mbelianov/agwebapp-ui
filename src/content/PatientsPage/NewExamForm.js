import React from 'react';
import {
  Form, Button, InlineNotification
} from 'carbon-components-react';
import ReactToPrint from 'react-to-print';
//import axios from 'axios'
import {withAxios} from 'react-axios'
import UzdForm from './Forms/UzdForm'
import UzdTwinsForm from './Forms/UzdTwinsForm'
import UzftForm from './Forms/UzftForm'
import { ExamInfoComponent } from '../../components/InfoCards/ExamInfoComponent';

export const NewExamForm = withAxios(class NewExamFormRaw extends React.Component {
  
  values = {}; //temporary store values of all form fields
  constructor(props) {
    super(props);
    this.ref = React.createRef();

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

  generateContent = () => {
    let content = {
      timestamp: this.state.timestamp,
      examId: this.props.type,
      patient: { patientEGN: this.props.patientEGN, patientName: this.props.patientName },
      exam: { examTitle: this.props.examTitle, examValues: this.values }
    };

    return content;
  }

  handleSubmit = () => {

    let content = this.generateContent();

    console.debug("submitting: ", content);
    this.setState({ status: { kind: "info", displayText: "Записвам..." } });
    this.props.axios.post(process.env.REACT_APP_EXAM_ADD_API, content)
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
    //let props = this.props;

    return (
      <Form >
        <div className="bx--grid bx--grid--full-width" ref={this.ref}>
          {(()=>{if (this.props.type === "uzd") return (<UzdForm handleChange={this.handleInputChange}></UzdForm>)})()}
          {(()=>{if (["uzdb", "uzd-twins"].includes(this.props.type)) return (<UzdTwinsForm handleChange={this.handleInputChange}></UzdTwinsForm>)})()}
          {(()=>{if (this.props.type === "uzft") return (<UzftForm handleChange={this.handleInputChange}></UzftForm>)})()}
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
              
              <ReactToPrint
                trigger={() => {return <Button kind="secondary" >Печат</Button>; }}
                content={() => this.ref.current}
              />
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
        <div style={{ display: "none" }}><ExamInfoComponent examdata={this.generateContent()} ref={this.ref} /></div>
      </Form>
    )
  }
})
