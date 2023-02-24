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
      // aaa(朝型);
      // aaa(checkbox.value);
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

//モーダル回答（ひなた）

// let clubimages = [
//   "バスケ部",
//   "朝活部",
//   "自炊部",
//   "ラーメン部"
// ];

// switch (clubimages){
//   case "バスケ":
//     console.log('バスケ部');
//     break;
//   case "料理":
//     console.log('自炊部');
//     break;
//   case "朝":
//     console.log('朝活部');
//     break;
//   case "映画":
//       console.log('映画部');
//       break;
// }

let array =[
  {
    name : "バスケ部",
    item : [
      "運動",
      "バスケ"
    ]
  },
{
  name : "朝活",
  item : ["朝型"]
}
];
const  aaa = item => {
  array.filter (arr =>{
    return arr.item == item
  })
}
const club = array.filter (arr =>{
  return arr.item == "朝型"
});

// console.log (club);
// console.log (club[0]);
// console.log (club[0].name);
