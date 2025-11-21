import {TableRowProps} from "@/components/Table/table.types";
import TableCell from "@/components/TableCell/TableCell";
import {calcPercentChange, formatNumber, getHighlight} from "@/utils/table";

const TableRow = ({row, level}: TableRowProps) => {
    const {label, today, yesterday, weekday} = row;

    const percent = calcPercentChange(today, yesterday);

    return (
        <>
            <tr>
                <TableCell type="label" level={level} content={label}/>
                <TableCell type="number" content={today}/>
                <TableCell
                    type="value"
                    highlight={getHighlight(today, yesterday)}
                    content={
                        <>
                            {formatNumber(yesterday)}
                            {percent !== null && (
                                <span>
                                    {percent}%
                                </span>
                            )}
                        </>
                    }
                />

                <TableCell type="number" highlight={getHighlight(today, weekday)} content={weekday}/>
            </tr>
            {row.children &&
                row.children.map((child, idx) => (
                    <TableRow key={idx} row={child} level={level + 1}/>
                ))}
        </>
    );
};

export default TableRow;