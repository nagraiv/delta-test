import {TableRowProps} from "@/components/Table/table.types";
import TableCell from "@/components/TableCell/TableCell";
import {calcPercentChange, formatNumber, getHighlight} from "@/utils/table";
import {useState} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TableRow = ({row, level}: TableRowProps) => {
    const {label, today, yesterday, weekday} = row;

    const [expanded, setExpanded] = useState(false);
    const tableFontSize = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--table-font-size")
    );
    const chartHeight = tableFontSize * 30;
    const chartOptions = {
        chart: { type: "line", height: chartHeight },
        title: { text: row.label },
        xAxis: {
            labels: { enabled: false },
        },
        yAxis: [
            {
                title: {
                    text: null
                },
            }
        ],
        series: [
            {
                data: row.weekData || [],
                color: "#037d50",
            },
        ],
        legend: {
            enabled: false
        },
        credits: { enabled: false },
    };


    const percent = calcPercentChange(today, yesterday);

    return (
        <>
            <tr onClick={() => setExpanded(!expanded)}>
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

            {expanded && (
                <tr className="table-row-expanded">
                    <td colSpan={4} style={{ padding: "0" }}>
                        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                    </td>
                </tr>
            )}

            {row.children &&
                row.children.map((child, idx) => (
                    <TableRow key={idx} row={child} level={level + 1}/>
                ))}
        </>
    );
};

export default TableRow;