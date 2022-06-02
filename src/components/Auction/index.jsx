import React from 'react';
import './style.css';
import Corvette from '/src/components/Auction/auto.jpeg';
import Winner from '/src/components/Auction/winner.png';
import { BsShare } from 'react-icons/bs';
import { ImEye } from 'react-icons/im';
import { GiPayMoney } from 'react-icons/gi';

export const Auction = () => (
  <div className="auction__container">
    <div className="auction__site-share">
      <h2 className="auction__site-title">Aukce XY</h2>

      <button className="auction__share-btn">
        {' '}
        <BsShare /> {`Sdílet`.toUpperCase()}
      </button>
    </div>
    <p className="auction__timekeeper">
      0 dní 10 hodin 15 minut 43 sekund do konce
    </p>
    <img className="auction__pic-item1" alt="Děd s corvettou" src={Corvette} />
    <div className="auction__creator-info">
      <p id="creator">Karel Okurka</p>
      <p id="added">20. 5. 2022</p>
    </div>

    <h3 className="auction__amount-h">Aktuální částka</h3>
    <div className="auction__amount-bid">
      <p className="auction__amountnow"> 155 569 Kč</p>

      <div className="auction__amount-thingie">
        <input type="range" id="Kc" name="Kc"></input>
        <label> Kč</label>{' '}
      </div>
      <span>
        <button className="auction__bid-btn">{'Přihodit'.toUpperCase()}</button>
      </span>
    </div>
    <div className="auction__ppl-stats">
      <p className="auction__pplwatching">
        {' '}
        <ImEye /> sleduje 255 lidí
      </p>

      <p className="auction__pplbidding">
        {' '}
        <GiPayMoney /> přihazuje 25 lidí
      </p>
    </div>
    <h3 className="auction__pdecript-h">Popis projektu</h3>
    <p className="auction__pdecript-text">
      Rakovnický ornitologický spolek Fénix Na pronajatém pozemku vzniká koutek
      pro volně žijící ptáky, motýly, hmyz a drobné savce a plazy. Pomozte nám
      jej vytvořit a za to Vám nabízíme návštěvu s průvodcem a třeba i společné
      opékání špekáčků!{' '}
    </p>
    <p className="auction__pdecript-text">
      Na pronajatém pozemku o výměře 5 hektarů vzniká lokální ráj pro ptáky. Náš
      ornitologický spolek by rád veřejnosti ukázal během společných vycházek
      pro školy, skauty, teambuildingy a vycházky pro milovníky přírody, že lze
      o krajinu pečovat tak, aby z ní měly užitek obě strany – člověk i příroda.
      Společně vytváříme koutek rozmanité přírody pro ptactvo, hmyz, motýly,
      drobné plazy a savce. Investujeme zde vlastní prostředky členů spolku a z
      daru bychom chtěli zaplatit práce farmáře – úprava a osetí pozemku pestrou
      škálou květnaté louky a políčka se semennými plodinami. vysázíme asi 100
      ovocných stromů a keřů. Také musíme zaplatit dovoz vody na zalévání
      sazenic. Všem dárcům předem děkujeme za jakoukoli částku a zveme Vás do
      Ptačího koutku, který se nachází v srdci CHKO Křivoklátsko – nedaleko obce
      Zbečno.
    </p>
    <h3 className="auction__chat-h">Chat</h3>
    <div className="auction__chat-square"></div>
    <br></br>
    <p style={{ color: 'red' }}>
      /// v případě, že by byla aukce ukončena /// ==>{' '}
    </p>
    <h3 className="auction__end">{'Ukončeno'.toUpperCase()}</h3>
    {/* Koupit/najít obrázek bez vodoznaku */}
    <img className="auction__winner-pic" alt="Aukce příklep" src={Winner} />
    <p className="auction__winner-text">
      Vítězem aukce je XY, předmět byl vydražen za X Kč.{' '}
    </p>
  </div>
);
