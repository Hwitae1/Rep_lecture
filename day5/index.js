function f1 () {
    console.log("f1");
    f2();
}

function f2 ()  {
    console.log("f2");
}
function f3 ()  {
    //  외부 API / 유저의 입력을 기다려야 한다
    //  5초뒤에 실행되거나
    //  ?????????
    console.log("f3");
}
function f4 ()  {
    console.log("f4");
}
function f5 ()  {
    console.log("f5");
}
function f6 ()  {
    console.log("f6");
}

f1();
f2();
f3();   //DB에서는 데이터를 가져와야하는데 인터넷 연결이 끊김
f4();
f5();
f6();