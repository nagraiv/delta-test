import {TableCellProps} from "@/components/Table/table.types.js";
import "@/components/Table/Table.scss";
import React from "react";
import {formatNumber} from "@/utils/table.ts";

const TableCell = ({ content, type, level = 0, highlight }: TableCellProps) => {
    const style: React.CSSProperties = {
        ...(type === "label" && { paddingLeft: `${1 + level * 0.75}rem` })
    };

    const className = [
        "table-cell",
        type === "label" ? "label-cell" : "",
        type === "value" ? "value-cell" : "",
        highlight === "positive" ? "positive" : "",
        highlight === "negative" ? "negative" : "",
    ].join(" ");

    return <td className={className} style={style}>
        {typeof content === "number" ? formatNumber(content) : content}
    </td>;
};

export default TableCell;