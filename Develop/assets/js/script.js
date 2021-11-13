let currentDay = $("#currentDay");
let day = dayjs().format("MMMM, DD YYYY");
currentDay.text(day);

let currentTime = $("#currentTime");
function updateTime() {
  let now= dayjs().format("h:m:ss");
  currentTime.text(now);
};
updateTime();
setInterval(updateTime, 1000);

let time = parseInt(dayjs().format("H"));
let timeBlocks = $(".time-block");
timeBlocks.each(function () {
    let timeBlock = parseInt($(this).attr("data-time"));
    if  (timeBlock === time) {
        $(this).addClass("present");
    }
    else if (timeBlock < time) {
        $(this).addClass("past");
    }
    else {
        $(this).addClass("future");
    }
});

let saveBtn = $(".saveBtn")
saveBtn.click(function() {
    let description = $(this).siblings(".description").val();

    let id = $(this).parent(".time-block").data("time");

    localStorage.setItem(id , description);
});

function renderPage() {

     for (let i = 1; i < 16; i++) {
        $("#row" +i+" .description").val(localStorage.getItem(i+5))
     }
};
renderPage()