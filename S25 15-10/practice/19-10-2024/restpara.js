/*

rest Parameter
---------------
1. so it is a parameter
2. it holds all those arguments which doesn't have their own parameter.

*/

function restPara(x, y, ...restPara) {
  console.log("we are accesing infomation using restPara");
  console.log(x, y, restPara);
}

restPara(10, 20, 40, "Kshitij");
