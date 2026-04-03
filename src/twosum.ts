/**
 * Two Sum — first attempt.
 * @see https://leetcode.com/problems/two-sum/
 *
 * Approach:
 * 1. Map the input array to an array of objects containing each number and
 *    its original index.
 * 2. For every element, check whether its sum with any subsequent element
 *    equals the target.
 *
 * Note: This is an O(n²) solution. Performance degrades as the size of the
 * nums array grows.
 * 
 * Solving this took me 45 minutes.
 */

function twoSum(nums: number[], target: number): number[] {
  let numsAsObject = nums.map((num:number ,index:number) => {
      return {
          num,
          index
      }
  });

  let finalAnswer:number[] = [];

  for(let i:number = 0; i < numsAsObject.length; i++) {
      let currentNumber = numsAsObject[i];
      let arrayMinusCurrentNumber = numsAsObject.slice(i + 1);
      
      for(let j:number = 0; j < arrayMinusCurrentNumber.length; j++) {
          if(currentNumber.num + arrayMinusCurrentNumber[j].num == target) {
              finalAnswer = [currentNumber.index, arrayMinusCurrentNumber[j].index];

              return finalAnswer;
          }
      }

  }

  return finalAnswer
};