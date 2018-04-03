/*
 * @Author: ZJ 
 * @Date: 2018-04-03 17:26:30 
 * @Last Modified by: ZJ
 * @Last Modified time: 2018-04-03 17:54:19
 */
var a = [1, 2, 3, 5, 6, 7, 8, 9, 10];

var count = 0;
for(let i = 1; i <= 10; i++) {
    count += i
};
var d = count - a.reduce((q,c) => q + c, 0);