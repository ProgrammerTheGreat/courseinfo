import React, { useState } from 'react';

const HeaderOne = () => {
  return (
    <>
      <h1>Give us some feedback</h1>
    </>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}


const StatisticLine = ({ text, value }) => {
  return (
        <tr>
          <td>{text}: {value}</td>
        </tr>
  );
}

const HeaderTwo = () => {
  return (
    <>
      <h2>Checkout our stats below</h2>
    </>
  )
}

const Stats = (props) => {
  const total = props.good + props.neutral + props.bad;
  const average = total === 0 ? 0 : (props.good - props.bad) / total;
  const positivePercentage = total === 0 ? 0 : (props.good / total) * 100;

  if (props.good || props.neutral || props.bad !=0) {
    return(
    <>
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={isNaN(average) ? 0 : average} />
      <StatisticLine text="Positive %" value={isNaN(positivePercentage) ? 0 : positivePercentage} />
    </>
    )
  } else {
    return(
      <>
        <p>No feedback given</p>
      </>
    )
  }
}

const TheQuote = (props) => {
  return (
    <>
      <p>{props.quote}</p>
      <p>The quote has {props.votes} votes.</p>
    </>
  )
}

const NextAnecdote = (props) => {
  return (
    <>
      <button onClick={props.handleAnecdote}>{props.text}</button>
    </>
  )
}

const VoteAnecdote = (props) => {
  return (
    <>
      <button onClick={props.handleVote}>{props.text}</button>
    </>
  )
}

const HeaderThree = () => {
  return (
    <>
      <h2>Quote with most votes</h2>
    </>
  )
}


const App = () => {
    const anecdotes = [
    '1st quote',
    '2nd quote',
    '3rd quote',
    '4th quote',
    '5th quote',
    '6th quote',
    '7th quote',
    '8th quote'
    ]

    const [countGood, setCountGood] = useState(0);
    const [countNeutral, setCountNeutral] = useState(0);
    const [countBad, setCountBad] = useState(0);
    const [countTotal, setCountAll] = useState(0);
    const [countAverage, setCountAverage] = useState(0);
    const [countPositive, setCountPositive] = useState(0);
    const [selected, setSelected] = useState(null)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

    
    const handleGoodClick = () => setCountGood(countGood + 1);
    const handleNeutralClick = () => setCountNeutral(countNeutral + 1);
    const handleBadClick = () => setCountBad(countBad + 1);


    const handleAnecdote = () => {
      const randomIndex = Math.floor(Math.random() * anecdotes.length);
      setSelected(randomIndex);
      console.log("Selected anecdote index:", randomIndex);
    }
    
    const handleVote = () => {
      const newVotes = [...votes];
      newVotes[selected]++;
      setVotes(newVotes);
      console.log("Votes after voting:", newVotes);
    }
    
    

  return (
    <div>
      <HeaderOne />
      <>
        <Button handleClick={handleGoodClick} text="Good" />
        <Button handleClick={handleNeutralClick} text="Neutral" />
        <Button handleClick={handleBadClick} text="Bad" />
      </>
      <HeaderTwo />
      <Stats good={countGood} neutral={countNeutral} bad={countBad} />
      <hr />
      <NextAnecdote handleAnecdote={handleAnecdote} text="Next quote"/>
      
      {/*
      {selected !== null && (
        <>
          <p>{anecdotes[selected]}</p>
          <p>The quote has {votes[selected]} votes.</p>
        </>
      )}
      */}

      {selected !== null && (
        <TheQuote quote={anecdotes[selected]} votes={votes[selected]} />
      )}
      
            
      <VoteAnecdote handleVote={handleVote} text="Vote"/>
      <HeaderThree />
    </div>
  ); 
} 

export default App