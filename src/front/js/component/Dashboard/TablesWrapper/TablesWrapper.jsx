import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../store/appContext";
import { PropTypes } from "prop-types";

// Functions
import { apiGetTables } from "../../../service/table.js";

//Styles
import "./tables-wrapper.css"

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";
import { TableCard } from "../TableCard/TableCard.jsx";
import { TableEditionModal } from "../Modal/TableEditionModal/TableEditionModal.jsx";

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
            : (
                <div className="col-12 col-lg-7 cards-grid-system">
                    {props.edit_table_control
                        ? <button
                            type="button"
                            className="tables-configuration-add btn flex-md-column shadow-sm"
                            onClick={() => actions.setTableEdition([])}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                            </svg>

                            <p className="m-0">
                                <strong>Crear</strong> Mesa
                            </p>
                        </button>
                        : null
                    }

                    {Object.keys(store.tableData).map(tableDataIndex =>
                        <TableCard
                            key={tableDataIndex}
                            table_index={tableDataIndex}
                            id={store.tableData[tableDataIndex].id}
                            name={store.tableData[tableDataIndex].name}
                            qr_url={store.tableData[tableDataIndex].image_url}
                            item_edit_control={props.edit_table_control}
                        />
                )}
                </div>
            )
};

TablesWrapper.propTypes = {
    company_id: PropTypes.node,
    edit_table_control: PropTypes.bool

}