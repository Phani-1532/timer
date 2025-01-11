import { useEffect, useState } from 'react';
import './App.css';
import Counter from './Counter';
import Home from './Home';

function App() {
  const endTime = new Date('January 12, 2025 00:00:00').getTime();
  const [currentTime, setCurrentTime] = useState(new Date().getTime())

  const gap = endTime - currentTime

  const seconds = 1000
  const minutes = seconds * 60
  const hours = minutes * 60
  const days = hours * 24

  const remainingDays = Math.floor(gap / days)
  const remainingHours = Math.floor((gap % days) / hours)
  const remainingMinutes = Math.floor((gap % hours) / minutes)
  const remainingSeconds = Math.floor((gap % minutes) / seconds)

  useEffect(() => {
    setTimeout(() => setCurrentTime(new Date().getTime()),1000)
    if (gap === 0) {
      alert('Countdown has ended!');
    }
  },[currentTime])

 return (
    <div>
     <Counter days = {remainingDays} hours = {remainingHours} minutes = {remainingMinutes} seconds = {remainingSeconds} />
    </div>
  );
}

export default App;
