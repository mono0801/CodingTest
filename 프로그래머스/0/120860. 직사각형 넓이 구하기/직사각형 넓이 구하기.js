function solution(dots) {
    const width = [];
    const height = [];

    dots.map(([x, y]) => {
        width.push(x);
        height.push(y);
    });

    width.sort();
    height.sort();

    return (
        Math.abs(width.at(-1) - width[0]) * Math.abs(height.at(-1) - height[0])
    );
}