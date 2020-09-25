var str1 = `/* 大家好，接下来我给大家画个太极
*首先先画一个div
*/
#dvi1 {
    width: 400px;
    height: 400px;
    position: fixed;
    top: 20px;
    right: 20px; 
}
/*然后将div变成圆*/
#dvi1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
/*然后设置黑白底色*/
#dvi1 {
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
}
/*接下来我们开始画两个小圆*/
#dvi1::before {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%); 
}
#dvi1::after { 
        width: 200px;
        height: 200px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%); 
    }
/*然后再开始画小圆*/
#dvi1::before {
    border-radius: 50%;
}
#dvi1::after {
    border-radius: 50%;
}
/*接下来，在给太极增加两个小点*/
#dvi1::before {
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);
}
#dvi1::after{
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
}
/*大功告成，我们的太极就画好了*/   
`;

var span = document.getElementById("cvtext");
var style = document.getElementById("hstyle");
var str2 = "";
var n = 0;
function start() {
  setTimeout(() => {
    if (n < str1.length - 1) {
      if (str1[n] === "\n") {
        str2 += "<br>";
      } else if (str1[n] === " ") {
        str2 += "&nbsp;";
      } else {
        str2 += str1[n];
      }
      span.innerHTML = str2;
      style.innerHTML = str1.substring(0, n);
      window.scrollTo(0,document.body.scrollHeight)
      n++;
      start();
    }
  }, 30);
}

start();
