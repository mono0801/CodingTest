function solution(common) {
    const diff = common[1] - common[0];
    const ratio = common[1] / common[0];
    const last = common.at(-1);

    return diff === common[2] - common[1] ? last + diff : last * ratio;
}