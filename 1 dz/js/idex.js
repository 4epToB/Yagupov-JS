var square=parseInt('1000m^2');
var width=parseInt('15m');
var lenght=parseInt('25m');
var freesquare= 1000%(lenght*width)
    console.log("Ответ 1ой задачи=",freesquare,"м^2")


var sqovala1=15/100;
var sqovala2=600/10000;
    console.log("Ответ 2ой задачи=",sqovala1-sqovala2,"м^2")


var n1=parseInt(prompt('Введите первое число для сравнения', 'Первое число' ));
var n2=parseInt(prompt('Введите второе число для сравнения', 'Второе число' ));
var n3=parseInt(prompt('Введите третье число для сравнения', 'Третье число' ));
var min=(n1>n2 && n2<n3)?n2:(n2>n1 && n1<n3)?n1:n3;
    console.log("Минимальное число", min);
    
var Ax=prompt('Введите координату х точки А', 'Ax');
var Ay=prompt('Введите координату y точки А', 'Ay');
var Az=prompt('Введите координату z точки А', 'Az');
var Bx=prompt('Введите координату х точки B', 'Bx');
var By=prompt('Введите координату y точки B', 'By');
var Bz=prompt('Введите координату z точки B', 'Bz');
var Cx=prompt('Введите координату х точки C', 'Cx');
var Cy=prompt('Введите координату y точки C', 'Cy');
var Cz=prompt('Введите координату z точки C', 'Cz');
var ABkv=((Ax-Bx)**2)+((Ay-By)**2)+((Az-Bz)**2); //ищем просто квадраты длинн сторон
var ACkv=(Ax-Cx)**2+(Ay-Cy)**2+(Az-Cz)**2;
var BCkv=(Bx-Cx)**2+(By-Cy)**2+(Bz-Cz)**2;
(ABkv<ACkv && ACkv>BCkv)? // проверка является ли АС самой большой стороной
    (ACkv-BCkv-ABkv==0)?console.log("Треугольник прямоугольный"):console.log("Треугольник не прямоугольный"): // проверка являтся ли она при этом гиппотенузой,т.е. суммой квадратов, если да то треугольник прямоугол.
        (ACkv<ABkv && ABkv>BCkv)?// проверка является ли АВ самой большой стороной
            (ABkv-ACkv-BCkv==0)?console.log("Треугольник прямоугольный"):console.log("Треугольник не прямоугольный"): // проверка являтся ли она при этом гиппотенузой
            (BCkv-ACkv-ABkv==0)?console.log("Треугольник прямоугольный"):console.log("Треугольник не прямоугольный") // тут понятно что уже если не АС и не АВ,то ВС самая длинная,осталось проверить гипотенуза ли она