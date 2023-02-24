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
  Array.prototype.forEach.call(formElements.checkbox, function (checkbox) {
    if(checkbox.checked === true){
      console.log('Checkbox: ', checkbox.value);
    }
  });
});
{
//モーダルを作る（咲乃）
const modal = document.querySelector(".modal_wrapper");

const modalOpen = document.getElementById("submit");
modalOpen.addEventListener('click', e => {
  e.preventDefault();

  modal.style.display = 'flex';
})

  $('.modal_close').on('click', () => {
    $('.modal_wrapper').css('display', 'none');
  });


}
}