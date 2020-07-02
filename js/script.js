$(function(){
 var alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  	var keyboard=$('.keyboard');
  	var questions=[
  			{
  				question:"Question 1 : What is the capital city of the Great Britain",
  				answer:'LONDON'
       		},
       		{
  				question:"Question 2: What is the capital city of the Armenia",
  				answer:'EREVAN'
       		},
       		{
  				
  				question:"Question 3:What is the capital city of the Georgia",
  				answer:'TBILISI'
       		},
       		{
  				
  				question:"Question 4:What is the capital city of the USA",
  				answer:'WASHINGTON'
       		},
       		{
  				
  				question:"Question 5:What is the capital city of the Italy",
  				answer:'ROME'
       		}
       ]
  if(!localStorage.getItem('won',0) && !localStorage.getItem('lost',0) && !localStorage.getItem('sxal',0)){
      localStorage.setItem('won',0);
      localStorage.setItem('lost', 0);
  
 }

	for(let i = 0; i < alphabet.length; i++){
      	 keyboard.append($("<button>").html(alphabet[i]).attr('class', 'btns'))
	}

  var numbers=[1,2,3,4,5];
	for(let i = 0; i < numbers.length; i++){
		$('.harc').append($('<div>').html(numbers[i]).attr('class','harcer'));
	}

  if(!$('.harcer').html()){
    var randomNum=Math.floor(Math.random() *5);
   $(".harcer").html(questions[randomNum].question);

  }

    var words=questions[randomNum].answer.split('');
  function vandak(){
      $('.main').append($('<div>').attr('class','answerDiv'));
          for(let i=0;i<words.length;i++)
          $('.answerDiv').append($('<button>').html(words[i]).attr('class','vandakner'));
       // $('.answerDiv').append($(`<button data-word='${words[i]}' class='vandakner'>`));
      
        }
 for(let i=0;i<questions.length;i++){
        if(randomNum==i){ vandak();  }
      }
var count=0;
var k;
var sxal=0;

      console.log(words)
  $(document).on('click','.btns',  function(){
      for(let j=0;j<words.length;j++){
         if($(this).html()==words[j]){
              count++;
             $('.vandakner').eq([j]).css({ color: 'black', background: 'white'});
             k=words[j]
         }
      }
   if($(this).html()!=k){
           sxal++;
           if(sxal==5){
             $('.main').prepend($('<div>').html('You lost the game').attr('class','partutyun'));
             var l=localStorage.getItem('lost');
                l++;
                localStorage.setItem('lost',l)
                  setTimeout(function(){   
                        location.reload(); 
                     },2000)  
           }
         }
         
      for(let i=0;i<alphabet.length;i++){
             if($(this).html() == alphabet[i]){
              $('.btns').eq([i]).css({ color: 'black', background: 'red'});
            if($(this).html() == k){
              $('.btns').eq([i]).css({ color: 'black', background: 'green'});

            }
        }

      }
        
     
     if(count==words.length){
            $('.main').prepend($('<div>').html('You won the game!The next question is...').attr('class','won'));
            var t=localStorage.getItem('won');
            t++;
            localStorage.setItem('won',t)
                  console.log(t)

              setTimeout(function(){   
                   location.reload();
                },2000)
             }
      	 })

    if(localStorage.getItem('lost')==5){
       $('.main').prepend($('<div>').html('Game over ! You lost the game!').attr('class','over'));
          localStorage.clear();         setTimeout(function(){   
          location.reload(); },2000)

    }else if(localStorage.getItem('won')==5){
       $('.main').prepend($('<div>').html('Game over ! You lost the game!').attr('class','wonn'));
          localStorage.clear();       
        setTimeout(function(){ 
               location.reload();
          },2000)

    }
});
