function solution(nums) {
    const poketMons = new Set(nums);
    return poketMons.size >= nums.length / 2 ? nums.length / 2 : poketMons.size;
}