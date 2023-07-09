import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableFooter,
} from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import IconButton from "@mui/material/IconButton";
import useSWR from "swr";


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export const Warehouse = () => {
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(true);
  const params = new URLSearchParams("start=0");

  if (search) {
    params.append("search", search);
  }
  const { data, error } = useSWR(
    `https://api.dottrade.com.np/api/method/test-item?${params.toString()}`,
    fetcher
  );

  function handleChange(event) {
    const searchText = event.target.value;
    setSearch(searchText);
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <input
        style={{ height: "1rem", display: "flex", justifyContent: "flex-end" }}
        placeholder="Search here"
        value={search}
        onChange={handleChange}
      />

      <Table>
        <TableHead>
          {/* Table header */}
          <TableRow>
            <TableCell style={{ fontWeight: 600 }}> Name </TableCell>
            <TableCell style={{ fontWeight: 600 }}> Web Item Name </TableCell>
            <TableCell style={{ fontWeight: 600 }}> Item Group </TableCell>
            <TableCell style={{ fontWeight: 600 }}>Short Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Table rows */}
            {/* Conditional rendering of table rows */}
            {data ? (
            (rowsPerPage > 0
              ? data.data.items.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : data.data.items
            ).map((item) => (
              <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.web_item_name}</TableCell>
              <TableCell> {item.item_group}</TableCell>
              <TableCell style={{ width: 500 }}>
                {item.short_description}
              </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>Loading...</TableCell>
            </TableRow>
          )}
     
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15, { label: "All", value: -1 }]}
              colspan={3}
              count={data ? data.data.items.length : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "Rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
