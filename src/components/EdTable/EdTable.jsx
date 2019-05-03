import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class EdTable extends React.Component {
    getMuiTheme = () =>
        createMuiTheme({
            overrides: {
                MuiPaper: {
                    elevation4: {
                        boxShadow: "none"
                    }
                },
                MuiTableRow: {
                    root: {
                        height: "30px"
                    },
                    head: {
                        height: "30px"
                    }
                },
                MuiIconButton: {
                    root: {
                        padding: 0
                    }
                },
                MuiTableCell: {
                    root: {
                        backgroundColor: "rgba(242, 153, 74, 0.2)",
                        borderBottom: "none",
                        textAlign: "center"
                    }
                },
                MUIDataTableSelectCell: {
                    fixedHeader: {
                        backgroundColor: "rgba(242, 153, 74, 0.2)"
                    },
                    headerCell: {
                        backgroundColor: "#DD864B",
                        borderRight: "1px solid #fff"
                    }
                },
                MuiTableHead: {
                    root: {
                        backgroundColor: "rgba(242, 153, 74, 0.2)"
                    }
                },
                MUIDataTableToolbarSelect: {
                    root: {
                        display: "none"
                    }
                },
                MUIDataTableHeadCell: {
                    fixedHeader: {
                        backgroundColor: "#DD864B",
                        fontWeight: "bold",
                        color: "#fff"
                    }
                }
            }
        });

    render() {
        return (
            <MuiThemeProvider theme={this.getMuiTheme()}>
                <MUIDataTable {...this.props} />
            </MuiThemeProvider>
        );
    }
}

export default EdTable;
