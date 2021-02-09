import { useState } from 'react';
import icon from '../../assets/img/icon-128.png';

export default function Greetings() {
  const [name] = useState('dev');
  return (
    <div>
      <p>Hello, {name}!</p>
      <img src={icon} alt="extension icon" />
    </div>
  );
}
