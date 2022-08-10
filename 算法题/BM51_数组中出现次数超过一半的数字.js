function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    const hash = new Map()
    for(let i = 0; i < numbers.length; i++) {
        const n = numbers[i]
        let count = hash.get(n)
        count = count ? count + 1 : 1
        if (count > numbers.length / 2) {
            return n
        }
        hash.set(n, count)
    }
    return 0
}
module.exports = {
    MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
};