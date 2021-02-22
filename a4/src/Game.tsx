import React, { useEffect, useState } from 'react'; //useEffect to update document
import History from './History';

type Turn = {
    question: string,
    answer: string
}

const Game = () => {
    const ominousAnswers = [
        "Go for it.", "Bah, humbug.", "Don't mind it.", "Focus on the present.",
        "Certainly.", "Yes.", "It is unlikely.", "Probably.", "It is uncertain.",
        "You have chosen.", "Denial is futile.", "The way will reveal itself.", "Doubt.",
        "It is what it is.", "Signs point to maybe.", "Perhaps", "Whatever.",
        "100%.", "Time heals all wounds", "Look away; it lies in wait.",
        "Fate whispers to you.", "Some are not so lucky.", "They are not what they seem.",
        "You may be lost, but you shall not wait.", "Be ready.", "You ask too many questions.",
        "Fortune favours the prepared.", "Time will answer your question.", "Sometimes.",
        "Try again.", "Ask again later.", "I cannot let you know right now.",
        "It gets better.", "Have hope.", "It speaks for itself.", "Call it a day.",
        "The future beckons.", "There is a time and place for everything.", "...", "...!"
      ];

      const [answered, initA] = useState("");
      const [turns, initTurns] = useState<Turn[]>([]);
    
    const ask = (event: any) => {
        event.preventDefault();
        if (event.currentTarget[0].value.endsWith('?') && event.currentTarget[0].value.length != 0) {
            const a_tag = Math.floor(Math.random() * (ominousAnswers.length - 1));
            initTurns([{
                question: event.currentTarget[0].value,
                answer: ominousAnswers[a_tag]}, ...turns]);
            initA(ominousAnswers[a_tag]);
            event.currentTarget.reset();
        } else { //question does not contain "?" or is empty
            alert("Please ask a question that has at least one character and ends in a question mark.")
        }
    }

    //document # of questions asked
    useEffect(() => {
    document.title = "Number of questions asked: ${turns.length}"}, [turns]);
    
    return (
        <div>
            <h1>The Amazing, Slightly Ominous Magic 8 Ball!</h1>
            <h3> {`Number of questions asked: ${turns.length}`} </h3>
                <div>
                    <form className = "question" onSubmit = {ask}>
                        <input type = 'text' placeholder = "Ask a question..."/>
                        <button type = "submit">Ask!</button>
                    </form>

                    <img src = "https://barrettstudio.com/wp-content/uploads/2020/01/Magic-8-Ball-New2.jpg" />
                    <h2 className = "answer">{answered}</h2>
                </div>
                <History asked = {turns} />
           
        </div>
    );
}

export default Game;