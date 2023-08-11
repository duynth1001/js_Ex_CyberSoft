// Bai 1
document.getElementById("exe1Calculation").onclick = () => {
  var firstNumb = +document.getElementById("firstNumb").value;
  var secNumb = +document.getElementById("secondNumb").value;
  var thirdNumb = +document.getElementById("thirdNumb").value;
  if (firstNumb == 0 || secNumb == 0 || thirdNumb == 0) {
    alert("Vui lòng nhập đầy đủ 3 số");
    return;
  }
  var arr = [firstNumb, secNumb, thirdNumb];
  arr.sort(function (a, b) {
    return a - b;
  });
  var resultStr = "Thứ tự ba số tăng dần lần lượt là: ";
  arr.forEach((ele) => {
    if (ele == arr[arr.length - 1]) resultStr += ele;
    else resultStr += ele + "->";
  });
  document.getElementById("exe1Result").innerHTML = resultStr;
};

//Bai 2
document.getElementById("exe2Calculation").onclick = () => {
  var askWhoUse = document.getElementById("askWhoUse").value;
  if (askWhoUse == "") {
    alert("Vui lòng nhập người sử dụng");
    return;
  }
 
  switch (askWhoUse) {
    case "Bố":
      document.getElementById("exe2Result").innerHTML = "Chào bố!";
      break;
    case "Mẹ":
      document.getElementById("exe2Result").innerHTML = "Chào mẹ!";
      break;
    case "Anh Trai":
      document.getElementById("exe2Result").innerHTML = "Chào anh trai!";
      break;
    case "Em Gái":
      document.getElementById("exe2Result").innerHTML = "Chào em gái!";
      break;
    default:
     alert("Vui lòng nhập chính xác định dạng");
      break;
  }
};

// Bai 3
document.getElementById('exe3Calculation').onclick=()=>{
    var ex3FirstNumb =+document.getElementById('ex3FirstNumb').value
    var ex3SecNumb =+document.getElementById('ex3SecNumb').value
    var ex3ThirdNumb =+document.getElementById('ex3ThirdNumb').value
    if(ex3FirstNumb==0||ex3SecNumb==0||ex3ThirdNumb==0)
    {
      alert("Vui lòng nhập đầy đủ 3 số nguyên")
      return
    }
    var arr = [ex3FirstNumb,ex3SecNumb,ex3ThirdNumb]
    var cntOdd=0
    var cntEven=0
    arr.forEach(
      (curEle)=>{
        if (curEle%2==1) {
          cntOdd++
        }
        else
        cntEven++
      }
    )
    document.getElementById('exe3Result').innerHTML='Có '+cntOdd+' số lẻ và có '+cntEven+' số chẵn.'
}

//Bai 4
document.getElementById('exe4Calculation').onclick=()=>{
  var a =+document.getElementById('firstEdge').value
  var b =+document.getElementById('secEdge').value
  var c =+document.getElementById('thirdEdge').value
  if(a==0 || b==0 ||c==0)
    {
      alert("Vui lòng nhập đầy đủ 3 cạnh tam giác")
      return
    }
    var resultStr
    if( a<b+c && b<a+c && c<a+b ){
      if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b)
        resultStr="Day la tam giac vuong";
      else if(a==b && b==c)
      resultStr="Day la tam giac deu";
      else if(a==b || a==c || b==c)
      resultStr="Day la tam giac can";
      else if(a*a > b*b+c*c || b*b > a*a+c*c || c*c > a*a+b*b)	
      resultStr="Day la tam giac tu";
      else
      resultStr="Day la tam giac nhon";
    }
    else
    resultStr="Day khong phai la ba canh cua mot tam giac"; 
    document.getElementById('exe4Result').innerHTML=resultStr
}