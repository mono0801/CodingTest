function solution(wallpaper) {
    let lux = Infinity,
        luy = Infinity,
        rdx = -1,
        rdy = -1;

    wallpaper.forEach((e, i) => {
        e.split("").forEach((v, idx) => {
            if (v === "#") {
                if (lux > i) lux = i;
                if (luy > idx) luy = idx;
                if (rdx < i + 1) rdx = i + 1;
                if (rdy < idx + 1) rdy = idx + 1;
            }
        });
    });

    return [lux, luy, rdx, rdy];
}