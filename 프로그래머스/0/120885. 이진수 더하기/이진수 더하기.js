const toDecimal = (num) => {
    let dec = 0;
    const arr = [...num].reverse();
    for (let i = 0; i < arr.length; i++) {
        dec += Number(arr[i]) * 2 ** i;
    }
    return dec;
};

function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}