import React,{ useState } from 'react';
import '../style/Quiz.css';

function Quiz(props) {

    const questions =[
        {
            title:"React JS – это...",
            variants:["JavaScript библиотека","Back-end платформа","фреймворк","MVC-фреймворк"],
            correct:0,
        },
        {
            title:"Как обратится к свойству weight?",
            variants:["{prop.weight}","{this.prop.weight}","{props.weight}","{this.props.weight}"],
            correct:3,
        },
        {
            title:"Где правильно передена функция в качестве свойства?",
            variants:["argument={this.someFunction}","argument={this.someFunction ()}","argument={someFunction}","argument={this.someFunction[]}"],
            correct:0,
        },
        {
            title:"Какой метод отвечает за вывод информации через React JS компонент?",
            variants:["react","print","console","render"],
            correct:3,
        },
        {
            title:"От какого класса идет наследование всех компонентов?",
            variants:["ReactJS.Component","ReactComponent","React.Component","ComponentReact"],
            correct:2,
        },
        {
            title:"Чем свойства отличаются от состояний?",
            variants:["Свойства для работы со значениями, состояния для работы с функциями",
            "Состояния можно изменять, свойства нельзя",
            "Свойства можно изменять, состояния нельзя",
            "Состояния для работы со значениями, свойства для работы с функциями"],
            correct:1,
        },
    ]

    const [step,UseStep] = useState(0);
    const question = questions[step];
    const [correct,SetCorrect] = useState(1);

    const onClickVariants = (index)=>{
        UseStep(step+1)

        if(index=== question.correct)
        {
            SetCorrect(correct+1)
        }
    }

    const persent=Math.round(step/questions.length*100);

    const handleClick =(index,step,maxvalue,correct)=>{
        onClickVariants(index)
        props.updateData(step,maxvalue,correct)
    }

  return (
    <div className='mainborder'>
        <div className='progressbar' style={{width:`${persent}%`}}></div>
        <h1>{question.title}</h1>
        <ul className='list'>
            {
            question.variants.map((text,index)=>
            <li onClick={()=>handleClick(index,step,questions.length-1,correct)} key={text}><p>{text}</p></li>)
            }
        </ul>
    </div>
  )
}

export {Quiz}