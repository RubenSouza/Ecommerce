import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/features/paginate";

type Props = {
  totalPages: number;
};

export default function BasicPagination({ totalPages }: Props) {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(setPage(currentPage));
  }, [currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page); // Atualiza o estado com o número da página selecionada
  };

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
