import { TableRowData } from "../components/Table/table.types.js";

export const sumChildren = (row: TableRowData): TableRowData => {
    if (row.children === undefined || row.children.length === 0) return row;

    const summed: TableRowData = { ...row };
    const children = row.children

    summed.today = children.reduce(
        (acc, child) => acc + (child.today || 0),
        0
    );
    summed.yesterday = children.reduce(
        (acc, child) => acc + (child.yesterday || 0),
        0
    );
    summed.weekday = children.reduce(
        (acc, child) => acc + (child.weekday || 0),
        0
    );

    const weekLength = 7;
    summed.weekData = Array.from({ length: weekLength }, (_, ind) =>
        children.reduce(
            (acc, child) => acc + ((child.weekData?.[ind]) || 0),
            0
        )
    );

    return summed;
};

export function formatNumber(value: number | null | undefined): string {
    if (value === null || value === undefined) return "";
    return value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
}

export const calcPercentChange = (today?: number, yesterday?: number) => {
    if (today == null || yesterday == null || yesterday === 0) return null;

    const percent = ((today - yesterday) / yesterday) * 100;
    return Math.round(percent);
};

export const getHighlight = (today?: number, compare?: number) => {
    if (today === undefined || compare === undefined) return "neutral";
    if (today > compare) return "positive";
    if (today < compare) return "negative";
    return "neutral";
};