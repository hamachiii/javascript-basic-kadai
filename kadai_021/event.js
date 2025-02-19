// btnというidを持つhtml要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つhtml要素を取得し、定数に代入する
const text= document.getElementById('text');

// html要素をクリックしたときにイベント処理を行う
btn.addEventListener('click', () => {
  setTimeout( () => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);

});