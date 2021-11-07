import xlsx from "xlsx";

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


export const convertFileToxlsx = (file) =>
    new Promise((resovle) => {
        const reader = new FileReader();
        reader.onload = function () {
            const fileData = reader.result;
            const wb = xlsx.read(fileData, { type: "binary" });
            wb.SheetNames.forEach(function (sheetName) {
                const rowObj = xlsx.utils.sheet_to_json(
                    wb.Sheets[sheetName]
                );
                resovle(rowObj);
            });
        };
        reader.readAsBinaryString(file);
    });

export const maskingEmail = (ele) => {
    const text = ele.innerText
    const userId = text.match(/.*?@/)[0]
    ele.innerText = text.replace(userId.slice(3, -2), "*".repeat(userId.slice(3, -2).length))
}