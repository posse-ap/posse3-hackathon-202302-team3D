'use strict';

{
//フォームの内容をとってくる（たつ）

}

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