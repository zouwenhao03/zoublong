var now1 = new Date();

function createtime1() {
    var grt = new Date("01/04/2023 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎来到killzouの小家!`,
        `马上就睡 🍭🍭🍭`,
        `
        kkkkkkkk             iiii  lllllll lllllll                                                     
        k::::::k            i::::i l:::::l l:::::l                                                     
        k::::::k             iiii  l:::::l l:::::l                                                     
        k::::::k                   l:::::l l:::::l                                                     
         k:::::k    kkkkkkkiiiiiii  l::::l  l::::l zzzzzzzzzzzzzzzzz   ooooooooooo   uuuuuu    uuuuuu  
         k:::::k   k:::::k i:::::i  l::::l  l::::l z:::::::::::::::z oo:::::::::::oo u::::u    u::::u  
         k:::::k  k:::::k   i::::i  l::::l  l::::l z::::::::::::::z o:::::::::::::::ou::::u    u::::u  
         k:::::k k:::::k    i::::i  l::::l  l::::l zzzzzzzz::::::z  o:::::ooooo:::::ou::::u    u::::u  
         k::::::k:::::k     i::::i  l::::l  l::::l       z::::::z   o::::o     o::::ou::::u    u::::u  
         k:::::::::::k      i::::i  l::::l  l::::l      z::::::z    o::::o     o::::ou::::u    u::::u  
         k:::::::::::k      i::::i  l::::l  l::::l     z::::::z     o::::o     o::::ou::::u    u::::u  
         k::::::k:::::k     i::::i  l::::l  l::::l    z::::::z      o::::o     o::::ou:::::uuuu:::::u  
        k::::::k k:::::k   i::::::il::::::ll::::::l  z::::::zzzzzzzzo:::::ooooo:::::ou:::::::::::::::uu
        k::::::k  k:::::k  i::::::il::::::ll::::::l z::::::::::::::zo:::::::::::::::o u:::::::::::::::u
        k::::::k   k:::::k i::::::il::::::ll::::::lz:::::::::::::::z oo:::::::::::oo   uu::::::::uu:::u
        kkkkkkkk    kkkkkkkiiiiiiiillllllllllllllllzzzzzzzzzzzzzzzzz   ooooooooooo       uuuuuuuu  uuuu  
`,
        "小站已经苟活",
        dnum,
        "天啦!",
        "©2022 By Fomalhaut",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            ""
        )
    );
}

createtime1();

function createtime2() {
    var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为「大可爱」`, `Photo captured: `, ` 🤪 `];

    setTimeout(
        console.log.bind(
            console,
            `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
            "color:white; background-color:#10bcc0",
            "",
            "",
            'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
        )
    );

    setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎光临，小可爱", "color:white; background-color:#23c682", ""));

    setTimeout(
        console.warn.bind(
            console,
            "%c ⚡ 是不是有点困呢",
            "color:white; background-color:#f0ad4e",
            ""
        )
    );

    setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你打开了控制台", "color:white; background-color:#4f90d9", ""));
    setTimeout(
        console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中，不要轻举妄动哦", "color:white; background-color:#d9534f", "")
    );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };