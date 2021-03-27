import React, { useState } from 'react';

import {
  Form, Button, DatePicker, DatePickerInput, TextInput, Tile, TextArea, InlineNotification
} from 'carbon-components-react';




const UzdTiwnsForm = (props) => {

  const [formStatus, setFormStatus] = useState({notification: props.notificationFromParent});
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues({...values, [e.target.id]:e.target.value})
    setFormStatus({notification:{kind:"warning", displayText:"Внимание! Незапазени промени!", asOf:new Date()}}) 
  }

  return (
    <Form>
      <div className="bx--grid bx--grid--full-width">

        <div className="bx--row bx--row-padding">
          <div className="bx--col">
            <h2 className='exam-title'>УЛТРАЗВУКОВА ПPЕНАТАЛНА ДИАГНОСТИКА - БЛИЗНАЦИ</h2><hr></hr>
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6 bx--col-xlg-5  bx--col-max-4">
            <DatePicker dateFormat="d/m/Y" datePickerType="single">
              <DatePickerInput id="prm" placeholder="dd/mm/yyyy" labelText="Последна редовна меструация"
                type="text" onSelect={handleChange}
              />
            </DatePicker>
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6 bx--col-xlg-5 bx--col-max-4">
            <DatePicker dateFormat="d/m/Y" datePickerType="single">
              <DatePickerInput
                id="date"
                placeholder="dd/mm/yyyy"
                labelText="Дата УЗИ"
                type="text" onSelect={handleChange}
              />
            </DatePicker>
          </div>
          <div className="bx--col-sm-2 bx--col-md-2 bx--col-lg-3 bx--col-xlg-2 bx--col-max-2">
            <TextInput
              id="gv-po-prm"
              invalidText="A valid value is required"
              labelText="ГВ по ПРМ"
              placeholder="г.с. + д" onChange={handleChange}
            />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6 bx--col-xlg-5  bx--col-max-4">
            <DatePicker dateFormat="d/m/Y" datePickerType="single">
              <DatePickerInput
                id="vtr"
                placeholder="dd/mm/yyyy"
                labelText="Вероятен термин на разждане"
                type="text" onSelect={handleChange}
              />
            </DatePicker>
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6 bx--col-xlg-5 bx--col-max-4">
            <DatePicker dateFormat="d/m/Y" datePickerType="single">
              <DatePickerInput
                id="korigiran-vtr"
                placeholder="dd/mm/yyyy"
                labelText="Коригиран ВТР"
                type="text" onSelect={handleChange}
              />
            </DatePicker>
          </div>
          <div className="bx--col-sm-2 bx--col-md-2 bx--col-lg-3 bx--col-xlg-2 bx--col-max-2">
            <TextInput
              id="age"
              invalidText="A valid value is required"
              labelText="Години"
              placeholder="" onChange={handleChange}
            />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput
              id="anamneza"
              invalidText="A valid value is required"
              labelText="Акушерска анамнеза"
              placeholder="" onChange={handleChange}
            />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 bx--col-max-4">
            <TextInput
              id="obremenenost"
              invalidText="A valid value is required"
              labelText="Фамилна обремененост"
              placeholder="" onChange={handleChange}
            />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput
              id="predlezhanie"
              invalidText="A valid value is required"
              labelText="Предлежание"
              placeholder="" onChange={handleChange}
            />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 bx--col-max-4">
            <TextInput
              id="dvizhenie-na-ploda"
              invalidText="A valid value is required"
              labelText="Движение на плода"
              placeholder="" onChange={handleChange}
            />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput
              id="placenta"
              invalidText="A valid value is required"
              labelText="Плацента"
              placeholder="" onChange={handleChange}
            />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-12 bx--col-xlg-12 bx--col-max-12">
            <TextInput
              id="papna-vrav"
              invalidText="A valid value is required"
              labelText="Пъпна връв"
              placeholder="" onChange={handleChange}
            />
          </div>
        </div>

        <div className="bx--row ">
          <div className="bx--col">
            <Tile>
              <h6 className=''>Близнак 1</h6>
              <div className="bx--row ">
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-8 bx--col-xlg-8  bx--col-max-8">
                  <TextInput
                    id="sex-1"
                    invalidText="A valid value is required"
                    labelText="Пол"
                    placeholder="" onChange={handleChange}
                  />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-8 bx--col-xlg-8 bx--col-max-8">
                  <TextInput
                    id="heart-rate-1"
                    invalidText="A valid value is required"
                    labelText="Сърдечна честота"
                    placeholder="" onChange={handleChange}
                  />
                </div>
              </div>
            </Tile>
          </div>

          <div className="bx--col">
            <Tile>
              <h6 className=''>Близнак 2</h6>
              <div className="bx--row ">
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-8 bx--col-xlg-8  bx--col-max-8">
                  <TextInput
                    id="sex-2"
                    invalidText="A valid value is required"
                    labelText="Пол"
                    placeholder="" onChange={handleChange}
                  />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-8 bx--col-xlg-8 bx--col-max-8">
                  <TextInput
                    id="heart-rate-2"
                    invalidText="A valid value is required"
                    labelText="Сърдечна честота"
                    placeholder="" onChange={handleChange}
                  />
                </div>
              </div>
            </Tile>
          </div>
        </div>

        <div className="bx--row">
          <div className="bx--col">
            <Tile>
              <h6 className='exam-subtitle'>Биометрия</h6>
              <div className="bx--row bx--row-padding">
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="bpd-1" invalidText="A valid value is required" labelText="BPD[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="ofd-1" invalidText="A valid value is required" labelText="OFD[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="hc-1" invalidText="A valid value is required" labelText="HC[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="vp-1" invalidText="A valid value is required" labelText="Vp[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="tcd-1" invalidText="A valid value is required" labelText="TCD[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="cm-1" invalidText="A valid value is required" labelText="CM[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="nf-1" invalidText="A valid value is required" labelText="NF[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="nb-1" invalidText="A valid value is required" labelText="NB[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="apad-1" invalidText="A valid value is required" labelText="APAD[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="tad-1" invalidText="A valid value is required" labelText="TAD[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="ac-1" invalidText="A valid value is required" labelText="AC[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="fl-1" invalidText="A valid value is required" labelText="FL[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="efw-1" invalidText="A valid value is required" labelText="EFW[gr.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="la-1" invalidText="A valid value is required" labelText="LA" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="lc-1" invalidText="A valid value is required" labelText="LC" placeholder="" onChange={handleChange} />
                </div>
              </div>
            </Tile>
          </div>

          <div className="bx--col">
            <Tile>
              <h6 className='exam-subtitle'>Биометрия</h6>
              <div className="bx--row bx--row-padding">
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="bpd-2" invalidText="A valid value is required" labelText="BPD[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="ofd-2" invalidText="A valid value is required" labelText="OFD[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="hc-2" invalidText="A valid value is required" labelText="HC[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="vp-2" invalidText="A valid value is required" labelText="Vp[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="tcd-2" invalidText="A valid value is required" labelText="TCD[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="cm-2" invalidText="A valid value is required" labelText="CM[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="nf-2" invalidText="A valid value is required" labelText="NF[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="nb-2" invalidText="A valid value is required" labelText="NB[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="apad-2" invalidText="A valid value is required" labelText="APAD[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="tad-2" invalidText="A valid value is required" labelText="TAD[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="ac-2" invalidText="A valid value is required" labelText="AC[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="fl-2" invalidText="A valid value is required" labelText="FL[mm-г.с.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="efw-2" invalidText="A valid value is required" labelText="EFW[gr.]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="la-2" invalidText="A valid value is required" labelText="LA" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="lc-2" invalidText="A valid value is required" labelText="LC" placeholder="" onChange={handleChange} />
                </div>
              </div>
            </Tile>
          </div>
        </div>

        <div className="bx--row">
          <div className="bx--col">
            <Tile>
              <h6 className='exam-subtitle'>Анатомия</h6>
              <div className="bx--row bx--row-padding">
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="head-1" invalidText="A valid value is required" labelText="Глава" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="brain-1" invalidText="A valid value is required" labelText="Мозък" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="face-1" invalidText="A valid value is required" labelText="Лице" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="neck-skin-1" invalidText="A valid value is required" labelText="Шия/кожа" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="chest-1-1" invalidText="A valid value is required" labelText="Гр. стълб" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="chest-2-1" invalidText="A valid value is required" labelText="Гр. кош" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="heart-1" invalidText="A valid value is required" labelText="Сърце" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="belly-1" invalidText="A valid value is required" labelText="Корем" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="kidny-1" invalidText="A valid value is required" labelText="Бъбреци" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="legs-1" invalidText="A valid value is required" labelText="Крайници" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="skeleton-1" invalidText="A valid value is required" labelText="Скелет" placeholder="" onChange={handleChange} />
                </div>
              </div>
              <div className="bx--row bx--row-padding">
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="dex-pi-1" invalidText="A valid value is required" labelText="A. ut. Dex PI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="dex-ri-1" invalidText="A valid value is required" labelText="A. ut. Dex RI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="sin-pi-1" invalidText="A valid value is required" labelText="A. ut. Sin PI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="sin-ri-1" invalidText="A valid value is required" labelText="A. ut. Sin RI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="umb-pi-1" invalidText="A valid value is required" labelText="A. Umb. PI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="umb-ri-1" invalidText="A valid value is required" labelText="A. Umb. RI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="cma-pi-1" invalidText="A valid value is required" labelText="CMA PI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="cpr-1" invalidText="A valid value is required" labelText="CPR" placeholder="" onChange={handleChange} />
                </div>
              </div>
              <div className="bx--row bx--row-padding">
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="cma-psv-1" invalidText="A valid value is required" labelText="CMA PSV[mm/sec]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="duc-ven-1" invalidText="A valid value is required" labelText="Duc. Ven.[mm/sec]" placeholder="" onChange={handleChange} />
                </div>
              </div>
            </Tile>
          </div>

          <div className="bx--col">
            <Tile>
              <h6 className='exam-subtitle'>Анатомия</h6>
              <div className="bx--row bx--row-padding">
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="head-2" invalidText="A valid value is required" labelText="Глава" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="brain-2" invalidText="A valid value is required" labelText="Мозък" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="face-2" invalidText="A valid value is required" labelText="Лице" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="neck-skin-2" invalidText="A valid value is required" labelText="Шия/кожа" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="chest-1-2" invalidText="A valid value is required" labelText="Гр. стълб" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="chest-2-2" invalidText="A valid value is required" labelText="Гр. кош" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="heart-2" invalidText="A valid value is required" labelText="Сърце" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="belly-2" invalidText="A valid value is required" labelText="Корем" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="kidny-2" invalidText="A valid value is required" labelText="Бъбреци" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="legs-2" invalidText="A valid value is required" labelText="Крайници" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
                  <TextInput id="skeleton-2" invalidText="A valid value is required" labelText="Скелет" placeholder="" onChange={handleChange} />
                </div>
              </div>
              <div className="bx--row bx--row-padding">
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="dex-pi-2" invalidText="A valid value is required" labelText="A. ut. Dex PI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="dex-ri-2" invalidText="A valid value is required" labelText="A. ut. Dex RI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="sin-pi-2" invalidText="A valid value is required" labelText="A. ut. Sin PI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="sin-ri-2" invalidText="A valid value is required" labelText="A. ut. Sin RI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="umb-pi-2" invalidText="A valid value is required" labelText="A. Umb. PI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="umb-ri-2" invalidText="A valid value is required" labelText="A. Umb. RI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="cma-pi-2" invalidText="A valid value is required" labelText="CMA PI" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="cpr-2" invalidText="A valid value is required" labelText="CPR" placeholder="" onChange={handleChange} />
                </div>
              </div>
              <div className="bx--row bx--row-padding">
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="cma-psv-2" invalidText="A valid value is required" labelText="CMA PSV[mm/sec]" placeholder="" onChange={handleChange} />
                </div>
                <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
                  <TextInput id="duc-ven-2" invalidText="A valid value is required" labelText="Duc. Ven.[mm/sec]" placeholder="" onChange={handleChange} />
                </div>
              </div>
            </Tile>
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col">
            <TextArea id="comment" invalidText="A valid value is required" labelText="Коментар" placeholder="" onChange={handleChange} />
          </div>
        </div>

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
            <Button kind="primary" onClick={() => { props.onSubmit(values) }}>Запис</Button>
            <Button kind="secondary" >Печат</Button>
          </div>
          {(() => {
            if (props.notificationFromParent && props.notificationFromParent.asOf>formStatus.notification.asOf)
              setFormStatus({notification: props.notificationFromParent});
            let notification = formStatus.notification;

            //let notification = props.notificationFromParent.asOf>formStatus.notification.asOf?props.notificationFromParent:formStatus.notification;
            
            if (!notification || !notification.displayText )
              return false;
            
            if (notification.displayText.length === 0)
              return false;

            return (
              <div className="bx-col">
                <InlineNotification
                  hideCloseButton lowContrast
                  kind={notification.kind || "info"}
                  subtitle={notification.displayText}
                  title=""
                />
              </div>
            )
          })()}

        </div>
      </div>
    </Form>
  )
}

export default UzdTiwnsForm;