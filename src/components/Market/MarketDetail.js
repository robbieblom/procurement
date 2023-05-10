import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { currencyFormatter } from "../grid-utils/utils";
import { BuyRenderer } from "../renderers/BuyRenderer";

export const MarketDetail = ({ items }) => {
  const gridRef = useRef();
  const rowData = items;

  const [columnDefs, setColumnDefs] = useState([
    { field: "id" },
    { field: "name" },
    { field: "value", valueFormatter: currencyFormatter },
    {
      field: "id",
      headerName: "",
      cellRenderer: BuyRenderer,
      cellStyle: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingRight: "0px",
      },
      filter: false,
      sortable: false,
    },
    // { field: "Sale Price" },
    // { field: "Purchase Price" },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
  }));

  const sizeColumns = useCallback((skipHeader) => {
    const allColumnIds = [];
    gridRef.current.columnApi.getColumns().forEach((column) => {
      allColumnIds.push(column.getId());
    });
    gridRef.current.columnApi.autoSizeColumns(allColumnIds, skipHeader);
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  const onGridReady = useCallback(() => {
    sizeColumns();
  });

  return (
    <div
      className="ag-theme-balham-dark"
      style={{ width: "100%", height: "100%", minHeight: "400px" }}
    >
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        onGridReady={onGridReady}
      />
    </div>
  );
};
