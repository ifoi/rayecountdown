import logo from './rayCountdown_twitter.jpg';
import './App.css';
import Countdown ,{ zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';
import  {TwitterTweetEmbed, TwitterMentionButton, TwitterTimelineEmbed } from 'react-twitter-embed';  


const renderer = ({ days, hours, minutes, seconds, milliseconds }) => (
  <span style={{fontWeight: 'bold', color: "red"}} >
     {zeroPad(days)} Days : {zeroPad(hours)} hours : {zeroPad(minutes)} minutes : {zeroPad(seconds) } seconds :  {milliseconds } milliseconds
  </span>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="image of Zack's post" />

        <TwitterTweetEmbed  tweetId={'1567755780413161472'} />

  
        <p>
          R.A plans to level up by Dec 31st   <p/>
   They asked us to keep them accountable.
            so I setup the R.A  level up Countdown.
        </p>
        <Countdown
        date={new Date("Dec 31 2022" )}
        intervalDelay={0}
        precision={3}
        renderer={renderer}
        />
        <a
          className="App-link"
          href="https://github.com/ifoi/"
          target="_blank"
          rel="noopener noreferrer"
        >
           Created by Ifo  <TwitterMentionButton
    screenName={'afrohealer'}
/>
           </a>
   
      </header>
      <main>
      
      </main>
    </div>
  );
}

export default App;
