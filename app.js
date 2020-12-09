"use-strict";


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// CLASSROOM FUNCTION
const activities = function () {
  $(".activity-section").addClass("hidden");
  $(".loading").addClass("spinner-border");

  setTimeout(function () {
    $(".loading").removeClass("spinner-border");
    $(".activity-section").removeClass("hidden");
  }, 500);
  $(".create-activity").removeClass("hidden");
  $(".classpost").addClass("hidden");
  $(".message-box").addClass("hidden");
  $(".listPpl").addClass("hidden");
  $(".dropdown").removeClass("hidden");
  $(".exit-class").addClass("hidden")
};

const classroom = function () {
  $(".classpost").addClass("hidden");
  $(".loading").addClass("spinner-border");

  setTimeout(function () {
    $(".loading").removeClass("spinner-border");
    $(".classpost").removeClass("hidden");
  }, 500);
  $(".message-box").addClass("hidden");
  $(".listPpl").addClass("hidden");
  $(".create-activity").addClass("hidden");
  $(".dropdown").addClass("hidden");
  $(".activity-section").addClass("hidden");
  $(".exit-class").removeClass("hidden")
};

const message = function () {
  $(".message-box").addClass("hidden");
  $(".loading").addClass("spinner-border");

  setTimeout(function () {
    $(".loading").removeClass("spinner-border");
    $(".message-box").removeClass("hidden");
  }, 500);
  $(".listPpl").addClass("hidden");
  $(".classpost").addClass("hidden");
  $(".create-activity").addClass("hidden");
  $(".dropdown").addClass("hidden");
  $(".activity-section").addClass("hidden");
  $(".exit-class").addClass("hidden")
};

const people = function () {
  $(".listPpl").addClass("hidden");
  $(".loading").addClass("spinner-border");

  setTimeout(function () {
    $(".loading").removeClass("spinner-border");
    $(".listPpl").removeClass("hidden");
  }, 500);
  $(".classpost").addClass("hidden");
  $(".create-activity").addClass("hidden");
  $(".message-box").addClass("hidden");
  $(".dropdown").addClass("hidden");
  $(".activity-section").addClass("hidden");
  $(".exit-class").addClass("hidden")
};

$(".act-toggler").click(function () {
  activities();
});

$(".act-bottom").click(function () {
  activities();
});

$(".room-toggler").click(function () {
  classroom();
});

$(".room-bottom").click(function () {
  classroom();
});

$(".msg-toggler").click(function () {
  message();
});

$(".msg-bottom").click(function () {
  message();
});

$(".people-toggler").click(function () {
  people();
});
$(".ppl-bottom").click(function () {
  people();
});
// CLASSROOM FUNCTION


// ACTIVITY  

// // ACTIVITY LIST
$(".ongo").click(function () {
  $(".assignment").addClass("d-none");
  $(".ongoing").removeClass("d-none");
  $(".quiz").addClass("d-none");
  $(".exams").addClass("d-none");
});

$(".assgn").click(function () {
  $(".assignment").removeClass("d-none");
  $(".ongoing").addClass("d-none");
  $(".quiz").addClass("d-none");
  $(".exams").addClass("d-none");
});

$(".qz").click(function () {
  $(".assignment").addClass("d-none");
  $(".ongoing").addClass("d-none");
  $(".quiz").removeClass("d-none");
  $(".exams").addClass("d-none");
});

$(".exm").click(function () {
  $(".assignment").addClass("d-none");
  $(".ongoing").addClass("d-none");
  $(".quiz").addClass("d-none");
  $(".exams").removeClass("d-none");
});
// // ACTIVITY LIST

$(".exit-create").click(function () {
  $(".quiz-container").addClass("d-none");
});

// // CREATE ACTIVITY

$(".createQuiz").click(function () {
  $(".quiz-container").removeClass("d-none");
  $("#create-title").text("CREATE QUIZ");
  $(".q-type").removeClass("d-none");
});

$(".createExam").click(function () {
  $(".quiz-container").removeClass("d-none");
  $("#create-title").text("CREATE EXAM");
  $(".q-type").removeClass("d-none");
});

$(".createAss").click(function () {
  $("#create-title").text("CREATE ASSIGNMENT");
  $(".multi-choice").addClass("d-none");
  $(".fill-blanks").addClass("d-none");
  $(".true-false").addClass("d-none");
  $(".q-type").addClass("d-none");
  $(".quiz-container").removeClass("d-none");
});

$(".short-btn").click(function () {
  $(".type-txt").text("Short Answer");
  $(".multi-choice").addClass("d-none");
  $(".fill-blanks").addClass("d-none");
  $(".true-false").addClass("d-none");
  $(".fill-txt").addClass("d-none");
});

$(".tf-btn").click(function () {
  $(".type-txt").text("True or False");
  $(".multi-choice").addClass("d-none");
  $(".fill-blanks").addClass("d-none");
  $(".true-false").removeClass("d-none");
  $(".fill-txt").addClass("d-none");
});

$(".multi-btn").click(function () {
  $(".type-txt").text("Multi-Choice");
  $(".multi-choice").removeClass("d-none");
  $(".fill-blanks").addClass("d-none");
  $(".true-false").addClass("d-none");
  $(".fill-txt").addClass("d-none");
});

$(".fill-btn").click(function () {
  $(".type-txt").text("Fill IN The Blanks");
  $(".multi-choice").addClass("d-none");
  $(".fill-blanks").removeClass("d-none");
  $(".true-false").addClass("d-none");
  $(".fill-txt").removeClass("d-none");
});

// // CREATE ACTIVITY
// ACTIVITY


// PEOPLE

// // TEACHER STUDENT TOGGLE
$(".teacher").click(function () {
  $(".teachers").removeClass("d-none");
  $(".students").addClass("d-none");
});

$(".classmate").click(function () {
  $(".students").removeClass("d-none");
  $(".teachers").addClass("d-none");
});
// // TEACHER STUDENT TOGGLE


// PEOPLE

// ANSWER SHIT
let visibleDiv = 0;

function showDiv(){
    $(".questions").hide();
    $(".questions:eq("+ visibleDiv +")").show();
}
showDiv();

function showNext(){
    if(visibleDiv == $(".questions").length-1){
        $(".next-answer").attr("disabled","disabled");
        $(".prev-answer").removeAttr("disabled");
    }
    else {
        visibleDiv++;
        $(".prev-answer").removeAttr("disabled");
    }
    showDiv();
}

function showPrev(){
    if(visibleDiv == 0){
        $(".prev-answer").attr("disabled","disabled");
        $(".next-answer").removeAttr("disabled");
    }
    else {
        visibleDiv--;
        $(".next-answer").removeAttr("disabled");
    }
    showDiv();
}
// ANSWER SHIT

// SIGN UP / LOGIN 
$(".login").click(function () {
  $(".login-form").removeClass("d-none");
  $(".signup-form").addClass("d-none");
  $(".login-sign").addClass("aktibo-sign");
  $(".up-sign").removeClass("aktibo-sign");
  $(".slide-cont").removeClass("d-none");
});
$(".signup").click(function () {
  $(".login-form").addClass("d-none");
  $(".signup-form").removeClass("d-none");
  $(".login-sign").removeClass("aktibo-sign");
  $(".up-sign").addClass("aktibo-sign");
  $(".slide-cont").addClass("d-none");
  $(".first-signup").removeClass("d-none");
  $(".second-signup").addClass("d-none");
  $(".sign-button").addClass("d-none");
  $(".next-sign").removeClass("d-none");
  
});
$(".sign-button").click(function () {
  alert("Sign up success you can now log in");
  $(".login-form").removeClass("d-none");
  $(".signup-form").addClass("d-none");
  $(".login-sign").addClass("aktibo-sign");
  $(".up-sign").removeClass("aktibo-sign");
  $(".slide-cont").removeClass("d-none");
});
 $(".next-sign").click(function(){
   $(".second-signup").removeClass("d-none");
   $(".sign-button").removeClass("d-none");
   $(".next-sign").addClass("d-none");
   $(".first-signup").addClass("d-none");
 });
 $(".back-sign").click(function(){
  $(".second-signup").addClass("d-none");
  $(".sign-button").addClass("d-none");
  $(".next-sign").removeClass("d-none");
  $(".first-signup").removeClass("d-none");
 });

// SIGN UP / LOGIN 