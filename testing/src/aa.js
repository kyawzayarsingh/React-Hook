import { useEffect, useState } from 'react'

import Autocomplete from '@material-ui/lab/Autocomplete'

import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'

import TownshipDialog from './TownshipDialog'

import { REGIONS } from 'app-constants'
import { reload } from 'common/function'
import withDrawer from 'components/drawer'
import { GetTownshipLists, GetTownshipListsByRegion } from 'lib/api/township'

const useStyles = makeStyles(() => ({
  header: {
    textAlign: 'center',
    fontFamily: 'arial',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  name: {
    textAlign: 'center',
  },
}))

const Township = () => {
  const classes = useStyles()
  const [townshipLists, setTownshipLists] = useState([])
  const [region, setRegion] = useState([])
  const [addDialogOpen, setAddDialogOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])

  useEffect(() => {
    let loadDatas = []
    setOpen()
    GetTownshipListsByRegion().then((response) => {
      for (const [codeKey, value] of Object.entries(
        response.data.township_list,
      ).sort()) {
        value.map((item, key) => {
          loadDatas.push({
            Code: codeKey,
            codeName: item,
          })
        })
      }
      setTownshipLists(loadDatas)
      setRegion(REGIONS)
    })
  }, [])
  const handleRegionChange = (code) => {
    setOpen(true)
    var keyCode = townshipLists.filter((item) => {
      if (item.Code === code) {
        return item.codeName
      }
    })
    setFilter(keyCode)
  }

  const filteredData = filter.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toLowerCase().includes(search.toLowerCase()),
    )
  })

  const handleTownshipDialog = () => {
    setAddDialogOpen((prevState) => !prevState)
  }

  const handelCloseTownshipDialog = () => {
    setAddDialogOpen(false)
    setOpen(false)
    reload()
  }

  return (
    <Grid container item xs={12}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <h2>Township</h2>
        <Autocomplete
          onChange={(e) => handleRegionChange(e.target.value)}
          options={region}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a region"
              variant="outlined"
              fullWidth
            />
          )}
        />
        {open && (
          <div>
            <Box
              mt={3}
              component="div"
              sx={{
                display: 'flex',
                justifyContent: 'right',
              }}
            >
              <TextField
                required
                id="outlined-required"
                size="small"
                label="Search"
                sx={{ mr: 2 }}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#3f51b5',
                  padding: '5px',
                  color: '#ffffff',
                  borderRadius: 4,
                }}
                startIcon={<AddIcon />}
                onClick={handleTownshipDialog}
              >
                Add Township
              </Button>
            </Box>
            <Box mt={3}>
              <TableContainer component={Paper} sx={{ maxHeight: 530 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.header}>
                        Township name
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {townshipLists.filter((townshipLists) => 
                      townshipLists.toLowerCase().includes(search.toLowerCase()))
                      .map( townshipLists => (
                        <TableRow key={townshipLists}>
                          <TableCell className={classes.name}>{townshipLists}</TableCell>
                        </TableRow>
                      ))} */}

                    {filteredData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className={classes.name}>
                          {item.codeName}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </div>
        )}
        <TownshipDialog
          open={addDialogOpen}
          onClose={handelCloseTownshipDialog}
        />
      </Grid>
    </Grid>
  )
}

export default withDrawer(Township)
