let events=[
  {start: 0, duration: 15, title: "Exersise"},
  {start: 25, duration: 30, title: "Travel to work"},
  {start: 30, duration: 30, title: "Plan day"},
  {start: 60, duration: 15, title: "Review yesterday's commits"},
  {start: 100, duration: 15, title: "Code review"},
  {start: 180, duration: 90, title: "Have lunch with John"},
  {start: 360, duration: 30, title: "Skype call"},
  {start: 370, duration: 45, title: "Follow up with designer"},
  {start: 405, duration: 30, title: "Push up branch"},
]

class Event {

  constructor(start, duration, title) {
    this.start = start;
    this.duration = duration;
    this.title = title;
  }
}

const cellWrapper = document.querySelectorAll(".cellWrapper");
const timeCell = document.querySelectorAll(".timeCell");

   
function showData(element) {
  let event1 =  document.createElement("div");
  event1.className = "event1";

  let span =  document.createElement("span");
  span.className = "icon-cross";
  event1.append(span);

  let changeEvent =  document.createElement("span");
  changeEvent.className = "icon-pencil";
  event1.append(changeEvent);

  let startEvent = element.start;
  let durationEvent = element.duration;

  event1.style.height = durationEvent*2 +'px';
  let text =  document.createElement("p");
  text.textContent=element.title
  event1.appendChild(text)

  num=startEvent/30;
  i=Math.round( num);

  if(i<1){
     event1.style.marginTop = startEvent*2 +'px';
  } else if (i>1){
    if((i-num) > 0.5){
      event1.style.marginTop = (startEvent-((i-1)*30))*2 +'px';
    }
    else {
      event1.style.marginTop = ((startEvent-((i)*30))*2 )+'px';
    }
}

if(event1.style.backgroundColor != document.querySelector("#color").value){
  event1.style.backgroundColor=document.querySelector("#color").value
  event1.style.borderColor=document.querySelector("#color").value
}

     timeCell[i].appendChild(event1)
}

events.forEach(element =>{
  showData(element) 
})

let a = document.querySelector(".button");

a.addEventListener('click', ()=>{
  let start = document.querySelector('.inputStart').value;
  let duration = document.querySelector('.inputDuration').value;
  let title = document.querySelector('.inputText').value;
  
  let hour = start.slice(0,-3);
  let minuts = start.slice(3);
  hour=((hour*1)-8)*60
  minuts=(minuts*1)
  startEvent=hour+minuts
 

  let hourDuration = duration.slice(0,-3);
  let minutsDuration = duration.slice(3);
  hourDuration = (( hourDuration*1)-8)*60
  minutsDuration = (minutsDuration*1)
  durationEvent=hourDuration + minutsDuration
  duration1=durationEvent-startEvent

if(startEvent >= 540 || durationEvent>=540){
  alert("Cannot add event after 17:00")
} else if(startEvent < 0 ){
  alert("Cannot add event before 08:00")
}
{
  let Event1 = new Event(startEvent, duration1, title);
  events.push(Event1)
  showData(Event1) 
}
  
})

let del = document.querySelectorAll(".icon-cross");

del.forEach.call(del,function(el){
    el.addEventListener('click', function (e) { 
    let delElem = el.parentElement;
    delElem.remove()
  })
});

let change = document.querySelectorAll(".icon-pencil");

change.forEach.call(change,function(el){
    el.addEventListener('click', function (e) { 
   
   let p=el.parentElement.lastChild
   
      for(i=0; i<events.length; i++){
        if(events[i].title==p.textContent){

          let formChangeStart = document.querySelector('#changestart')
          formChangeStart.value=events[i].start

          let formChangeDuration = document.querySelector('#changeduration')
          formChangeDuration.value=events[i].duration

          let formChangeTitle = document.querySelector('#changetext')
          formChangeTitle.value=events[i].title 
        }
      }
 
     let formChange = document.querySelector('#changeForm')
     formChange.style.display="block";

     let formClose = document.querySelector('.changeClose')
  
     formClose.addEventListener('click', function (e) { 
     formChange.style.display="none";
    })

    let changeFormButton = document.querySelector('#buttonChange')
    let formChangeStart = document.querySelector('#changestart')
    let formChangeDuration = document.querySelector('#changeduration')
    let formChangeTitle = document.querySelector('#changetext')

function findIndex() {
  for (i=0; i<events.length; i++){
    return i;
  }
}

    changeFormButton.addEventListener('click', function (e) { 
       findIndex()
        
        if(formChangeStart.value != ''){
            events[i].start=formChangeStart.value*1
        }
        if(formChangeDuration.value != ''){
          events[i].duration=formChangeDuration.value*1
        }

        if(formChangeTitle.value != '' && formChangeTitle.value != events[i].title){
          events[i].title=formChangeTitle.value
        }

      el.parentElement.remove()
      events.push(events[i])
      showData(events[i]) 
      formChange.style.display="none";
    })
  })
});



