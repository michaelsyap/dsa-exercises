// inputs
// target 9
// nums [2,7,11,15]
// index[0,1,2,3]
function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>();

  for(let i:number = 0; i < nums.length; i++) {
      let difference = target - nums[i];

      // If difference exists in the map then we have the two complementary indeces 
      if(map.has(difference)) {
          return [map.get(difference)!, i]
      }

      map.set(nums[i],i);
  }

  return [];
};