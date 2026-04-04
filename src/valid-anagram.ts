function isAnagram(s: string, t: string): boolean {
    let sMap = new Map();
    let tMap = new Map();
    // Turn s to array
    let sArr = [...s];
    // Turn y to array
    let tArr = [...t];

    // If we see that s and t are not of the same length, then this anagram is autmatically false.
    if(s.length != t.length) {
        return false;
    }

    // Put s characters inside a hash table
    sArr.forEach((v) => {
        if(sMap.has(v)) {
            // Increment the value to check if there are multiple instances of the same character
            sMap.set(v,sMap.get(v) + 1)
        } else {
            sMap.set(v, 1);
        }
    });

    // Put t characters inside a hash table
    tArr.forEach((v) => {
        if(tMap.has(v)) {
            // Increment the value to check if there are multiple instances of the same character
            tMap.set(v,tMap.get(v) + 1)
        } else {
            tMap.set(v, 1);
        }
    });


    // Go though t's characters and if we detect that a 
    for(let i: number = 0; i < tArr.length; i++) {

        // If the character in t is nonexistent in s, then we set the result to false right away 
        if(!sMap.has(tArr[i])) {
            return false
        
        // If the count of the character in t is not equal to the count of the character in s, then this is not an anagram
        } else if(tMap.get(tArr[i]) != sMap.get(tArr[i])) {
            return false
        }
    }

    // Otherwise, if all else passes, then t is an anagram of s.
    return true;
};