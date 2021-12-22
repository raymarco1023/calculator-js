function calculator(){
    console.log("Calculator function");
    let number1=Number(prompt("Enter number: "));
    let number2=Number(prompt("Enter number: "));

    let sum,sub,mul,div;
    sum=number1+number2;
    sub=number1-number2;
    mul=number1*number2;
    div=number1/number2;

    console.log(sum,sub,mul,div);

    document.getElementById("results").innerHTML=`
        <p class="result"> ${number1} + ${number2} = ${sum}</p>
        <p class="result"> ${number1} - ${number2} = ${sub}</p>
        <p class="result"> ${number1} * ${number2} = ${mul}</p>
        <p class="result"> ${number1} / ${number2} = ${div}</p>
        `;

    //get two values from the prompt and display them on the console.
}
