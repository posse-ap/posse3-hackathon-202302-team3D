'use strict';

{
//フォームの内容をとってくる（たつ）
document.querySelector('#submit').addEventListener('click', () => {
  const element =document.forms.survey;

  //名前と期生取得
  const nameValue = element.name.value;
  const gradeValue = element.grade.value;

  console.log(nameValue)
  console.log(gradeValue)

  //朝夜内向型取得
  const timingValue = element.timing.value;
  const personalityValue = element.personality.value;

  console.log(timingValue)
  console.log(personalityValue)


 //趣味
  const arr = [];
  const chk1 = document.getElementsByName("chk1");

  for (let i = 0; i < chk1.length; i++) {
    if (chk1[i].checked) {//(chk1[i].checked === true)と同じ
      arr.push(chk1[i].value);
      console.log(chk1[i].value)
    };
  };
//スポーツ
  const rarr = [];
  const chk2 = document.getElementsByName("chk2");

  for (let i = 0; i < chk2.length; i++) {
    if (chk2[i].checked) {//(chk2[i].checked === true)と同じ
      rarr.push(chk2[i].value);
      console.log(chk2[i].value)
    };
  };
});
{
//モーダルを作る（咲乃）
const modal = document.querySelector(".modal_wrapper");

const modalOpen = document.getElementById("submit");
modalOpen.addEventListener('click', e => {
  // e.preventDefault();

  modal.style.display = 'flex';
})

  $('.modal_close').on('click', () => {
    $('.modal_wrapper').css('display', 'none');
  });


}
}