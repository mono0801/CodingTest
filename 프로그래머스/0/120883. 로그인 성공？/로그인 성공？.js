function solution(id_pw, db) {
    const idArr = db.filter(([id, pw]) => id === id_pw[0]);

    if (!idArr.length) return "fail";

    const pwArr = idArr.filter(([id, pw]) => pw === id_pw[1]);

    if (!pwArr.length) return "wrong pw";

    return "login";
}