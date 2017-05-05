/**
 * Created by lenovo on 2017/5/4.
 */

var sOperation ='';
var sNum = 0;
var temp = '';//保存input中的数字，用于多位数的运算
var isHasOperation = false;//是否有运算符号了
window.onload = function () {
    var lis = document.getElementsByTagName('li');
    var i;
    for(i=0;i<lis.length;i++){

        lis[i].onmouseover = function () {
            this.className = 'active';
        }

        lis[i].onmousedown = doInput;

        lis[i].onmouseout = function () {
            this.className = '';
        }
    }
}

function doInput() {

    var kContent = this.innerHTML;
    var oInput = document.getElementById('input');
    switch(kContent)
    {
        case '+':
        case '-':
        case '×':
        case '÷':
            sOperation = kContent;
            isHasOperation = true;
            temp = '';
            break;
        case '=':
            oInput.value = calc(parseInt(sNum,10),parseInt(oInput.value,10),sOperation);
            sOperation = '';
            sNum = oInput.value;
            isHasOperation = false;//在运算之后，把标识符改成没有运算过得false
            temp = '';
            break;
        case 'C':
            oInput.value = '0';
            sOperation = '';
            kContent = '';
            temp = '';
            sNum = 0;
            break;
        default:
            if(temp !==''){//计算文本框中显示的数字
                oInput.value = parseInt(temp+kContent,10);
                temp=temp+kContent;
            }
            else {
                oInput.value = parseInt(kContent,10);
                temp = kContent;
            }
            if (!isHasOperation){//true有运算符号了，说明是第二位了，则直接将按钮值显示在屏幕上
            //false没有运算符号说明是第一位，需要一个变量来存储这位
                sNum=oInput.value;
            }
            break;
    }
}

function calc(num1,num2,operator) {
    var result = 0;
    switch(operator)
    {
        case '+': result = num1 + num2;break;
        case '-': result = num1 - num2;break;
        case '×': result = num1 * num2;break;
        case '÷': result = num1 / num2;break;
        default:result = num2;
    }
    return result;
}