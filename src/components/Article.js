import React from "react";

function Time(props) {
    let timer ;
    if (props.minutes < 30 ) {
        let remainder3 = Math.ceil(props.minutes / 3)
        let coffe = "☕️".repeat(remainder3)
        timer = (<small> {props.date} | {coffe} {props.minutes} min read | </small>);
    }
    else if (props.minutes >= 30)  {
        let remainde10 = Math.ceil(props.minutes / 10)
        let bento = "🍱".repeat(remainde10)
        timer = (<small> {props.date} | {bento} {props.minutes} min read | </small>);
    }  
    return(
        timer
    )
    
}

function Article(props) {
    

    const arrayObj = props.posts.map((obj) => {
        return(

        <article key={obj.title} style={{color: "Teal", textAlign : "center"}}> 
            <h3> {obj.title} </h3>
            <Time date={obj.date} minutes={obj.minutes} />
            <p> {obj.preview} </p>
        </article>
        
        )
})


return (
    arrayObj
)
}

export default Article;

