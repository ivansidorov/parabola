/*
*
* Вспомогательные математические функции
*
*/

/*
*
* Функция получения начальной, конечной и контрольной точки для графика
* @param {number} a
* @param {number} b
* @param {number} c
* @return {array}
* 
*/

const GrafArray = (a=1,b=0,c=0) => {
  const canvas = {width: 500, height: 500}
  let startPoint={x: canvas.width/2 + -100, y: canvas.height/2 - a*Math.pow(-100, 2) + b*-100 + c}
  let endPoint={x: canvas.width/2 + 100, y: canvas.height/2 - a*Math.pow(100, 2) + b*100 + c}
  let midPoint = {x: canvas.width/2 + (-b/2*a), y: canvas.height/2 - ((-Math.pow(b, 2) + 4*a*c)/4*a)}
  let controlePoint={
    x:2*midPoint.x-startPoint.x/2-endPoint.x/2,
    y:2*midPoint.y-startPoint.y/2-endPoint.y/2,
  };
  return [startPoint,controlePoint,endPoint]
}

export {GrafArray}