import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";
import { TableCard } from "../TableCard/TableCard.jsx";
import { TableEditionModal } from "../Modal/TableEditionModal/TableEditionModal.jsx";

// Custom Hooks
import { useFetchOrdersTables } from "../../CustomHooks/CustomHooks.jsx";

export const TablesWrapper = (props) => {
    const { store, actions } = useContext(Context);

    /* Fetch company tables */
    const { fetchOrderTableResult, error, loading } = useFetchOrdersTables(store.activeTableEdition);
    
    return loading
        ? <Spinner />
        : error
            ? <ErrorModal show={true} />
            : (
                <div className="col-12 col-lg-7 cards-grid-system">
                    <button
                        type="button"
                        className="tables-configuration-add btn flex-md-column shadow-sm"
                        onClick={() => actions.setActiveTableEdition([])}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>

                        <p className="m-0">
                            <strong>Crear</strong> mesa
                        </p>
                    </button>

                    {Object.keys(store.companyTables).map(tableIndex =>
                        <TableCard
                            key={tableIndex}
                            table_index={tableIndex}
                            name={store.companyTables[tableIndex].name}
                            handleChangeView={props.handleChangeView}
                        />
                    )}

                    {store.activeTableEdition ? <TableEditionModal /> : null}
                </div>
            )
};

TablesWrapper.propTypes = {
    handleChangeView: PropTypes.func
}
