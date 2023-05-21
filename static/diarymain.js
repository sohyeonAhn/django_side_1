const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();

function createCalendar(year, month) {
    const calendarBody = document.querySelector('.calendar tbody');
    const crYear = document.getElementById("currentYear");
    const crMonth = document.getElementById("currentMonth");
    let date = new Date(year, month, 1);
    let calendarHtml = '';

    month = month+1

    while (date.getMonth() === (month-1)) {
        const day = date.getDate();
        const dayOfWeek = date.getDay();

        if (dayOfWeek === 0) {  // 일요일인 경우 tr시작
            calendarHtml += '<tr>';
        }

        if (day === 1 && dayOfWeek !== 0) {
            calendarHtml += '<td colspan="' + dayOfWeek + '"></td>';
        }

        calendarHtml += '<td><span>' + day + '</span>' + '<div class="daily '+ year +' '+ month +' '+ day +'"> </div>' + '</td>';
        // 일정 부분에 일정 가져와서 입력하기

        if (dayOfWeek === 6) {  // 토요일인 경우 tr 끝
            calendarHtml += '</tr>';
        }

        date.setDate(date.getDate() + 1);
    }

    calendarBody.innerHTML = calendarHtml;
    crYear.innerHTML = year+"년";
    crMonth.innerHTML = month+"월";
}

createCalendar(year, month);

// 이전 달 버튼 클릭 시
document.getElementById('prevBtn').addEventListener('click', function() {
    // 현재 표시된 달력의 연도와 월 가져오기
    const currentYear = parseInt(document.getElementById('currentYear').textContent);
    const currentMonth = parseInt(document.getElementById('currentMonth').textContent) - 1; // 0부터 시작하므로 1을 빼줌

    // 이전 달의 연도와 월 계산하기
    const prevDate = new Date(currentYear, currentMonth - 1);
    const prevYear = prevDate.getFullYear();
    const prevMonth = prevDate.getMonth();

    // 달력 생성
    createCalendar(prevYear, prevMonth);
    updateCalendar();
});

// 다음 달 버튼 클릭 시
document.getElementById('nextBtn').addEventListener('click', function() {
    // 현재 표시된 달력의 연도와 월 가져오기
    const currentYear = parseInt(document.getElementById('currentYear').textContent);
    const currentMonth = parseInt(document.getElementById('currentMonth').textContent) - 1; // 0부터 시작하므로 1을 빼줌

    // 다음 달의 연도와 월 계산하기
    const nextDate = new Date(currentYear, currentMonth + 1);
    const nextYear = nextDate.getFullYear();
    const nextMonth = nextDate.getMonth();

    // 달력 생성
    createCalendar(nextYear, nextMonth);
    updateCalendar();
});

// 오늘 버튼 클릭 시
document.getElementById('goToday').addEventListener('click', function() {

  // 달력 생성
  createCalendar(year, month);
  updateCalendar();
});

