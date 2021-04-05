import React from 'react';

export class ExamInfoUZD extends React.Component {

render (){

  let props = this.props;
  
    if (!props.examdata) return false;
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">ПРМ:</span>
            <span>{props.examdata.examValues.prm}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">ГВ по ПРМ:</span>
            <span>{props.examdata.examValues["gv-po-prm"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">ВТР:</span>
            <span>{props.examdata.examValues.vtr}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Коригиран ВТР:</span>
            <span>{props.examdata.examValues["korigiran-vtr"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Възраст:</span>
            <span>{props.examdata.examValues.age}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Анамнеза:</span>
            <span>{props.examdata.examValues.anamneza}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Обремененост:</span>
            <span>{props.examdata.examValues.obremenenost}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Предлежание:</span>
            <span>{props.examdata.examValues.predlezhanie}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Движение на плода:</span>
            <span>{props.examdata.examValues["dvizhenie-na-ploda"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Плацента:</span>
            <span>{props.examdata.examValues.placenta}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Пъпна връв:</span>
            <span>{props.examdata.examValues["papna-vrav"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Пол:</span>
            <span>{props.examdata.examValues["sex"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Сърдечна честота:</span>
            <span>{props.examdata.examValues["heart-rate"]}</span>
          </div>
        </div>
        <div className="bx--row"><hr /></div>
        <div className="bx--row">
          <div className="bx--col-md-8">
            <span className="exam-info-section__heading">Биометрия</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">BPD[mm-г.с.]:</span>
            <span>{props.examdata.examValues.bpd}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">OFD[mm-г.с.]:</span>
            <span>{props.examdata.examValues.ofd}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">HC[mm-г.с.]:</span>
            <span>{props.examdata.examValues.hc}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Vp[mm-г.с.]:</span>
            <span>{props.examdata.examValues.vp}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">TCD[mm-г.с.]:</span>
            <span>{props.examdata.examValues.tcd}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">CM[mm-г.с.]:</span>
            <span>{props.examdata.examValues.cm}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">NF[mm-г.с.]:</span>
            <span>{props.examdata.examValues.nf}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">NB[mm-г.с.]:</span>
            <span>{props.examdata.examValues.nb}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">APAD[mm-г.с.]:</span>
            <span>{props.examdata.examValues.apad}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">TAD[mm-г.с.]:</span>
            <span>{props.examdata.examValues.tad}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">AC[mm-г.с.]:</span>
            <span>{props.examdata.examValues.ac}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">FL[mm-г.с.]:</span>
            <span>{props.examdata.examValues.fl}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">EFW[gr.]:</span>
            <span>{props.examdata.examValues.efw}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">LA:</span>
            <span>{props.examdata.examValues.la}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">LC:</span>
            <span>{props.examdata.examValues.lc}</span>
          </div>
        </div>
        <div className="bx--row"><hr /></div>
        <div className="bx--row">
          <div className="bx--col-md-8">
            <span className="exam-info-section__heading">Анатомия на плода</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Глава:</span>
            <span>{props.examdata.examValues.head}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Мозък:</span>
            <span>{props.examdata.examValues.brain}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Лице:</span>
            <span>{props.examdata.examValues.face}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Шия/кожа:</span>
            <span>{props.examdata.examValues["neck-skin"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Гр. стълб:</span>
            <span>{props.examdata.examValues["chest-1"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Гр. кош:</span>
            <span>{props.examdata.examValues["chest-2"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Сърце:</span>
            <span>{props.examdata.examValues["heart"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Корем:</span>
            <span>{props.examdata.examValues["belly"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Бъбреци:</span>
            <span>{props.examdata.examValues["kidny"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Крайници:</span>
            <span>{props.examdata.examValues["legs"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Скелет:</span>
            <span>{props.examdata.examValues["skeleton"]}</span>
          </div>
        </div>
        <div className="bx--row"><hr /></div>
        <div className="bx--row">
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">A. ut. Dex PI:</span>
            <span>{props.examdata.examValues["dex-pi"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">A. ut. Dex RI:</span>
            <span>{props.examdata.examValues["dex-ri"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">A. ut. Sin PI:</span>
            <span>{props.examdata.examValues["sin-pi"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">A. ut. Sin RI:</span>
            <span>{props.examdata.examValues["sin-ri"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">A. Umb. PI:</span>
            <span>{props.examdata.examValues["umb-pi"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">A. Umb. RI:</span>
            <span>{props.examdata.examValues["umb-ri"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">CMA PI:</span>
            <span>{props.examdata.examValues["cma-pi"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">CMA PSV[mm/sec]:</span>
            <span>{props.examdata.examValues["cma-psv"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">CPR:</span>
            <span>{props.examdata.examValues["cpr"]}</span>
          </div>
          <div className="bx--col-md-2">
            <span className="exam-info-section__heading">Duc. Ven. [mm/sec]:</span>
            <span>{props.examdata.examValues["duc-ven"]}</span>
          </div>
        </div>
      </div>
    );
  } 
}
