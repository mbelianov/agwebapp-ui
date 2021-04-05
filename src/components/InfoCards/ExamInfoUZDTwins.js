import React from 'react';



export class ExamInfoUZDTwins extends React.Component {

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
            </div>
          </div>
        </div>
        <div className="bx--row"><hr /></div>       

        <div className="bx--row">
          <div className="bx--col">
            <div className="bx--row">
              <div className="bx--col-md-8">
                <span className="exam-info-section__heading">Близнак 1</span>
              </div>              
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Пол:</span>
                <span>{props.examdata.examValues["sex-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Сърдечна честота:</span>
                <span>{props.examdata.examValues["heart-rate-1"]}</span>
              </div>
            </div>
          </div>
          <div className="bx--col">
            <div className="bx--row">
              <div className="bx--col-md-8">
                <span className="exam-info-section__heading">Близнак 2</span>
              </div>              
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Пол:</span>
                <span>{props.examdata.examValues["sex-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Сърдечна честота:</span>
                <span>{props.examdata.examValues["heart-rate-2"]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bx--row"><hr /></div>

        <div className="bx--row">
          <div className="bx--col">
            <div className="bx--row">
              <div className="bx--col-md-8">
                <span className="exam-info-section__heading">Биометрия близнак 1</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">BPD[mm-г.с.]:</span>
                <span>{props.examdata.examValues["bpd-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">OFD[mm-г.с.]:</span>
                <span>{props.examdata.examValues["ofd-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">HC[mm-г.с.]:</span>
                <span>{props.examdata.examValues["hc-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Vp[mm-г.с.]:</span>
                <span>{props.examdata.examValues["vp-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">TCD[mm-г.с.]:</span>
                <span>{props.examdata.examValues["tcd-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">CM[mm-г.с.]:</span>
                <span>{props.examdata.examValues["cm-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">NF[mm-г.с.]:</span>
                <span>{props.examdata.examValues["nf-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">NB[mm-г.с.]:</span>
                <span>{props.examdata.examValues["nb-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">APAD[mm-г.с.]:</span>
                <span>{props.examdata.examValues["apad-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">TAD[mm-г.с.]:</span>
                <span>{props.examdata.examValues["tad-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">AC[mm-г.с.]:</span>
                <span>{props.examdata.examValues["ac-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">FL[mm-г.с.]:</span>
                <span>{props.examdata.examValues["fl-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">EFW[gr.]:</span>
                <span>{props.examdata.examValues["efw-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">LA:</span>
                <span>{props.examdata.examValues["la-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">LC:</span>
                <span>{props.examdata.examValues["lc-1"]}</span>
              </div>
            </div>
          </div>
          <div className="bx--col">
            <div className="bx--row">
              <div className="bx--col-md-8">
                <span className="exam-info-section__heading">Биометрия близнак 2</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">BPD[mm-г.с.]:</span>
                <span>{props.examdata.examValues["bpd-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">OFD[mm-г.с.]:</span>
                <span>{props.examdata.examValues["ofd-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">HC[mm-г.с.]:</span>
                <span>{props.examdata.examValues["hc-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Vp[mm-г.с.]:</span>
                <span>{props.examdata.examValues["vp-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">TCD[mm-г.с.]:</span>
                <span>{props.examdata.examValues["tcd-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">CM[mm-г.с.]:</span>
                <span>{props.examdata.examValues["cm-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">NF[mm-г.с.]:</span>
                <span>{props.examdata.examValues["nf-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">NB[mm-г.с.]:</span>
                <span>{props.examdata.examValues["nb-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">APAD[mm-г.с.]:</span>
                <span>{props.examdata.examValues["apad-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">TAD[mm-г.с.]:</span>
                <span>{props.examdata.examValues["tad-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">AC[mm-г.с.]:</span>
                <span>{props.examdata.examValues["ac-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">FL[mm-г.с.]:</span>
                <span>{props.examdata.examValues["fl-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">EFW[gr.]:</span>
                <span>{props.examdata.examValues["efw-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">LA:</span>
                <span>{props.examdata.examValues["la-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">LC:</span>
                <span>{props.examdata.examValues["lc-2"]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bx--row"><hr /></div>

        <div className="bx--row">
          <div className="bx--col">
            <div className="bx--row">
              <div className="bx--col-md-8">
                <span className="exam-info-section__heading">Анатомия близнак 1</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Глава:</span>
                <span>{props.examdata.examValues["head-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Мозък:</span>
                <span>{props.examdata.examValues["brain-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Лице:</span>
                <span>{props.examdata.examValues["face-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Шия/кожа:</span>
                <span>{props.examdata.examValues["neck-skin-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Гр. стълб:</span>
                <span>{props.examdata.examValues["chest-1-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Гр. кош:</span>
                <span>{props.examdata.examValues["chest-2-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Сърце:</span>
                <span>{props.examdata.examValues["heart-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Корем:</span>
                <span>{props.examdata.examValues["belly-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Бъбреци:</span>
                <span>{props.examdata.examValues["kidny-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Крайници:</span>
                <span>{props.examdata.examValues["legs-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Скелет:</span>
                <span>{props.examdata.examValues["skeleton-1"]}</span>
              </div>
            </div>
          </div>
          <div className="bx--col">
            <div className="bx--row">
              <div className="bx--col-md-8">
                <span className="exam-info-section__heading">Анатомия близнак 2</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Глава:</span>
                <span>{props.examdata.examValues["head-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Мозък:</span>
                <span>{props.examdata.examValues["brain-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Лице:</span>
                <span>{props.examdata.examValues["face-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Шия/кожа:</span>
                <span>{props.examdata.examValues["neck-skin-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Гр. стълб:</span>
                <span>{props.examdata.examValues["chest-1-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Гр. кош:</span>
                <span>{props.examdata.examValues["chest-2-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Сърце:</span>
                <span>{props.examdata.examValues["heart-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Корем:</span>
                <span>{props.examdata.examValues["belly-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Бъбреци:</span>
                <span>{props.examdata.examValues["kidny-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Крайници:</span>
                <span>{props.examdata.examValues["legs-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">Скелет:</span>
                <span>{props.examdata.examValues["skeleton-2"]}</span>
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
                <span>{props.examdata.examValues["dex-pi-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">A. ut. Dex RI:</span>
                <span>{props.examdata.examValues["dex-ri-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">A. ut. Sin PI:</span>
                <span>{props.examdata.examValues["sin-pi-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">A. ut. Sin RI:</span>
                <span>{props.examdata.examValues["sin-ri-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">A. Umb. PI:</span>
                <span>{props.examdata.examValues["umb-pi-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">A. Umb. RI:</span>
                <span>{props.examdata.examValues["umb-ri-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">CMA PI:</span>
                <span>{props.examdata.examValues["cma-pi-1"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">CPR:</span>
                <span>{props.examdata.examValues["cpr-1"]}</span>
              </div>
              <div className="bx--col-md-4">
                <span className="exam-info-section__heading">Duc. Ven. [mm/sec]:</span>
                <span>{props.examdata.examValues["duc-ven-1"]}</span>
              </div>
              <div className="bx--col-md-4">
                <span className="exam-info-section__heading">CMA PSV[mm/sec]:</span>
                <span>{props.examdata.examValues["cma-psv-1"]}</span>
              </div>
            </div>
          </div>
          <div className="bx--col">
            <div className="bx--row">
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">A. ut. Dex PI:</span>
                <span>{props.examdata.examValues["dex-pi-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">A. ut. Dex RI:</span>
                <span>{props.examdata.examValues["dex-ri-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">A. ut. Sin PI:</span>
                <span>{props.examdata.examValues["sin-pi-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">A. ut. Sin RI:</span>
                <span>{props.examdata.examValues["sin-ri-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">A. Umb. PI:</span>
                <span>{props.examdata.examValues["umb-pi-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">A. Umb. RI:</span>
                <span>{props.examdata.examValues["umb-ri-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">CMA PI:</span>
                <span>{props.examdata.examValues["cma-pi-2"]}</span>
              </div>
              <div className="bx--col-md-2">
                <span className="exam-info-section__heading">CPR:</span>
                <span>{props.examdata.examValues["cpr-2"]}</span>
              </div>
              <div className="bx--col-md-4">
                <span className="exam-info-section__heading">Duc. Ven. [mm/sec]:</span>
                <span>{props.examdata.examValues["duc-ven-2"]}</span>
              </div>
              <div className="bx--col-md-4">
                <span className="exam-info-section__heading">CMA PSV[mm/sec]:</span>
                <span>{props.examdata.examValues["cma-psv-2"]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
