
import React from 'react';
import { Tile, OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import { ExamInfoUZD } from './ExamInfoUZD';
import { ExamInfoUZDTwins } from './ExamInfoUZDTwins';
import { ExamInfoUZFT } from './ExamInfoUZFT';

export class ExamInfoComponent extends React.Component {

  render() {

    let props = this.props;

    return (
      <Tile>
        <div className="bx--row ">
          <div className="bx--col exam-info-section__navigation-row">
            <OverflowMenu className="exam-info-section-overflow-menu" flipped>
              <OverflowMenuItem itemText="Изтриване" isDelete />
            </OverflowMenu>
          </div>
        </div>
        <section className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-md-2">
              <span className="exam-info-section__heading">Пациент:</span>
              <span>{props.examdata.patient.patientName}</span>
            </div>
            <div className="bx--col-md-2">
              <span className="exam-info-section__heading">Преглед:</span>
              <span>{props.examdata.exam.examTitle}</span>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-md-2">
              <span className="exam-info-section__heading">Дата:</span>
              <span>{props.examdata.timestamp}</span>
            </div>
          </div>
          <div className="bx--row"><hr /></div>
          {(() => { if (props.examdata.examId === "uzd") return (<ExamInfoUZD examdata={props.examdata.exam} />) })()}
          {(() => { if (props.examdata.examId === "uzdb") return (<ExamInfoUZDTwins examdata={props.examdata.exam} />) })()}
          {(() => { if (props.examdata.examId === "uzd-twins") return (<ExamInfoUZDTwins examdata={props.examdata.exam} />) })()}
          {(() => { if (props.examdata.examId === "uzft") return (<ExamInfoUZFT examdata={props.examdata.exam} />) })()}
          <div className="bx--row"><hr /></div>
          <div className="bx--row">
            <div className="bx--col">
              <span className="exam-info-section__heading">Коментар:</span>
              <span>{props.examdata.exam.examValues.comment}</span>
            </div>
          </div>
          <div className="bx--row"><hr /></div>
          <div className="bx--row">
            <div className="bx--col">
              <h6 className='exam-subtitle'>Забележки:</h6>
              <div>1. Някои вродени аномалии на плода не могат да бъдат диагностицирани при ултразвуково изследване.</div>
              <div>2. Хромозомните аномалии на плода не могат да се диагностицират чрез ултразвук.</div>
              <div>Извършил изследването: Д-р Арабаджикова</div>
            </div>
          </div>
        </section>

      </Tile>
    );
  }


}