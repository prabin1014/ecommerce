import React from "react";
import { useState,useEffect } from "react";
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
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const params = new URLSearchParams();

  // if (search) {
    //   params.append("search", search);
    // }
    function handleChange(event) {
      const searchText = event.target.value;
      setLoading(true)
      setSearch(searchText);
    }


  const param1 = page * rowsPerPage
  const param2= search
  const { data, error } = useSWR(
    `https://api.dottrade.com.np/api/method/test-item?start=${param1}&page_length=${rowsPerPage}&search=${param2}`,
    fetcher
  );


  useEffect(() => {
    if (data) {
      setLoading(false); // Set loading state to false when data is fetched
    }
  }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render loading state if data is not available yet
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const handleChangePage = (event, newPage) => {
    console.log(data)
    setLoading(true)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setLoading(true)
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to 0 when changing rowsPerPage
  };
  return (
    <TableContainer component={Paper}>
      <input
        style={{ height: "1rem" }}
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

          {
            <React.Fragment>
              {
                data ?
                <>
                 {data?.data?.items.map((item) =>  (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.web_item_name}</TableCell>
                  <TableCell> {item.item_group}</TableCell>
                  <TableCell style={{ width: 500 }}>
                    {item.short_description}
                  </TableCell>
                </TableRow>
              ))}
                </>
                :
                <p>load</p>
              }
           
            </React.Fragment>
          }
     
      
        </TableBody>
      </Table>
      
      <TablePagination
              rowsPerPageOptions={[5, 10, 15, { label: "All", value: -1 }]}
              colspan={3}
              count={data?.data.items_count}
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
    </TableContainer>
  );
};
