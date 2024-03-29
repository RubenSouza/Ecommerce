import React, { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/features/querys";

type Props = {
  totalPages: number;
};

export default function BasicPagination({ totalPages }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    event.preventDefault();
    searchParams.set("page", page.toString());
    navigate({ search: searchParams.toString() });
  };

  useEffect(() => {
    dispatch(setPage(currentPage));
  }, [currentPage]);

  return (
    <Stack spacing={2} className="w-full">
      <Pagination
        count={totalPages}
        color="primary"
        page={currentPage}
        onChange={handlePageChange}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
          },
          "& .Mui-selected": {
            color: "blue",
          },
        }}
      />
    </Stack>
  );
}
