/* Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.
Библиотека должна обладать следующими методами:
- поиск минимального элемента в переданном массиве;
- поиск максимально элемента в переданном массиве;
- расчет среднего арифметического значения элементов переданного массива;
- создание копии (клонирование) переданного массива. */
;!function(){
    window.Lib={
        min: function(arr){
            arr.sort((a, b)=> a - b);
            return arr[0]
        },
        max: function(arr){
            arr.sort((a, b)=> b - a);
            return arr[0]
        },
        mid: function(arr){
            let sum=0
            for(i=0;i<arr.length;i++){
                sum+=arr[i]
            };
            return sum/arr.length
        },
        clone: function(arr){
            let arrClone=[]
            for(let key in arr){
                arrClone[key]=arr[key]
            };
            return arrClone
        }

    }
}();