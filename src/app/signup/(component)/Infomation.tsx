import React from 'react'
import { useState } from "react";
import styles from "@/app/signup/signup.module.css";

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

interface Props {
  handleIncrementStep: () => void;
}

function Infomation({ handleIncrementStep }: Props) {
  //date time picker
  const [valueDay, setValueDay] = useState<Dayjs | null>(dayjs(""));
  const handleChangeDay = (newValue: Dayjs | null) => {
    setValueDay(newValue);
  };

  //slected country
  const [country, setCountry] = React.useState("");
  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  return (
    <div className={styles.signupcontentstep2}>
      <div className={styles.signupcontent__title}>BASIC INFORMATION</div>
      <div className={styles.signupcontent__form}>
        <div className={styles.form__input}>
          <label htmlFor="country">Country</label>
          <FormControl className={styles.slected} variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Choose your country</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={country}
              onChange={handleChangeCountry}
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
        <div className={styles.form__input}>
          <label htmlFor="fullName">Fullname</label>
          <TextField
            id="fullName"
            label="Enter your fullname"
            variant="filled"
            className={styles.input}
          />
        </div>
        <div className={styles.form__input}>
          <label htmlFor="address">Address</label>
          <TextField
            id="address"
            label="Enter your address"
            variant="filled"
            className={styles.input}
          />
        </div>
        <div className={styles.form__input}>
          <label>Sex</label>
          <RadioGroup
            className={styles.radio}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </div>
        <div className={styles.form__input}>
          <label>Date Of Birth</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              className={styles.input}
              inputFormat="MM/DD/YYYY"
              value={valueDay}
              onChange={handleChangeDay}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className={styles.form__input}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <TextField
            id="phoneNumber"
            label="Enter your phone number"
            variant="filled"
            type="number"
            className={styles.input}
          />
        </div>
        <Button className="btn" variant="contained" onClick={handleIncrementStep}>
          Signup Now
        </Button>
      </div>
    </div>
  );
}


export default Infomation
