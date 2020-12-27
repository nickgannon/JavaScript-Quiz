//Submit button click
document.getElementById("submitBtn").addEventListener("click", function() {
    const submitBtn=document.getElementById("submitBtn");
    const correctCheck=document.getElementById("check3");
    const incorrectCheck1=document.getElementById("check1");
    const incorrectCheck2=document.getElementById("check2");
    const incorrectCheck4=document.getElementById("check4");
    const option1=document.getElementById("option1");
    const option2=document.getElementById("option2");
    const option3=document.getElementById("option3");
    const option4=document.getElementById("option4");

    submitBtn.style.cursor="auto";

    ////Answer choices for question 1
    //Correct answer
    if(correctCheck.checked==true) {
        option3.classList.add("correctHighlight");
        option1.classList.add("dashThrough");
        option2.classList.add("dashThrough");
        option4.classList.add("dashThrough");
    }

    //Q1 selected
    if(incorrectCheck1.checked==true) {
        option1.classList.add("wrongThrough");
        option2.classList.add("dashThrough");
        option3.classList.add("rightThrough");
        option4.classList.add("dashThrough");
    }

    //Q2 selected
    if(incorrectCheck2.checked==true) {
        option1.classList.add("dashThrough");
        option2.classList.add("wrongThrough");
        option3.classList.add("rightThrough");
        option4.classList.add("dashThrough");
    }

    //Q4 selected
    if(incorrectCheck4.checked==true) {
        option1.classList.add("dashThrough");
        option2.classList.add("dashThrough");
        option3.classList.add("rightThrough");
        option4.classList.add("wrongThrough");
    }

    //No answer selected
    if(correctCheck.checked==false && incorrectCheck1.checked==false && incorrectCheck2.checked==false && incorrectCheck4.checked==false) {
        option1.classList.add("dashThrough");
        option2.classList.add("dashThrough");
        option3.classList.add("dashThrough"); 
        option4.classList.add("dashThrough");
    }
});

    ///////////////////////////////////////////////////
document.getElementById("submitBtn").addEventListener("click", function() {
    var correct2Check=document.getElementById("check5");
    var incorrect2Check2=document.getElementById("check6");
    var incorrect2Check3=document.getElementById("check7");
    var incorrect2Check4=document.getElementById("check8");
    var option5=document.getElementById("option5");
    var option6=document.getElementById("option6");
    var option7=document.getElementById("option7");
    var option8=document.getElementById("option8");

    ////Answer choices for question 2
    //Correct answer
    if(correct2Check.checked==true) {
        option5.classList.add("correctHighlight");
        option6.classList.add("dashThrough");
        option7.classList.add("dashThrough");
        option8.classList.add("dashThrough");
    }

    //Q2 selected
    if(incorrect2Check2.checked==true) {
        option5.classList.add("rightThrough");
        option6.classList.add("wrongThrough");
        option7.classList.add("dashThrough");
        option8.classList.add("dashThrough");
    }

    //Q3 selected
    if(incorrect2Check3.checked==true) {
        option5.classList.add("rightThrough");
        option6.classList.add("dashThrough");
        option7.classList.add("wrongThrough");
        option8.classList.add("dashThrough");
    }

    //Q4 selected
    if(incorrect2Check4.checked==true) {
        option5.classList.add("rightThrough");
        option6.classList.add("dashThrough");
        option7.classList.add("dashThrough");
        option8.classList.add("wrongThrough");
    }

    //No answer selected
    if(correct2Check.checked==false && incorrect2Check2.checked==false && incorrect2Check3.checked==false && incorrect2Check4.checked==false) {
        option5.classList.add("dashThrough");
        option6.classList.add("dashThrough");
        option7.classList.add("dashThrough"); 
        option8.classList.add("dashThrough");
    }

});

/////////////////////////////////////////////////

document.getElementById("submitBtn").addEventListener("click", function() {
    var correct3Check=document.getElementById("check10");
    var incorrect3Check1=document.getElementById("check9");
    var incorrect3Check3=document.getElementById("check11");
    var incorrect3Check4=document.getElementById("check12");
    var option9=document.getElementById("option9");
    var option10=document.getElementById("option10");
    var option11=document.getElementById("option11");
    var option12=document.getElementById("option12");

    ////Answer choices for question 3
    //Correct answer
    if(correct3Check.checked==true) {
        option9.classList.add("dashThrough");
        option10.classList.add("correctHighlight");
        option11.classList.add("dashThrough");
        option12.classList.add("dashThrough");
    }

    //Q1 selected
    if(incorrect3Check1.checked==true) {
        option9.classList.add("wrongThrough");
        option10.classList.add("rightThrough");
        option11.classList.add("dashThrough");
        option12.classList.add("dashThrough");
    }

    //Q3 selected
    if(incorrect3Check3.checked==true) {
        option9.classList.add("dashThrough");
        option10.classList.add("rightThrough");
        option11.classList.add("wrongThrough");
        option12.classList.add("dashThrough");
    }

    //Q4 selected
    if(incorrect3Check4.checked==true) {
        option9.classList.add("dashThrough");
        option10.classList.add("rightThrough");
        option11.classList.add("dashThrough");
        option12.classList.add("wrongThrough");
    }

    //No answer selected
    if(correct3Check.checked==false && incorrect3Check1.checked==false && incorrect3Check3.checked==false && incorrect3Check4.checked==false) {
        option9.classList.add("dashThrough");
        option10.classList.add("dashThrough");
        option11.classList.add("dashThrough"); 
        option12.classList.add("dashThrough");
    }

});

////////////////////////////////

document.getElementById("submitBtn").addEventListener("click", function() {
    var correct4Check=document.getElementById("check16");
    var incorrect4Check1=document.getElementById("check13");
    var incorrect4Check2=document.getElementById("check14");
    var incorrect4Check3=document.getElementById("check15");
    var option13=document.getElementById("option13");
    var option14=document.getElementById("option14");
    var option15=document.getElementById("option15");
    var option16=document.getElementById("option16");

    ////Answer choices for question 4
    //Correct answer
    if(correct4Check.checked==true) {
        option13.classList.add("dashThrough");
        option14.classList.add("dashThrough");
        option15.classList.add("dashThrough");
        option16.classList.add("correctHighlight");
    }

    //Q2 selected
    if(incorrect4Check1.checked==true) {
        option13.classList.add("wrongThrough");
        option14.classList.add("dashThrough");
        option15.classList.add("dashThrough");
        option16.classList.add("rightThrough");
    }

    //Q3 selected
    if(incorrect4Check2.checked==true) {
        option13.classList.add("dashThrough");
        option14.classList.add("wrongThrough");
        option15.classList.add("dashThrough");
        option16.classList.add("rightThrough");
    }

    //Q4 selected
    if(incorrect4Check3.checked==true) {
        option13.classList.add("dashThrough");
        option14.classList.add("dashThrough");
        option15.classList.add("wrongThrough");
        option16.classList.add("rightThrough");
    }

    //No answer selected
    if(correct4Check.checked==false && incorrect4Check1.checked==false && incorrect4Check2.checked==false && incorrect4Check3.checked==false) {
        option13.classList.add("dashThrough");
        option14.classList.add("dashThrough");
        option15.classList.add("dashThrough"); 
        option16.classList.add("dashThrough");
    }

});

////////////////////////////////

document.getElementById("submitBtn").addEventListener("click", function() {
    var correct5Check=document.getElementById("check19");
    var incorrect5Check1=document.getElementById("check17");
    var incorrect5Check2=document.getElementById("check18");
    var incorrect5Check4=document.getElementById("check20");
    var option17=document.getElementById("option17");
    var option18=document.getElementById("option18");
    var option19=document.getElementById("option19");
    var option20=document.getElementById("option20");

    ////Answer choices for question 5
    //Correct answer
    if(correct5Check.checked==true) {
        option17.classList.add("dashThrough");
        option18.classList.add("dashThrough");
        option19.classList.add("correctHighlight");
        option20.classList.add("dashThrough");
    }

    //Q2 selected
    if(incorrect5Check1.checked==true) {
        option17.classList.add("wrongThrough");
        option18.classList.add("dashThrough");
        option19.classList.add("rightThrough");
        option20.classList.add("dashThrough");
    }

    //Q3 selected
    if(incorrect5Check2.checked==true) {
        option17.classList.add("dashThrough");
        option18.classList.add("wrongThrough");
        option19.classList.add("rightThrough");
        option20.classList.add("dashThrough");
    }

    //Q4 selected
    if(incorrect5Check4.checked==true) {
        option17.classList.add("dashThrough");
        option18.classList.add("dashThrough");
        option19.classList.add("rightThrough");
        option20.classList.add("wrongThrough");
    }

    //No answer selected
    if(correct5Check.checked==false && incorrect5Check1.checked==false && incorrect5Check2.checked==false && incorrect5Check4.checked==false) {
        option17.classList.add("dashThrough");
        option18.classList.add("dashThrough");
        option19.classList.add("dashThrough"); 
        option20.classList.add("dashThrough");
    }

});

///////////////////////////////

//Only one checkbox selected
function onlyOne(checkbox) {
    var checkboxes=document.getElementsByName("check");
    checkboxes.forEach((item)=>{
        if(item !== checkbox) {
            item.checked=false;
        }
    });
}

////Disable checkbox
//for page1
function disable() {
    document.getElementById("check1").disabled=true;
    document.getElementById("check2").disabled=true;
    document.getElementById("check3").disabled=true;
    document.getElementById("check4").disabled=true;
    document.getElementById("submitBtn").disabled=true;
}

//for page2
function disable2() {
    document.getElementById("check5").disabled=true;
    document.getElementById("check6").disabled=true;
    document.getElementById("check7").disabled=true;
    document.getElementById("check8").disabled=true;
    document.getElementById("submitBtn").disabled=true;
}

//for page3
function disable3() {
    document.getElementById("check9").disabled=true;
    document.getElementById("check10").disabled=true;
    document.getElementById("check11").disabled=true;
    document.getElementById("check12").disabled=true;
    document.getElementById("submitBtn").disabled=true;
}

//for page4
function disable4() {
    document.getElementById("check13").disabled=true;
    document.getElementById("check14").disabled=true;
    document.getElementById("check15").disabled=true;
    document.getElementById("check16").disabled=true;
    document.getElementById("submitBtn").disabled=true;
}

//for page5
function disable5() {
    document.getElementById("check17").disabled=true;
    document.getElementById("check18").disabled=true;
    document.getElementById("check19").disabled=true;
    document.getElementById("check20").disabled=true;
    document.getElementById("submitBtn").disabled=true;
}
