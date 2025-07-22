import {
  Box,
  Button,
  Flex,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from '@tanstack/react-table';
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import * as React from 'react';
import { MdCancel, MdCheckCircle, MdOutlineError } from 'react-icons/md';

const columnHelper = createColumnHelper();

export default function UserTable() {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');

  const defaultData = [
    { id: 1, username: 'team_alpha', joinedOn: '2024-06-12', rank: 'Gold', status: 'Approved' },
    { id: 2, username: 'beta_squad', joinedOn: '2024-07-01', rank: 'Silver', status: 'Disable' },
    { id: 3, username: 'gamma_force', joinedOn: '2024-07-03', rank: 'Bronze', status: 'Error' },
    { id: 4, username: 'delta_team', joinedOn: '2024-07-08', rank: 'Gold', status: 'Approved' },
    { id: 5, username: 'epsilon_unit', joinedOn: '2024-07-10', rank: 'Platinum', status: 'Approved' },
    { id: 6, username: 'theta_group', joinedOn: '2024-07-12', rank: 'Bronze', status: 'Disable' },
    { id: 7, username: 'zeta_core', joinedOn: '2024-07-14', rank: 'Gold', status: 'Approved' },
  ];

  const columns = [
    columnHelper.accessor('id', {
      id: 'srno',
      header: () => <Text fontSize="12px" color="gray.400">Sr. No.</Text>,
      cell: info => <Text color={textColor} fontSize="sm" fontWeight="700">{info.getValue()}</Text>
    }),
    columnHelper.accessor('username', {
      id: 'username',
      header: () => <Text fontSize="12px" color="gray.400">Team Username</Text>,
      cell: info => <Text color={textColor} fontSize="sm" fontWeight="700">{info.getValue()}</Text>
    }),
    columnHelper.accessor('joinedOn', {
      id: 'joinedOn',
      header: () => <Text fontSize="12px" color="gray.400">Joined On</Text>,
      cell: info => <Text color={textColor} fontSize="sm" fontWeight="700">{info.getValue()}</Text>
    }),
    columnHelper.accessor('rank', {
      id: 'rank',
      header: () => <Text fontSize="12px" color="gray.400">Rank</Text>,
      cell: info => <Text color={textColor} fontSize="sm" fontWeight="700">{info.getValue()}</Text>
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => <Text fontSize="12px" color="gray.400">Status</Text>,
      cell: (info) => (
        <Flex align="center">
          <Icon
            w="18px"
            h="18px"
            me="5px"
            color={
              info.getValue() === 'Approved'
                ? 'green.500'
                : info.getValue() === 'Disable'
                ? 'red.500'
                : info.getValue() === 'Error'
                ? 'orange.500'
                : null
            }
            as={
              info.getValue() === 'Approved'
                ? MdCheckCircle
                : info.getValue() === 'Disable'
                ? MdCancel
                : info.getValue() === 'Error'
                ? MdOutlineError
                : null
            }
          />
          <Text color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
  ];

  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Card flexDirection="column" w="100%" px="0px" overflowX="auto">
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text color={textColor} fontSize="22px" fontWeight="700">
          List of Team
        </Text>
        <Menu />
      </Flex>

      <Box>
        <Table variant="simple" color="gray.500" mb="24px" mt="12px">
          <Thead>
            {table.getHeaderGroups().map(headerGroup => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Th key={header.id} borderColor={borderColor}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map(row => (
              <Tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <Td key={cell.id} fontSize="sm" borderColor="transparent">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Flex justify="space-between" align="center" px="25px" pb="20px">
        <Button
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
          size="sm"
        >
          Previous
        </Button>
        <Text fontSize="sm" color={textColor}>
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </Text>
        <Button
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
          size="sm"
        >
          Next
        </Button>
      </Flex>
    </Card>
  );
}
