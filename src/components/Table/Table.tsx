import { TableRowData, TableProps } from "./table.types.js";
import TableRow from "@/components/TableRow/TableRow.js";
import "./Table.scss";

const Table = ({ data }: TableProps) => {
    const TableHeader = () => (
        <thead>
        <tr>
            <th className="table-cell">Показатель</th>
            <th className="table-cell">Текущий день</th>
            <th className="table-cell">Вчера</th>
            <th className="table-cell">Этот день недели</th>
        </tr>
        </thead>
    );

    return (
        <table>
            <TableHeader />
            <tbody>
            {data.map((row: TableRowData, idx) => (
                <TableRow key={idx} row={row} level={0} />
            ))}
            </tbody>
        </table>
    );
};

export default Table;
