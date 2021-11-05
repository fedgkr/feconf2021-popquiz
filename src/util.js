export const random = (p) => {
    let sameScore = {};
    return p.map((person) => {
        const genScore = () => {
            const t = Math.floor(Math.random() * 1000);
            if (t in sameScore) {
                return genScore();
            } else {
                sameScore[t] = true;
                return t;
            }
        };
        return { ...person, score: genScore() };
    });
};

export const rank = (p) => {
    for (let i = 0; i < p.length; i++) {
        p[i].rank = 1;
        for (let j = 0; j < p.length; j++) {
            if (p[i].score < p[j].score) {
                p[i].rank += 1;
            }
        }
    }
    return p;
};
