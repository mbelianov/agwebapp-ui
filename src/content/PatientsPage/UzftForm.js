import React, { useState } from 'react';

import {
 Form, Button, DatePicker, DatePickerInput, TextInput
} from 'carbon-components-react';



const UzftForm = (props) => (

  <Form>
    <div className="bx--grid bx--grid--full-width">

      <div className="bx--row bx--row-padding">
        <div className="bx--col">
          <h2 className='exam-title'>УЛТРАЗВУКОВ ПЪРВИ ТРИМЕСТЪР</h2><hr></hr>
        </div>
      </div>

      <div className="bx--row bx--row-padding">
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6 bx--col-xlg-5  bx--col-max-4">
          <DatePicker dateFormat="d/m/Y" datePickerType="single">
            <DatePickerInput id="prm" placeholder="dd/mm/yyyy"  labelText="Последна редовна меструация" type="text" />
          </DatePicker>
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6 bx--col-xlg-5 bx--col-max-4">
          <DatePicker dateFormat="d/m/Y" datePickerType="single">
            <DatePickerInput id="date" placeholder="dd/mm/yyyy" labelText="Дата УЗИ" type="text" />
          </DatePicker>
        </div>
        <div className="bx--col-sm-2 bx--col-md-2 bx--col-lg-3 bx--col-xlg-2 bx--col-max-2">
          <TextInput id="gv-po-prm" invalidText="A valid value is required" labelText="ГВ по ПРМ" placeholder="г.с. + д" />
        </div>
      </div>

      <div className="bx--row bx--row-padding">
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6 bx--col-xlg-5  bx--col-max-4">
          <DatePicker dateFormat="d/m/Y" datePickerType="single">
            <DatePickerInput id="vtr" placeholder="dd/mm/yyyy" labelText="Вероятен термин на разждане" type="text" />
          </DatePicker>
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6 bx--col-xlg-5 bx--col-max-4">
          <DatePicker dateFormat="d/m/Y" datePickerType="single">
            <DatePickerInput id="korigiran-vtr" placeholder="dd/mm/yyyy" labelText="Коригиран ВТР" type="text" />
          </DatePicker>
        </div>
        <div className="bx--col-sm-2 bx--col-md-2 bx--col-lg-3 bx--col-xlg-2 bx--col-max-2">
          <TextInput id="age" invalidText="A valid value is required" labelText="Години" placeholder="" />
        </div>
             
      </div>

      <div className="bx--row bx--row-padding">
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
          <TextInput
            id="placenta"
            invalidText="A valid value is required"
            labelText="Плацента"
            placeholder=""
          />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 bx--col-max-4">
          <TextInput id="obremenenost" invalidText="A valid value is required" labelText="Фамилна обремененост" placeholder="" />
        </div> 
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
          <TextInput id="anamneza" invalidText="A valid value is required" labelText="Акушерска анамнеза" placeholder=""  />
        </div> 
        <div className="bx--col-sm-4 bx--col-md-3 bx--col-lg-3 bx--col-xlg-3 bx--col-max-3">
          <TextInput  id="heart-rate" invalidText="A valid value is required"  labelText="Сърдечна честота"  placeholder="" />
        </div> 
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-12 bx--col-xlg-12 bx--col-max-12">
          <TextInput id="papna-vrav" invalidText="A valid value is required" labelText="Пъпна връв" placeholder="" />
        </div>

      </div>

      <div className="bx--row bx--row-padding">
        <div className="bx--col">
          <h5 className='exam-subtitle'>Биометрия</h5>
        </div>
      </div>

      <div className="bx--row bx--row-padding">
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="crl" invalidText="A valid value is required" labelText="CRL[mm-г.с.]" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="nt" invalidText="A valid value is required" labelText="NT" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="nb" invalidText="A valid value is required" labelText="NB" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="puls" invalidText="A valid value is required" labelText="Puls[уд/мин]" placeholder="" />
        </div>
      </div>

      <div className="bx--row bx--row-padding">
        <div className="bx--col-sm-4 bx--col-md-2 bx--col-lg-2 bx--col-xlg-2  bx--col-max-2">
          <TextInput id="aritmia" invalidText="A valid value is required" labelText="Аритмия" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-2 bx--col-lg-2 bx--col-xlg-2  bx--col-max-2">
          <TextInput id="regur" invalidText="A valid value is required" labelText="Регуритация" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-2 bx--col-lg-2 bx--col-xlg-2  bx--col-max-2">
          <TextInput id="venosus" invalidText="A valid value is required" labelText="D.Venosus" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-2 bx--col-lg-2 bx--col-xlg-2  bx--col-max-2">
          <TextInput id="fikus" invalidText="A valid value is required" labelText="Фикус" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-2 bx--col-lg-2 bx--col-xlg-2  bx--col-max-2">
          <TextInput id="arteria" invalidText="A valid value is required" labelText="Артерия" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-2 bx--col-lg-2 bx--col-xlg-2  bx--col-max-2">
          <TextInput id="chor" invalidText="A valid value is required" labelText="Chorioideus" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-2 bx--col-lg-2 bx--col-xlg-2  bx--col-max-2">
          <TextInput id="exo" invalidText="A valid value is required" labelText="Exomphalos" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-2 bx--col-lg-2 bx--col-xlg-2  bx--col-max-2">
          <TextInput id="mega" invalidText="A valid value is required" labelText="Мегацистис" placeholder="" />
        </div>                   
      </div>

      <div className="bx--row bx--row-padding">
        <div className="bx--col-sm-4 bx--col-md-4 ">
          <TextInput id="placenta" invalidText="A valid value is required" labelText="Плацента" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 ">
          <TextInput id="vrav" invalidText="A valid value is required" labelText="Пъпна връв инсерция" placeholder="" />
        </div>
      </div>

      <div className="bx--row bx--row-padding">
        <div className="bx--col">
          <h5 className='exam-subtitle'>Анатомия на плода</h5>
        </div>
      </div>

      <div className="bx--row bx--row-padding">
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="head" invalidText="A valid value is required" labelText="Глава" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="brain" invalidText="A valid value is required" labelText="Мозък" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="face" invalidText="A valid value is required" labelText="Лице" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="neck-skin" invalidText="A valid value is required" labelText="Шия/кожа" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="chest-1" invalidText="A valid value is required" labelText="Гр. стълб" placeholder="" />
        </div>
      </div>

      <div className="bx--row bx--row-padding">
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="chest-2" invalidText="A valid value is required" labelText="Гр. кош" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="heart" invalidText="A valid value is required" labelText="Сърце" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="belly" invalidText="A valid value is required" labelText="Корем" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="kidny" invalidText="A valid value is required" labelText="Бъбреци" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="legs" invalidText="A valid value is required" labelText="Крайници" placeholder="" />
        </div>
      </div>

      <div className="bx--row bx--row-padding">
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
          <TextInput id="skeleton" invalidText="A valid value is required" labelText="Скелет" placeholder="" />
        </div>
      </div>

      <div className="bx--row bx--row-padding">
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
          <TextInput id="dex-pi" invalidText="A valid value is required" labelText="A. ut. Dex PI" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
          <TextInput id="dex-ri" invalidText="A valid value is required" labelText="A. ut. Dex RI" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
          <TextInput id="sin-pi" invalidText="A valid value is required" labelText="A. ut. Sin PI" placeholder="" />
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
          <TextInput id="sin-ri" invalidText="A valid value is required" labelText="A. ut. Sin RI" placeholder="" />
        </div>
      </div>

      <div className="bx--row bx--row-padding">
        <div className="bx--col">
          <TextInput id="comment" invalidText="A valid value is required" labelText="Коментар" placeholder="" />
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

      <div className="bx--row">
        <div className="bx--col ">
          <Button kind="primary" tabIndex={0} type="submit">Submit</Button>
        </div>
      </div>
    </div>
  </Form>
)

export default UzftForm;