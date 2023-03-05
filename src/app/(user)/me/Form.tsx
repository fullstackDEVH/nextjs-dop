'use client';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/joy/RadioGroup';
import TextField from '@mui/material/TextField';
import Radio from '@mui/joy/Radio';
import Typography from '@mui/joy/Typography';
import { Container } from '@mui/material';

import styles from './form.module.css';

const Form = () => {
  return (
    <div className={styles.profile__user}>
      <div className={styles.profile__user__container}>
        <div className={styles.profile__user__container_form}>
          <div className={styles.form__controll}>
            <label htmlFor="input-country">Country</label>
            <TextField
              label="Ex: Vietnamese"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              sx={{ background: 'rgba(209, 209, 209, 0.6)', flex: '1', color: 'red' }}
            />
          </div>

          <div className={styles.form__controll}>
            <label htmlFor="input-fullname">Fullname</label>
            <TextField
              label="Ex: Tran Van B"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              sx={{ background: 'rgba(209, 209, 209, 0.6)', flex: '1' }}
            />
          </div>

          <div className={styles.form__controll}>
            <label htmlFor="input-address">Address</label>
            <TextField
              label="Ex: 166 Tran Dai Nghia"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              sx={{ background: 'rgba(209, 209, 209, 0.6)', flex: '1' }}
            />
          </div>

          <Container sx={{ display: 'flex', padding: '0', width: '100%' }}>
            <Typography
              level="h2"
              sx={{
                flex: '0 1 150px',
                textAlign: 'start',
                color: 'var(--main-text)',
                fontWeight: '500',
              }}
            >
              Gender
            </Typography>
            <RadioGroup
              sx={{ display: 'flex', width: '100%', flex: '1' }}
              defaultValue="female"
              orientation="horizontal"
            >
              <Radio label="Male" value="male" />
              <Radio label="Female" value="female" />
            </RadioGroup>
          </Container>

          <div className={styles.form__controll}>
            <label htmlFor="input-date-of-birth">Date Of Birth</label>
            <TextField
              label="Ex: 20/05/2001"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              sx={{ background: 'rgba(209, 209, 209, 0.6)', flex: '1' }}
            />
          </div>

          <div className={styles.form__controll}>
            <label htmlFor="input-phone-number">Phone</label>
            <TextField
              label="Ex: 038.515x.xxx"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              sx={{ background: 'rgba(209, 209, 209, 0.6)', flex: '1' }}
            />
          </div>

          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
          >
            <Button className={`${styles.btn} ${styles.cancel}`}>Cancel</Button>
            <Button className={`${styles.btn} ${styles.save}`}>Save</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Form;
