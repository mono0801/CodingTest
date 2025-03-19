const operator = {
    Enter: (answer, uid) => answer.push([uid, "님이 들어왔습니다."]),
    Leave: (answer, uid) => answer.push([uid, "님이 나갔습니다."]),
    Change: (answer, uid) => null,
};

function solution(record) {
    let answer = [];
    const user = {};
    const history = record.map((v) => v.split(" "));
    history.map(([fn, uid, nick]) => {
        operator[fn](answer, uid);
        if (fn != "Leave") user[uid] = nick;
    });

    return answer.map(([uid, str]) => {
        return [user[uid], str].join("");
    });
}