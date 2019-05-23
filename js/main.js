!function(){
  var duration = 50
  $('.actions').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    console.log(speed)
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed) {
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })
  function writeCode(prefix, code, fn){
     let container = document.querySelector('#code')
     let styleTag = document.querySelector('#styleTag')
     let n = 0
     let id 
     id = setTimeout(function run(){
        n += 1
        container.innerHTML = code.substring(0,n)
        styleTag.innerHTML = code.substring(0,n)
        container.scrollTop = container.scrollHeight
        if(n < code.length) {
          id = setTimeout(run, duration)
        }else {
          fn && fn.call()
        }
      },20)
  }
  let code = `
/*
  大家好，这是我开始做的一个比卡丘~
* 准备一下皮卡丘的黄色皮肤
*/
  .preview {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  background: #FEE433;
}
.wrapper {
  width: 100%;
  height: 165px;
  position: relative;
}
/*
* 画画比卡丘的小鼻子
*/
.nose {
   width: 0px;
   height:0px;
   border-style: solid;
   border-width: 12px;
   border-color: black transparent transparent;
   border-radius: 11px;
   position: absolute; 
   left: 50%;
   top: 28px;
   margin-left: -12px; 
}
/*
* 比卡丘的小眼睛开始画咯~
*/
.eye {
   width: 49px;
   height: 49px;
   background: #2E2E2E;
   position: absolute;
   border-radius: 50%;
   border: 2px solid #000000;
}
.eye::before {
   content: '';
   display: block;
   width: 24px;
   height: 24px;
   background: white;
   position: absolute;
   border-radius: 50%;
   left: 6px;
   top: -1px;
   border: 2px solid #000;
}
/*
* 这是左眼
*/
.eye.left {
   right: 50%; 
   margin-right: 90px;
}
/*
* 这是右眼
*/
.eye.right {
   left: 50%; 
   margin-left: 90px;
}

/*
* 这是比卡丘脸部的小红晕
*/
.face {
   width: 68px;
   height: 68px;
   background: #FC0D1C;
   border: 2px solid black;
   border-radius: 50%; 
   position: absolute;
   top: 85px;
}

/*
* 这是比卡丘左边的小红晕
*/
.face.left {
  right: 50%;
  margin-right: 116px; 
}

/*
* 这是比卡丘右边的小红晕
*/
.face.right {
  left: 50%;
  margin-left: 116px; 
}

/*
* 接下来就是比卡丘的上嘴唇
*/
.upperLip {
  height:25px;
  width: 80px;
  border: 2px solid black;
  position: absolute;
  top: 50px; 
  background:#FDE348;
}

/*
* 这是上嘴唇的左边
*/
.upperLip.left {
   right: 50%; 
   border-bottom-left-radius: 40px 25px;
   border-top: none;
   border-right: none; 
   transform: rotate(-20deg);
}

/*
* 这是上嘴唇的右边
*/
.upperLip.right {
   left: 50%;
   border-bottom-right-radius: 40px 25px;
   border-top: none;
   border-left: none; 
   transform: rotate(20deg);
}

/*
 *画比卡丘的下嘴唇啦~~
*/
.lowerLip-wrapper {
  bottom: 0;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  height: 110px;
  overflow: hidden;
  width: 300px;
}
.lowerLip {
  height: 3500px;
  width: 300px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}

/*
 *最后就是画比卡丘嘴部里的小舌头咯~~
*/
.lowerLip::after {
  content: '';
  position: absolute;
  bottom: -20px;
  width: 100px;
  height: 100px;
  background: #FC4A62;
  left: 50%; 
  margin-left: -50px;
  border-radius: 50px;
}
/*
 *可爱的小比卡丘送给你啦~
*/
`
  writeCode('',code)
}.call()




