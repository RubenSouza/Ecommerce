import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate, useLocation } from "react-router-dom";
import { setPage } from "../redux/features/paginate";
import { useDispatch } from "react-redux";

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
            color: "white", // Altere para a cor desejada
          },
          "& .Mui-selected": {
            color: "blue", // Altere para a cor da página selecionada
          },
        }}
      />
    </Stack>
  );
}
