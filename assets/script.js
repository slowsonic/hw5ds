// global variables

// functions
// save tasks to local storage
function saveTask() {
  console.log($(this).parent());

  const time = $(this).parent().attr("id");
  const task = $(this).siblings("textarea").val();

  localStorage.setItem(time, task);
}

// event listeners
// show current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

// retrieve tasks from local storage
$("#hour9 .js-task").val(localStorage.getItem("hour9"));
$("#hour10 .js-task").val(localStorage.getItem("hour10"));
$("#hour10 .js-task").val(localStorage.getItem("hour11"));
$("#hour10 .js-task").val(localStorage.getItem("hour12"));
$("#hour10 .js-task").val(localStorage.getItem("hour13"));
$("#hour10 .js-task").val(localStorage.getItem("hour14"));
$("#hour10 .js-task").val(localStorage.getItem("hour15"));
$("#hour10 .js-task").val(localStorage.getItem("hour16"));
$("#hour10 .js-task").val(localStorage.getItem("hour17"));

// user clicks save button
$(".js-saveBtn").on("click", saveTask);
