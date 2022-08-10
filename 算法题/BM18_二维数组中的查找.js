function Find(target, array)
{
    let i = array.length
    if (i === 0) return false
    let j = array[0].length
    if (j === 0) return false
    
    for(let ii = 0; ii < i; ii++) {
        let rows = array[ii]
        let [left, right] = [0, j - 1]
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2)
            if (rows[mid] === target) return true
            else if (rows[mid] > target) right = mid - 1
            else left = mid + 1
        }
    }
}
module.exports = {
    Find : Find
};