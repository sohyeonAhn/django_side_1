const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();


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
    diary_create();
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
    diary_create();
});

// 오늘 버튼 클릭 시
document.getElementById('goToday').addEventListener('click', function() {

  // 달력 생성
  createCalendar(year, month);
  updateCalendar();
  diary_create();
});

function showButton() {
  var button = document.querySelector('.write');
  button.style.display = 'block';
}

function hideButton() {
  var button = document.querySelector('.write');
  button.style.display = 'none';
}
function diary_create() {
  const buttons = document.querySelectorAll('.write');

  buttons.forEach((btn) => {
    const number = btn.classList[1] + btn.classList[2];
    btn.addEventListener('click', function() {
      const url = 'create.html?YM=' + number + '&day=' + btn.classList[3];
      window.location.href = url;
      });
  });
}