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
      name: "朝活",
      item: ["朝型"]
    }
  ];

  // let items =[]
  // info.forEach(elm => {
  // elm["item"].forEach (item=> {
  //   items.push(item)
  // })
  // });

  //フォームの内容をとってくる（たつ）
  document.querySelector('#submit').addEventListener('click', () => {
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


    //趣味

    const arr = [];
    const chk1 = document.getElementsByName("chk1");

    for (let i = 0; i < chk1.length; i++) {
      if (chk1[i].checked) {//(chk1[i].checked === true)と同じ
        arr.push(chk1[i].value);
        let club = info.filter(list => {

          list.item.forEach(e => {
            // console.log(chk1[i].value)
            // console.log(e)
            if (e == chk1[i].value) {
              console.log(list.name)
              container.innerHTML = list.name;
              return true;
            } else {
              // container.innerHTML=""
            }


          })


          return
          // console.log(arr.item)
          // arr.item.forEach(e => {
          //   console.log(e == chk1[i].value);
        })
        console.log(club)
        // let a = aaa(chk1[i].value)
        // console.log (aaa(chk1[i].value));
      };
    };
    //スポーツ
    const rarr = [];
    const chk2 = document.getElementsByName("chk2");

    for (let i = 0; i < chk2.length; i++) {
      if (chk2[i].checked) {//(chk2[i].checked === true)と同じ
        rarr.push(chk2[i].value);
        // console.log(chk2[i].value)
      };
    };
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
      container.innerHTML = "";
    });


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

  // let info = [
  //   {
  //     name: "バスケ部",
  //     item: [
  //       "運動",
  //       "バスケ"
  //     ]
  //   },
  //   {
  //     name: "朝活",
  //     item: ["朝型"]
  //   }
  // ];
  


  // console.log (items)
  // const aaa = item => {
  //   info.filter(arr => {
  //     // console.log(item)
  //     return arr.item == item
  //   })
  // }
  // const basket = "運動";
  //   const club1 = info.filter(arr => {
  //     // console.log(arr.item)
  //     arr.item.forEach(e => {
  //         if(e == basket) {
  //         console.log(arr.name)
  //       }
  //     })
  //     // return arr.item == "バスケ"
  //   });



  // console.log (club1);
  // console.log (club1[0]);
  // console.log (club1[0].name);
}


const container = document.querySelector('.modal_result_content');
console.log(document.querySelector('.modal_result_content'))



