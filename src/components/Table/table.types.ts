import {JSX} from "react";

export interface TableRowData {
    label: string;
    children?: TableRowData[];
    today?: number;
    yesterday?: number;
    weekday?: number;
}

export interface TableProps {
    data: TableRowData[];
}

export interface TableRowProps {
    row: TableRowData;
    level: number;
}

export interface TableCellProps {
    content: string | number | undefined | JSX.Element;
    type: "label" | "number" | "value";
    level?: number;
    highlight?: string;
}