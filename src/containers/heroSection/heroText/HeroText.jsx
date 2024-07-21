import React from 'react'

import './heroText.css'

const HeroText = () => {

  const [wordNum,setWordNum] = React.useState(0)
  const [wordWritten,setWordWritten] = React.useState(true)
  const [wordIndex,setWordIndex] = React.useState(0)
  const [displyWord, setDisplayWord] = React.useState('')
  const words = ['Anything!', 'Anywhere!', 'Anytime!']

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (wordWritten) {
        setWordIndex(prevWordIndex => prevWordIndex+1)
        if (wordIndex+1 === words[wordNum].length){
          setWordWritten(prevWordWritten => !prevWordWritten)
        }
      }else{
        setWordIndex(prevWordIndex => prevWordIndex-1)
        if (wordIndex === 1){
          setWordWritten(prevWordWritten => !prevWordWritten)
          setWordNum(prevWordNum => prevWordNum===words.length-1 ? 0 : prevWordNum+1)
        }        
      }
      
      setDisplayWord(words[wordNum].slice(0,wordIndex))
      
    }, 200);

    return () => clearInterval(interval);
  }, [wordIndex,wordNum,wordWritten,displyWord]);

  return (
    <div className='hero--container--textarea'>
      <h1>Just Rank It!</h1>
      <p>Rank <span>{displyWord}</span></p>
    </div>
  )
}

export default HeroText
