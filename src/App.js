import React from 'react';
import { useState }  from 'react'
import {useForm} from 'react-hook-form'

import './App.css';

function App() {

  const {register, handleSubmit, formState: { errors }} = useForm();

  const[aardbeien, setAardbeien] = useState(0);
  const[bananen, setBananen] = useState(0);
  const[appels, setAppels] = useState(0);
  const[kiwis, setKiwis] = useState(0);

  function resetCounters() {

    setAardbeien(0);
    setBananen(0);
    setAppels(0);
    setKiwis(0);
  }

  function logOutput(data) {
    console.log(data);
  }


  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <h1>Aardbeien</h1>
        <button
            onClick={() => {setAardbeien(aardbeien -1)}}>
            -
        </button>
            {aardbeien}
          <button
              onClick={() => {setAardbeien(aardbeien +1)}}>
            +
          </button>
        <h1>Bananen</h1>
        <button onClick={() => {setBananen(bananen -1)}}>
          -
        </button>
          {bananen}
        <button
          onClick={() => {setBananen(bananen +1)}}>
          +
        </button>
        <h1>Appels</h1>
        <button
          onClick={() => {setAppels(appels -1)}}>
          -
        </button>
          {appels}
        <button
          onClick={() => {setAppels(appels +1)}}>
            +
        </button>
        <h1>Kiwi's</h1>
        <button
            onClick={() => {setKiwis(kiwis -1)}}>
            -
        </button>
            {kiwis}
        <button
            onClick={() => {setKiwis(kiwis +1)}}>
            +
        </button>
        <button
          onClick={resetCounters}>
          Reset
        </button>
        <div>

            <form onSubmit={handleSubmit(logOutput)}>
              <label htmlFor="Voornaam">Voornaam</label>
              <input
                  type="text"
                  id="Voornaam"
                  name="Voornaam"
                  {...register("Voornaam", {
                    required: {
                      value: true,
                      message: 'Dit veld mag niet leeg zijn',
                    }
                  })}
              />
              {errors.Voornaam && <p>{errors.Voornaam.message}</p>}
              <label htmlFor="Achternaam">Achternaam</label>
              <input
                  type="text"
                  id="Achternaam"
                  name="Achternaam"
                  {...register("Achternaam", {
                    required: {
                      value: true,
                      message: 'Dit veld mag niet leeg zijn',
                    }
                  })}
              />
              {errors.Achternaam && <p>{errors.Achternaam.message}</p>}
              <label htmlFor="Leeftijd">Leeftijd</label>
              <input
                  type="number"
                  id="Leeftijd"
                  name="Leeftijd"
                  {...register("Leeftijd", {
                    required: {
                      value: true,
                      message: 'Dit veld mag niet leeg zijn',
                    }
                  })}
              />
              {errors.Leeftijdnaam && <p>{errors.Leeftijdnaam.message}</p>}
              <label htmlFor="postcode">Postcode</label>
              <input
                  type="text"
                  id="Postcode"
                  name="Postcode"
                  {...register("Postcode", {
                    required: {
                      value: true,
                      message: 'Dit veld mag niet leeg zijn',
                    }
                  })}
              />
              {errors.Postcode && <p>{errors.Postcode.message}</p>}
              <label htmlFor="Bezorgfrequentie">BezorgFrequentie:

              <input
                  type="radio"
                  value="Iedere week"
                  id="iedere_week"
                  {...register("iedere_week", {
                    required: {
                      value: true,
                      message: 'Dit veld mag niet leeg zijn',
                    }
                  })}
              />
                {errors.iedere_week && <p>{errors.iedere_week.message}</p>}
                <label htmlFor="iedere_week">Iedere week</label>
              <input
                  type="radio"
                  value="om_de_week"
                  id="om_de_week"
                  {...register("om_de_week", {
                    required: {
                      value: true,
                      message: 'Dit veld mag niet leeg zijn',
                    }
                  })}
              />
                {errors.om_de_week && <p>{errors.om_de_week.message}</p>}
                <label htmlFor="om-de-week">Om de week</label>
              <input
                  type="radio"
                  value="Iedere maand"
                  id="iedere_maand"
                  {...register("iedere_maand", {
                    required: {
                      value: true,
                      message: 'Dit veld mag niet leeg zijn',
                    }
                  })}
              />
                {errors.iedere_maand && <p>{errors.iedere_maand.message}</p>}
                <label htmlFor="iedere-maand">Iedere maand</label>
              <input
                  type="radio"
                  value="Anders"
                  id="anders"
                  {...register("anders", {
                    required: {
                      value: true,
                      message: 'Dit veld mag niet leeg zijn',
                    }
                  })}
              />
                {errors.anders && <p>{errors.anders.message}</p>}
                <label htmlFor="anders">Anders</label>
              </label>
              <label htmlFor="opmerking">Opmerking</label>
              <textarea
                  id="opmerking"
                  {...register("opmerking")}
              />
              <input
                  type="checkbox"
                  id="terms"
                  {...register("terms", {
                    required: {
                      value: true,
                      message: 'Je moet akkoord gaan met de voorwaarden voordat je kunt bestellen.',
                    }
                  })}
              />
              {errors.terms && <p>{errors.terms.message}</p>}
              <label htmlFor="terms">Ik ga akkoord met de voorwaarden</label>
              <input
                  type="Submit"
              />

            </form>

        </div>

    </>
  );
}

export default App;
