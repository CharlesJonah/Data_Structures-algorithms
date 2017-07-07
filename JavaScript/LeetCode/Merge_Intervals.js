/*
Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].


* Definition for an interval.
*/
function Interval(start, end) {
     this.start = start;
     this.end = end;
}

function intervalize(arr){
  return arr.map(function(el){
    return new Interval(el[0], el[1]);
  });
}


var merge = function(intervals) {
   intervals = intervals.sort(function(a, b){
       return a.start - b.start;
   });
   for(let i = 1; i < intervals.length; i++){
       //Check if 2nd interval's start is smaller than end of first interval
       if(intervals[i].start <= intervals[i-1].end){
           intervals[i].start = intervals[i-1].start;
           //Get max of two intervals
           intervals[i].end = Math.max(intervals[i-1].end, intervals[i].end)
           //Remove former range
           intervals.splice(i-1, 1);
           //restart if there's a switch
           i--;
       }
   }
   return intervals;
};

let a = intervalize([[1,3],[2,6],[8,10],[15,18]]);
console.info(merge(a).toString() === intervalize([[0,6],[8,10],[11,19]]) + "")
