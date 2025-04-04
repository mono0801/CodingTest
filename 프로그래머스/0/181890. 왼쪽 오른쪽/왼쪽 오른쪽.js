function solution(str_list) {
    const l = str_list.findIndex((v) => v == "l");
    const r = str_list.findIndex((v) => v == "r");
    
    if (l === -1 && r === -1) return [];

    if (l === -1 && r != -1) return str_list.slice(r + 1);

    if (l != -1 && r === -1) return str_list.slice(0, l);

    if (l < r) return str_list.slice(0, l);

    if (r < l) return str_list.slice(r + 1);
}