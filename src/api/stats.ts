import {TableRowData} from "../components/Table/table.types.js";
import {sumChildren} from "../utils/table.js";

export const tableData: TableRowData[] = [
    {
        label: "Выручка, руб",
        children: [
            {
                label: "Наличный",
                today: 300000,
                yesterday: 280000,
                weekday: 280000,
                weekData: [230000, 270000, 290000, 260000, 285000, 280000, 300000]
            },
            {
                label: "Безналичный расчёт",
                today: 100000,
                yesterday: 100000,
                weekday: 100000,
                weekData: [95000, 102000, 98000, 101000, 97000, 100000, 100000]
            },
            {
                label: "Кредитные карты",
                today: 100521,
                yesterday: 100521,
                weekday: 100521,
                weekData: [89000, 97000, 100000, 102000, 101000, 100521, 100521]
            }
        ]
    },
    {
        label: "Средний чек, руб",
        today: 1300,
        yesterday: 900,
        weekday: 900,
        weekData: [850, 950, 870, 910, 880, 900, 1300]
    },
    {
        label: "Средний гость, руб",
        today: 1200,
        yesterday: 800,
        weekday: 800,
        weekData: [720, 850, 780, 790, 810, 800, 1200]
    },
    {
        label: "Удаления из чека (после оплаты), руб",
        today: 1000,
        yesterday: 1100,
        weekday: 900,
        weekData: [950, 1020, 1150, 1080, 1120, 1100, 1000]
    },
    {
        label: "Удаления из чека (до оплаты), руб",
        today: 1300,
        yesterday: 1300,
        weekday: 900,
        weekData: [1200, 1320, 1250, 1280, 1310, 1300, 1300]
    },
    {
        label: "Количество чеков",
        today: 34,
        yesterday: 36,
        weekday: 34,
        weekData: [30, 32, 35, 33, 36, 36, 34]
    },
    {
        label: "Количество гостей",
        today: 34,
        yesterday: 36,
        weekday: 32,
        weekData: [30, 31, 33, 35, 34, 36, 34]
    }
];

export const fetchTableData = async (): Promise<TableRowData[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));

    const dataWithSums = tableData.map((row: TableRowData) =>
        row.children ? sumChildren(row) : row
    );

    return dataWithSums;
};
