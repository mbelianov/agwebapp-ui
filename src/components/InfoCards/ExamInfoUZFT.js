import React from 'react';


export class ExamInfoUZFT extends React.Component {

  render() {

    let props = this.props;

    if (!props.examdata) return false;
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
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
                <span className="exam-info-section__heading">Плацента:</span>
                <span>{props.examdata.examValues.placenta}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Пъпна връв:</span>
                <span>{props.examdata.examValues["papna-vrav"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Сърдечна честота:</span>
                <span>{props.examdata.examValues["heart-rate"]}</span>
              </div>              
            </div>
          </div>
        </div>
        <div className="bx--row"><hr /></div>       

        <div className="bx--row">
          <div className="bx--col">
            <div className="bx--row">
              <div className="bx--col-md-8">
                <span className="exam-info-section__heading">Биометрия </span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">CRL[mm-г.с.]:</span>
                <span>{props.examdata.examValues["crl"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">NT[mm-г.с.]:</span>
                <span>{props.examdata.examValues["nt"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">NB[mm-г.с.]:</span>
                <span>{props.examdata.examValues["nb"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Пулс[уд/мин]:</span>
                <span>{props.examdata.examValues["puls"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Аритмия:</span>
                <span>{props.examdata.examValues["aritmia"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Регуритация:</span>
                <span>{props.examdata.examValues["reguracia"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">D.Venosus:</span>
                <span>{props.examdata.examValues["venosus"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Х.Е.Фокус:</span>
                <span>{props.examdata.examValues["fokus"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Една пълна артерия:</span>
                <span>{props.examdata.examValues["arteria"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Chorioideus:</span>
                <span>{props.examdata.examValues["chorio"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Exomphalos:</span>
                <span>{props.examdata.examValues["exomph"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Мегацистис:</span>
                <span>{props.examdata.examValues["mega"]}</span>
              </div>
              <div className="bx--col-md-4">
                <span className="exam-info-section__heading">Плацента:</span>
                <span>{props.examdata.examValues["placenta-2"]}</span>
              </div>
              <div className="bx--col-md-4">
                <span className="exam-info-section__heading">Инсерциа пълпна връв:</span>
                <span>{props.examdata.examValues["vrav"]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bx--row"><hr /></div>

        <div className="bx--row">
          <div className="bx--col">
            <div className="bx--row">
              <div className="bx--col-md-8">
                <span className="exam-info-section__heading">Анатомия</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Глава:</span>
                <span>{props.examdata.examValues["head"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Мозък:</span>
                <span>{props.examdata.examValues["brain"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Лице:</span>
                <span>{props.examdata.examValues["face"]}</span>
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
          </div>
        </div>
        <div className="bx--row"><hr /></div>

        <div className="bx--row">
          <div className="bx--col">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
