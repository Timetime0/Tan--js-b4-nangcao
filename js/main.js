function getEle(ele){
    return document.getElementById(ele);
}
// Bài 1, Bài 2:
getEle("btn1").addEventListener("click", find)

function find(){
    var day = getEle("input1").value;
    var dayArray = day.split("-"); // [year,mouth,day]
    for(i=0;i<dayArray.length;i++){
        dayArray[i] = +dayArray[i]
    }
   
//day
    var nextDay = 0;
    var lastDay = 0;
    var monthNextDay = 0;
    var monthLastDay = 0;
    var yearNextDay = 0;
    var yearLastDay = 0;

    if((dayArray[2]>=2) && (dayArray[2]<30)){
        nextDay = dayArray[2] +1;
        lastDay = dayArray[2] -1;
        monthNextDay = monthLastDay = dayArray[1];
    }

    var month1 = [3,5,7,10,12];
    if(dayArray[2] == 1){
        if (month1.indexOf(dayArray[1]) == -1) // tháng 30 ngay
       {
        nextDay = dayArray[2] +1;
        lastDay = 31;
       } else 
        {
        nextDay = dayArray[2] +1;
        lastDay = 30;
       }

       if(dayArray[1] == 3){
           if (dayArray[0]%4 ==0){
            nextDay = dayArray[2] +1;
            lastDay = 29;
           }else{
            nextDay = dayArray[2] +1;
            lastDay = 28;
           }
       }    
       if (dayArray[1] == 1){
            monthLastDay = 12;
            monthNextDay = dayArray[1];
       } else if(dayArray[1] == 12){
            monthLastDay = dayArray[1];
            monthNextDay = 1; 
       } else {
        monthLastDay = dayArray[1];
        monthNextDay = dayArray[1] -1; 
       }
    } 

    var month31 = [1,3,5,7,8,10,12];
    if(dayArray[2] == 30){
        if (month31.indexOf(dayArray[1]) != -1){ // tháng có 30 ngày
            nextDay = 31;
            lastDay = 29;
            monthNextDay = monthLastDay = dayArray[1];

        } else {
            if (dayArray[1] != 2){
            nextDay = 1;
            lastDay = 29;
            monthNextDay =  dayArray[1] + 1;
            monthLastDay =   dayArray[1];
            }
        }
    }
    if(dayArray[2] == 31){ //ngày 31
        nextDay = 1;
        lastDay = 30;
        if (dayArray[1] == 12){
            monthNextDay = 1;
            monthLastDay =   dayArray[1];
        } else {
            monthNextDay =  dayArray[1] + 1;
            monthLastDay =   dayArray[1];
        }

    }

    if(dayArray[1] == 2){
        if(dayArray[2] == 29){
            nextDay = 1;
            lastDay = 28;
            monthNextDay =  dayArray[1] + 1;
            monthLastDay =   dayArray[1];
        }
        if (dayArray[2] == 28){
            if (dayArray[0]%4 ==0){
                nextDay = 29;
                lastDay = 27;
                monthNextDay = monthLastDay = dayArray[1];

            } else {
                nextDay = 1;
                lastDay = 27;
                monthNextDay =  dayArray[1] + 1;
                monthLastDay =   dayArray[1];
            }
        }
    }

    if (dayArray[2] == 1 && dayArray[1] == 1){
        yearNextDay = dayArray[0];
         yearLastDay =  dayArray[0] -1;
    } else if (dayArray[2] == 31 && dayArray[1] == 12){
        yearNextDay = dayArray[0] + 1;
         yearLastDay =  dayArray[0];
    } else {
        yearNextDay = yearLastDay = dayArray[0];
    }


    getEle("tb1").innerHTML = "Ngày tiếp theo: " + nextDay +"-"+ monthNextDay +"-"+ yearNextDay +"<br>" +
                                "Ngày hôm qua: " + lastDay +"-"+ monthLastDay +"-"+ yearLastDay; 



    tb2 = getEle("tb2");
    if(month31.indexOf(dayArray[1]) != -1){
        tb2.innerHTML = "Tháng " +dayArray[1] + " có 31 ngày"; 
    } else {
        if ((dayArray[1]) != 2 ){
            tb2.innerHTML = "Tháng " +dayArray[1] + " có 30 ngày"; 
        }
    }
    if ((dayArray[1]) == 2){
        if (dayArray[0]%4 ==0){
            tb2.innerHTML = "Tháng " +dayArray[1] + " có 29 ngày"; 
        } else {
            tb2.innerHTML = "Tháng " +dayArray[1] + " có 28 ngày"; 
        }
    }

}
// -------------------------------------------------------------------------
// Bài 3
getEle("btn2").addEventListener("click", read)

function read(){
    var input2 = +getEle("input2").value;
    var read = "";
    var tram = Math.floor(input2/100);
    var chuc = (Math.floor(input2/10))%10;
    var donvi = input2%10;
    
    if((chuc != 0) && (donvi != 0)){
        read = howtoread(tram) + " trăm " + howtoread(chuc) + " mươi " + howtoread(donvi);
    }

    if ((chuc == 1)){
        read = howtoread(tram) + " trăm" + " mười " + howtoread(donvi);
    }

    if ((chuc == 0)){
        read = howtoread(tram) + " trăm" + " lẻ " + howtoread(donvi);
    }

    if ((donvi == 0)){
        read = howtoread(tram) + " trăm " +  howtoread(chuc) + " mươi ";
    }

    if ((donvi == 0) && (chuc == 0)){
        read = howtoread(tram) + " trăm ";
    }

    getEle("tb3").innerHTML = input2 + ": " +read;
}


function howtoread(x){
    var read = "";
    switch(x){
        case 0:
            read = "không";break;
        case  1:
            read = "mốt";break;
        case  2:
            read = "hai";break;
        case  3:
            read = "ba";break;
        case  4:
            read = "bốn";break;
        case  5:
            read = "năm";break;
        case  6:
            read = "sáu";break;
        case  7:
            read = "bảy";break;
        case  8:
            read = "tám";break;
        case  9:
            read = "chín";break;
    }
    return read;
}

// -------------------------------------------------------------------------
// Bài 4
getEle("btn3").addEventListener("click", farFromSchool)

function farFromSchool (){
    var input3 = getEle("input3").value;
    var input4 = getEle("input4").value;
    var input5 = getEle("input5").value;
    var name3 = getEle("name3").value;
    var name4 = getEle("name4").value;
    var name5 = getEle("name5").value;

    const truongHoc = 50;
    var toaX3 = Math.abs(truongHoc - input3);
    var toaX4 = Math.abs(truongHoc - input4);
    var toaX5 = Math.abs(truongHoc - input5);


    var name = "";
    var x = 0;
    var array = [];
    if (toaX3 > toaX4){
        name = name3;
        x = toaX3;
    } else {
        name = name4;
        x = toaX4;
    }

    if (x < toaX5){
        name = name5;
        x = toaX5;
    }
    array.push(name);

    if (x === toaX3){
        if (name != name3){
            array.push(name3);
        }
    }
    if (x === toaX4){
        if (name != name4){
            array.push(name4);
        }
    }
    if (x === toaX5){
        if (name != name5){
            array.push(name5);
        }
    }
    array.sort();

    getEle("tb4").innerHTML = "Bạn có nhà xa trường nhất là: " + array;

}



