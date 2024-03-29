import { useState } from 'react'
import { QuestionAnswer} from '../questionAnswer'
import {Button } from '../button'
import S from './style.module.css'

const QUESTIONS = [
    {
        id: 1,
        question: 'Qual é o meu nome?',
        answers: ['Miguel', 'Luiz', 'Matheus', 'Ana'],
        correctAnswer: 'Matheus',
    },

    {
        id: 2,
        question: 'Qual é a minha idade ?',
        answers: ['12', '2', '26', '32'],
        correctAnswer: '26',
    },

    {
        id: 3,
        question: 'O que eu sou ?',
        answers: ['Desenvolvedor', 'Médico', 'Eletricista', 'Jogador de futebol'],
        correctAnswer: 'Desenvolvedor',
    },

    {
        id: 4,
        question: 'Quem é Daniel?',
        answers: ['Homen de ferro', 'Super man', 'Homen aranha', 'Homen formiga'],
        correctAnswer: 'Homen formiga',
    },
]

export function Quiz ( ) {
  
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
    const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] = useState(false)

    const handleAnswerQuestion = (event, question, answer) => {
        if (isCurrentQuestionAnswered) {
            return 
        }
        const isCorrectAnswer = question.correctAnswer === answer

        const resultClassName =  isCorrectAnswer ? S.correct : S.incorrect 
        event.currentTarget.classList.toggle(resultClassName)

        if(isCorrectAnswer) {
          setCorrectAnswersCount(correctAnswersCount + 1)

        }

        setIsCurrentQuestionAnswered(true)
}

        const handleNextQuestion = ( ) => {
            if (currentQuestionIndex + 1 < QUESTIONS.length) {
                setCurrentQuestionIndex (index => index + 1)
            }
            setIsCurrentQuestionAnswered (false)
        }

        const currentQuestion = QUESTIONS[currentQuestionIndex]  

    return (
        <div className={S.container}>
            <div className={S.card}>
            <div className={S.quiz}>
               <header className={S.quizHeader}>
                <span className={S.questionCount}>PERGUNTA 1/3</span>
                <p className={S.question}>
                    {currentQuestion.question}
                    </p>
                
                </header> 

               

                <ul className={S.answers}>

                    {currentQuestion.answers.map(answer => (
                        <li key={answer} className={S.listItem}>
                        <QuestionAnswer
                         answer={answer}
                          question={currentQuestion}
                          handleAnswerQuestion={handleAnswerQuestion}
                           />
                    </li>
                    ) )}
                </ul>

                {isCurrentQuestionAnswered && (
                <Button onClick={handleNextQuestion}>Proxima pergunta</Button>)}

            </div>
            </div>
        </div>
    )
}