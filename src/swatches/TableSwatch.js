import { Box } from "@mui/system"
import { DataGrid } from "@mui/x-data-grid"


const rows = [
    {
        id: 1,
        token : "ACF",
        address : "0xACF",
        cantidad : "10",
        precio : "10",
    },
    {
        id: 2,
        token : "BCF",
        address : "0xACF",
        cantidad : "10",
        precio : "20",
    },
    {
        id: 3,
        token : "DCF",
        address : "0xACF",
        cantidad : "10",
        precio : "30",
    },
    {
        id: 4,
        token : "USDT",
        address : "0xACF",
        cantidad : "10",
        precio : "40",
    }
]

const columns = [
    {
        field : "id",
        headerName : "ID",
        disableColumnMenu : true,
        width : 50,
    },
    {
        field : "token",
        headerName : "Token",
        disableColumnMenu : true,
        flex : 1,
    },
    {
        field : "address",
        headerName : "Address",
        disableColumnMenu : true,
        flex : 1,
    },
    {
        field : "cantidad",
        headerName : "Cantidad",
        disableColumnMenu : true,
        flex : 1,
    },
    {
        field : "precio",
        headerName : "Precio",
        flex : 1,
    }

]


export const TableSwatchWhite = () => {

    return (
        <Box height={300}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={3}
                rowsPerPageOptions={[3]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    )
}

export const TableSwatchGrey = () => {
    return (
        <Box height={300}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={3}
                rowsPerPageOptions={[3]}
                checkboxSelection
                disableSelectionOnClick
                getRowClassName={({ row: { id } }) => id % 2 === 0 ? 'cell-even' : 'cell-odd'}
            />
        </Box>
    )
}