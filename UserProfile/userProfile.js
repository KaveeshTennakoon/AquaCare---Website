var questions_array=["User_Name:","Password:","Date_of_Birth:","Country:"
,"Gender:","Email:","Educational_Background:","Skills_and_Expertise:","Related_Professional_Experiences:"
,"Volunteering_Interests:","Participated_Volunteering_Projects:","Advocay Efforts:"]

var index=0;
var step_num=index+1;
var step_content=" 1 Personal Details "
var ques_total=6;
var answered_count=0;

var text=document.getElementById("question_out1").textContent;

function customPrompt(){



if(index===11){
        return;
}else if((index+1)<6){

   step_num=index+1;



}else if((index+1)>9){


    step_content="3 Tasks"
    step_num=index-8;
    ques_total=3;
}else if((index+1)>6){
   
    step_content="2 Qualifications";
    step_num=index-5;
    ques_total=3;




}

    document.getElementById("start").style.display="none";
   document.getElementById("outer").style.display="block";
   document.getElementById("progress").style.display="block";
   document.getElementById("progress_text").style.display="block";
   
   const paragraphs = document.querySelectorAll('p');
   paragraphs.forEach(paragraph => {
    paragraph.style.display = 'flex';
});


   document.getElementById("step_text").textContent=`STEP ${step_content} | Question ${step_num}/${ques_total}`;
   document.getElementById("question").textContent=questions_array[index];
   document.getElementById("progress_text").textContent=`Profile Completed ${Math.round(answered_count*8.3)}%`;
   document.getElementById("progress").style.background=`linear-gradient(to right, lightblue ${answered_count*8.3}%,white 0%)`;
   document.getElementById("button_next").onclick=Next;
   document.getElementById("button_skip").onclick=Skip;

       
}
function Next(){
 if(document.getElementById("answer1").value===""){
    alert("Please enter a Text,Or Skip");
    alert(text)
 
    return;
 }
 document.getElementById(`question_out${index+1}`).textContent=questions_array[index];
 document.getElementById(`answer_out${index+1}`).textContent=document.getElementById("answer1").value;
 document.getElementById("answer1").value="";
 index=index+1;
 answered_count=answered_count+1;
 
 customPrompt();


}

function Skip(){
    document.getElementById(`question_out${index+1}`).textContent=questions_array[index];
    document.getElementById(`answer_out${index+1}`).textContent="";
    index=index+1;
    customPrompt();

}