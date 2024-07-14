import React, { useMemo } from 'react';
import {
  useTable,
  usePagination,
  useGlobalFilter,
} from 'react-table';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Input,
  Button,
  Flex,
  Text
} from '@chakra-ui/react';



// Search Component
function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <Box mb={4}>
      <Input
        value={globalFilter || ''}
        onChange={e => setGlobalFilter(e.target.value)}
        placeholder="Search records..."
        size="md"
      />
    </Box>
  );
}

// Table component
function ReactTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setGlobalFilter,
    preGlobalFilteredRows,
    state: { pageIndex, globalFilter },
  } = useTable(
    { columns, data },
    useGlobalFilter,
    usePagination
  );

  return (
    <Box width="full">
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Table {...getTableProps()}  variant="simple">
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Flex justifyContent="space-between" m={4} alignItems="center">
        <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </Button>
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </Button>
        <Text>
          Page{' '}
          <Text fontWeight="bold" as="span">
            {pageIndex + 1} of {pageOptions.length}
          </Text>
        </Text>
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </Button>
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </Button>
      </Flex>
    </Box>
  );
}



export default ReactTable;
