import { Grid, Paper, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Paper
      sx={{
        marginTop: 'calc(10% + 60px)',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Grid
        container
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={'space-around'}
        sx={{ mb: 1, mt: 1 }}
      >
        <Grid item xs={2}>
          <Typography>Copyright</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>All rights reserved</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
