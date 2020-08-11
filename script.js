var count=50;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

// function timer()
//{
 // count=count-1;
 // if (count <= 0)
 // {
//clearInterval(counter);
     //counter ended, do something here
   //  return;
//  }

  //Do code for showing the number of seconds here
//}

document.getElementById("myBtn").addEventListener("click", function(){
    function timer()
    {
      count=count-1;
      if (count <= 0)
      {
         clearInterval(counter);
         //counter ended, do something here
         return;
      }
    
      //Do code for showing the number of seconds here
    }
  });

function myFunction() {
    var x = document.getElementById("myBtn");
    x.disabled = true;
var totalQuestions = $('.questions').size();

var currentQuestion = 0;
$questions = $('.questions');

$questions.hide();

//Show the first question
$($questions.get(currentQuestion)).fadeIn();

$('#Submit').click(function () {

























     $($questions.get(currentQuestion)).fadeOut(function () {

        currentQuestion = currentQuestion + 1;

        if (currentQuestion == totalQuestions) {

            var result = sum_values()

            //do stuff with the result

            alert(result);

        } else {

            $($questions.get(currentQuestion)).fadeIn();

        }
    });

});