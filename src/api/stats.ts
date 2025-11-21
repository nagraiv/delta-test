import {TableRowData} from "../components/Table/table.types.js";
import {sumChildren} from "../utils/table.js";

const rawData: TableRowData[] = [
    {
        label: "Выручка, руб",
        children: [
            { label: "Наличный", today: 300000, yesterday: 280000, weekday: 280000 },
            { label: "Безналичный расчёт", today: 100000, yesterday: 100000, weekday: 100000 },
            { label: "Кредитные карты", today: 100521, yesterday: 100521, weekday: 100521 }
        ]
    },
    { label: "Средний чек, руб", today: 1300, yesterday: 900, weekday: 900 },
    { label: "Средний гость, руб", today: 1200, yesterday: 800, weekday: 800 },
    { label: "Удаления из чека (после оплаты), руб", today: 1000, yesterday: 1100, weekday: 900 },
    { label: "Удаления из чека (до оплаты), руб", today: 1300, yesterday: 1300, weekday: 900 },
    { label: "Количество чеков", today: 34, yesterday: 36, weekday: 34 },
    { label: "Количество гостей", today: 34, yesterday: 36, weekday: 32 },
];

export const fetchTableData = async (): Promise<TableRowData[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));

    const dataWithSums = rawData.map(row =>
        row.children ? sumChildren(row) : row
    );

    return dataWithSums;
};
