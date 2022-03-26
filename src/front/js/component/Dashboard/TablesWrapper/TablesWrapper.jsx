import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../store/appContext";
import { PropTypes } from "prop-types";

// Functions
import { apiGetTables } from "../../../service/table.js";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";
import { TableCard } from "../TableCard/TableCard.jsx";

export const TablesWrapper = (props) => {
    const { store, actions } = useContext(Context);

    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        async function getTables() {
            try {
                const response = await apiGetTables();
                const data = await response.json();
                const status = response.status;

                if (status === 200) {
                    actions.setTableData(data);
                    setFetchError(false);
                }
                else {
                    console.error(status);
                    setFetchError(true);
                }
            }
            catch (err) {
                console.error(err);
                setFetchError(true);
            }
            finally {
                setLoading(false);
            }
        }

        getTables();
    }, []);

    return loading
        ? <Spinner />
        : fetchError
            ? <ErrorModal show={true} />
            : Object.keys(store.tableData).map(tableDataIndex =>
                <TableCard
                    key={tableDataIndex}
                    table_index={tableDataIndex}
                    id={store.tableData[tableDataIndex].id}
                    name={store.tableData[tableDataIndex].name}
                    qr_url={store.tableData[tableDataIndex].image_url}
                />
            )
};

TablesWrapper.propTypes = {
    company_id: PropTypes.node,
}