import { useEffect, useState } from "react";
import Table from "@/components/Table/Table.js";
import { TableRowData } from "@/components/Table/table.types.js";
import { fetchTableData } from "@/api/stats.js";
import "./App.scss";
import ZoomControls from "@/components/ZoomControls/ZoomControls.tsx";

export const App = () => {
    const [data, setData] = useState<TableRowData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const tableData = await fetchTableData();
                setData(tableData);
            } catch (err) {
                console.error("Ошибка при загрузке данных:", err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return (
        <div className="container">
            <ZoomControls />
            {loading ? <p>Загрузка...</p> : <Table data={data} />}
        </div>
    );
};