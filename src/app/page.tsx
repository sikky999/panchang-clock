'use client';
import Image from 'next/image';
import { FlapDisplay, Presets } from 'react-split-flap-effect';
import Button from '@mui/material/Button';
import React from 'react';
const { MhahPanchang } = require('mhah-panchang');
const obj = new MhahPanchang();

export default function Home() {
  let time = new Date().toLocaleTimeString();
  let [ctime, setCTime] = React.useState('10');
  const [tithi, setthithi] = React.useState('tithi');
  const [Paksha, setPaksha] = React.useState('paksha');
  const [panchang, setpanchang] = React.useState('panchang');
  const [nakshtra, setnakshtra] = React.useState('nakshtra');
  const [sunRise, setsunRise] = React.useState('sun');

  React.useEffect(() => {
    const updateTime = () => {
      time = new Date().toLocaleTimeString();
      setCTime(time);
    };
    const sunRise = obj.sunTimer(new Date(), 12.972, 77.594);
    setsunRise(sunRise.sunRise.toLocaleTimeString());
    setInterval(updateTime, 1000);
    let mhahObj = obj.calculate(new Date());
    setthithi(mhahObj.Tithi.name_en_IN);
    setPaksha(mhahObj.Paksha?.name_en_IN);
    setnakshtra(mhahObj.Nakshatra?.name_en_IN);
  });

  return (
    <div>
      <div>
        <FlapDisplay
          chars={Presets.ALPHANUM + ',!'}
          length={45}
          value={ctime}
          className="flap"
        />
      </div>
      <div>
        <FlapDisplay
          chars={Presets.ALPHANUM + ',!'}
          length={45}
          value={tithi}
          className="flap"
        />
        <FlapDisplay
          chars={Presets.ALPHANUM + ',!'}
          length={45}
          value={Paksha}
          className="flap"
        />
        <FlapDisplay
          chars={Presets.ALPHANUM + ',!'}
          length={45}
          value={nakshtra}
          className="flap"
        />
        <FlapDisplay
          chars={Presets.ALPHANUM + ',!'}
          length={45}
          value={`Sun Rise Time: ${sunRise}`}
          className="flap"
        />
      </div>
    </div>
  );
}
