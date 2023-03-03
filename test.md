         <form action="">
        <div>
          <label htmlFor="">Email</label>
          <input
            value={email}
            onChange={handleChangeEmail}
            type="text"
            placeholder="Enter your email"
          />
          <button onClick={handleSendEmail} type="button">
            Send
          </button>
        </div>
        <div>
          <label htmlFor="">Verification code</label>
          <input
            value={code}
            readOnly={isDisabledVerifi}
            type="number"
            placeholder="Enter verification code (6 digits)"
            onChange={handleChangeCode}
          />
        </div>
        <button onClick={handleVerificationEmail} disabled={isDisabledVerifi}>
          Email Verification
        </button>
      </form>





    // <div>
    //   <h3>BASIC INFORMATION</h3>
    //   <form action="" onSubmit={handleSubmit(onSubmit)}>
    //     <div style={{ marginBottom: '20px' }}>
    //       <label htmlFor="">Country</label>
    //       <select name="" id="">
    //         {data.map((country: Country, index) => (
    //           <option {...register('country')} key={index} value={country.name.common}>
    //             {country.name.common}
    //           </option>
    //         ))}
    //       </select>
    //       <p style={{ color: 'red', marginTop: '10px' }}>{errors.country?.message}</p>
    //     </div>
    //     <div style={{ marginBottom: '20px' }}>
    //       <label htmlFor="">Fullname</label>
    //       <input {...register('fullName')} type="text" placeholder="Enter your fullname" />
    //       <p style={{ color: 'red', marginTop: '10px' }}>{errors.fullName?.message}</p>
    //     </div>
    //     <div style={{ marginBottom: '20px' }}>
    //       <label htmlFor="">Address</label>
    //       <input {...register('address')} type="text" placeholder="Enter your address" />
    //       <p style={{ color: 'red', marginTop: '10px' }}>{errors.address?.message}</p>
    //     </div>
    //     <div style={{ display: 'flex', gap: '0 20px', marginBottom: '20px' }}>
    //       <p>Sex</p>
    //       <div>
    //         <label htmlFor="male">Male</label>
    //         <input {...register('sex')} type="radio" id="male" name="sex" value="male" />
    //       </div>
    //       <div>
    //         <label htmlFor="fmale">Female</label>
    //         <input {...register('sex')} type="radio" id="fmale" name="sex" value="fmale" />
    //       </div>
    //       <p style={{ color: 'red', marginTop: '10px' }}>{errors.sex?.message}</p>
    //     </div>
    //     <div style={{ marginBottom: '20px' }}>
    //       <label htmlFor="">DateOfBirth</label>
    //       <input {...register('dateOfBirth')} type="date" />
    //       <p style={{ color: 'red', marginTop: '10px' }}>{errors.dateOfBirth?.message}</p>
    //     </div>
    //     <div style={{ marginBottom: '20px' }}>
    //       <label htmlFor="">Phone</label>
    //       <input {...register('phone')} type="number" placeholder="Enter your phone number" />
    //       <p style={{ color: 'red', marginTop: '10px' }}>{errors.phone?.message}</p>
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>



      {/* <div className="form__input form__input--infomation">
            <label className="form__label form__label--infomation" htmlFor="dateOfBirth">
              Date Of Birth
            </label>
            <div className="form__input-wrapper form__input-wrapper--infomation">
              <LocalizationProvider className="check2" dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  inputFormat="MM/DD/YYYY"
                  value={valueDay}
                  onChange={handleChangeDay}
                  className="check"
                  renderInput={(params: any) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <p className="form__err"></p>
            </div>
          </div> */}



      {/* <div className="form__input form__input--infomation">
          <label className="form__label form__label--infomation" htmlFor="sex">
            Sex
          </label>
          <div className="form__input-wrapper form__input-wrapper--infomation">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio {...register('sex')} />}
                label="Female"
                sx={{
                  color: ' rgba(85, 85, 85, 0.6)',
                  '& .MuiFormControlLabel-label': {
                    fontSize: '14px',
                  },
                }}
              />
              <FormControlLabel
                value="male"
                control={<Radio {...register('sex')} />}
                label="Male"
                sx={{
                  color: ' rgba(85, 85, 85, 0.6)',
                  '& .MuiFormControlLabel-label': {
                    fontSize: '14px',
                  },
                }}
              />
            </RadioGroup>
            <p className="form__err">{errors.sex?.message}</p>
          </div>
        </div> */}
