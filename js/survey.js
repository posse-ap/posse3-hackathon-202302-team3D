'use strict';

{
  let info = [
    {
      name: "バスケ部",
      item: [
        "運動",
        "バスケ"
      ]
    },
    {
      name: "朝活部",
      item: ["朝型"]
    },
    {
      name: "映画部",
      item: ["映画"]
    },
    {
      name:"自炊部",
      item:["料理"]
    }
  ];




  //フォームの内容をとってくる（たつ）
  document.querySelector('#submit').addEventListener('click', () => {
    let items = [];
    let arr = [];
    const element = document.forms.survey;

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
    arr.push(timingValue)
    arr.push(personalityValue)

    //趣味
    const chk1 = document.getElementsByName("chk1");
    for (let i = 0; i < chk1.length; i++) 
    {
      if (chk1[i].checked) {//(chk1[i].checked === true)と同じ
        console.log(chk1[i].value);
        arr.push(chk1[i].value);
      };
    };


    //スポーツ
    const chk2 = document.getElementsByName("chk2");

    for (let i = 0; i < chk2.length; i++) {
      if (chk2[i].checked) {//(chk2[i].checked === true)と同じ
        arr.push(chk2[i].value);
        console.log(chk2[i].value)
      };
    };

    //値を取得してHTMLページに反映（日向）
    console.log(items)
    console.log(arr)
    info.filter(list => {
      list.item.forEach(e => {
        arr.forEach(f => 
          {
          if (f == e) {
            items.push(list.name)
          }
        })
      })
    })
    console.log(items)
    const clubs = Array.from(new Set(items))
    console.log(clubs.join(', '))
    container.innerHTML = clubs.join(', ');
  });

  const container = document.querySelector('.modal_result_content');
  
  
    //モーダルを作る（咲乃）
    {
    const modal = document.querySelector(".modal_wrapper");

    const modalOpen = document.getElementById("submit");
    modalOpen.addEventListener('click', e => {
      // e.preventDefault();

      modal.style.display = 'flex';
    })

    $('.modal_close').on('click', () => {
      $('.modal_wrapper').css('display', 'none');
      container.innerHTML = "";
    });
  }

}


const container = document.querySelector('.modal_result_content');
console.log(document.querySelector('.modal_result_content'))


