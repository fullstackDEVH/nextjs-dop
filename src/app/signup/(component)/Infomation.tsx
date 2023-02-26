import React from 'react'

// import MUI
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function Infomation(props: { onIncrementStep: () => void }) {
  //date time picker
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2023-02-23T21:11:54'));
  const handleChange1 = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  //slected country
  const [country, setCountry] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  return (
    <div className="signupcontent-step2">
      <div className="signupcontent__title">BASIC INFORMATION</div>
      <div className="signupcontent__form">
        <div className="form__input">
          <span>Country</span>
          <FormControl className="slected" variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Choose your country</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={country}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Choose your country</em>
              </MenuItem>
              <MenuItem value={10}>Viet Nam</MenuItem>
              <MenuItem value={20}>American</MenuItem>
              <MenuItem value={30}>Korea</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form__input">
          <span>Fullname</span>
          <TextField
            id="filled-basic"
            label="Enter your fullname"
            variant="filled"
            className="input"
          />
        </div>
        <div className="form__input">
          <span>Address</span>
          <TextField
            id="filled-basic"
            label="Enter your address"
            variant="filled"
            className="input"
          />
        </div>
        <div className="form__input">
          <span>Sex</span>
          <RadioGroup
            className="radio"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </div>
        <div className="form__input">
          <span>Date Of Birth</span>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              className="input"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange1}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="form__input">
          <span>Phone Number</span>
          <TextField
            id="filled-basic"
            label="Enter your phone number"
            variant="filled"
            type="number"
            className="input"
          />
        </div>
        <Button onClick={props.onIncrementStep} className="btn" variant="contained">
          Signup Now
        </Button>
      </div>
    </div>
  );
}


export default Infomation
