import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import YupPassword from 'yup-password'

import { onAddMember, useCreateUserMutation } from '../slices'

import { ExpandMore, Restore, Save } from '@mui/icons-material'
import { AlertOption } from '../../common/types/common.type'
import { Member } from '../types'
import { useAppDispatch } from '../../store/store'
import { Loader } from '../../common/components'

//Call to Yup Password.
YupPassword(yup)

const ssnPattern = /^\d{3}-\d{2}-\d{4}$/

const validationSchema = yup.object({
  firstName: yup.string().trim().required('Field is required'),
  lastName: yup.string().trim().required('Field is required'),
  address: yup.string().trim().required('Field is required'),
  ssn: yup
    .string()
    .trim()
    .required('Field is required')
    .matches(ssnPattern, 'Format must be nnn-nn-nnnn'),
})

export const MemberForm = () => {
  const dispatch = useAppDispatch()
  const [createUser, { isLoading: isLoadingCreate }] = useCreateUserMutation()
  const [expanded, setExpanded] = useState(true)

  const [alert, setAlert] = useState<AlertOption>({
    isAlertOpen: false,
    msgError: '',
  })

  const initialValues: Member = {
    firstName: '',
    lastName: '',
    address: '',
    ssn: '',
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: Member, { resetForm }) => {
      setAlert({
        isAlertOpen: false,
        msgError: '',
      })

      values = {
        ...values,
        firstName: values.firstName.trim().toUpperCase(),
        lastName: values.lastName.trim().toUpperCase(),
        address: values.lastName.trim().toUpperCase(),
      }

      createUser(values)
        .unwrap()
        .then((response: Member) => {
          dispatch(onAddMember(response))
          resetForm()
        })
        .catch((error) => {
          setAlert({
            isAlertOpen: true,
            msgError: error.data.message,
          })
        })
    },

    onReset: (resetForm) => {
      resetForm
    },
  })

  useEffect(() => {
    formik.setValues(initialValues)
  }, [])

  return (
    <>
      <Loader open={isLoadingCreate} />
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <Box sx={{ mt: 1 }}>
          <Accordion
            expanded={expanded}
            disableGutters={true}
            onChange={() => setExpanded(!expanded)}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">New User</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                direction={{ xs: 'column', md: 'row' }}
                spacing={1}
                columns={12}
              >
                <Grid item xs={12}>
                  <TextField
                    name="firstName"
                    label="First Name"
                    variant="standard"
                    fullWidth
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                    value={formik.values.firstName}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="lastName"
                    label="Last Name"
                    variant="standard"
                    fullWidth
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                    value={formik.values.lastName}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="address"
                    label="Address"
                    variant="standard"
                    fullWidth
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
                    value={formik.values.address}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="ssn"
                    label="SSN (NNN-NN-NNNN)"
                    variant="standard"
                    fullWidth
                    onChange={formik.handleChange}
                    error={formik.touched.ssn && Boolean(formik.errors.ssn)}
                    helperText={formik.touched.ssn && formik.errors.ssn}
                    value={formik.values.ssn}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                direction={{ xs: 'column', md: 'row' }}
                justifyContent={'space-between'}
                sx={{ mb: 1, mt: 1 }}
              >
                <Grid item xs={2} sx={{ mt: 2, ml: { xl: 1, xs: 0 } }}>
                  <Button
                    startIcon={<Restore />}
                    fullWidth
                    variant="outlined"
                    disabled={isLoadingCreate}
                    type="reset"
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item xs={2} sx={{ mt: 2, ml: { xl: 1, xs: 0 } }}>
                  <Button
                    startIcon={<Save />}
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={isLoadingCreate || !formik.isValid}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      </form>
      <Box hidden={!alert.isAlertOpen} sx={{ mt: 2 }}>
        <Alert severity="error">
          <AlertTitle>Error:</AlertTitle>
          {alert.msgError}
        </Alert>
      </Box>
    </>
  )
}
