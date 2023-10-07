import { ExpandMore } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useEffect } from 'react'
import { Loader } from '../../common/components'
import { POLLING_INTERVAL_MIN } from '../../config'
import { RootState, useAppDispatch } from '../../store/store'
import { Member } from '../types'
import { onLoadMembers, useGetUsersQuery } from '../slices'
import { useSelector } from 'react-redux'

export const MemberGrid = () => {
  const { members } = useSelector((state: RootState) => state.member)
  const dispatch = useAppDispatch()
  const { data, error, isFetching, isSuccess } = useGetUsersQuery(null, {
    pollingInterval: 1000 * 60 * POLLING_INTERVAL_MIN,
  })

  useEffect(() => {
    dispatch(onLoadMembers(data))
  }, [isSuccess])

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'id',
      hide: true,
    },
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 170,
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 170,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 200,
    },
    {
      field: 'ssn',
      headerName: 'SSN',
      width: 150,
    },
  ]

  return (
    <>
      <Loader open={isFetching} />
      <Box sx={{ mt: 1 }}>
        <Accordion sx={{ m: 1 }} disableGutters={true} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6">User List</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Box sx={{ mt: 1, height: '70vh', width: '100%' }}>
              <DataGrid
                sx={{
                  backgroundColor: 'white',
                  mt: 1,
                  xs: { height: 'calc(100% - 200px)' },
                  md: { height: 'calc(100% - 40px)' },
                }}
                getRowId={(row: Member) => row.ssn}
                rows={members ?? []}
                columns={columns}
                pageSize={50}
                rowsPerPageOptions={[50]}
                loading={isFetching}
                error={error}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  )
}
