'use client';

import WrapperForm from '@/components/Common/WrapperForm/WrapperForm';
import { useLocalStorage } from '@/hooks';
import { SCHEMA_CREATE_JOB, SCHEMA_CREATE_TASK } from '@/lib/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Grid } from '@mui/material';
interface IFormInputs {
  name: string;
  description: string;
  quantityEntry: number;
  quantityChecker: number;
  quantityLastChecker: number;
}

export default function CreateTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SCHEMA_CREATE_TASK),
  });
  const [valueDay, setValueDay] = useState<Dayjs | null>(dayjs(new Date()));
  const router = useRouter();
  const storage = useLocalStorage('tasks');
  const onSubmit = async (data: IFormInputs) => {
    storage.push(data);
    localStorage.setItem('tasks', JSON.stringify(storage));
    alert('Create task successfully');
    router.back();
  };
  const handleChangeDay = (newValue: Dayjs | null) => {
    setValueDay(newValue);
  };
  const handleClickancel = () => {
    router.back();
  };
  return (
    <WrapperForm title="Create new task">
      <form onSubmit={handleSubmit(onSubmit)} className="form__app-container">
        <div className="form__input">
          <label className="form__label" htmlFor="name">
            Task name
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="off"
              id="name"
              placeholder="Enter task name"
              className="input__field"
              {...register('name')}
            />
          </div>
          {errors.name && <p className="form__err">{errors.name.message}</p>}
        </div>
        <div className="form__input">
          <label className="form__label" htmlFor="description">
            Description
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="off"
              id="description"
              placeholder="Enter a description..."
              className="input__field"
              {...register('description')}
            />
          </div>
          {errors.description && <p className="form__err">{errors.description.message}</p>}
        </div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="form__input">
              <label className="form__label" htmlFor="quantityEntry">
                Entry
              </label>
              <div className="form__input-wrapper">
                <input
                  type="number"
                  autoComplete="off"
                  id="quantityEntry"
                  placeholder="Enter quantity..."
                  className="input__field"
                  {...register('quantityEntry')}
                />
              </div>
              {errors.quantityEntry && <p className="form__err">{errors.quantityEntry.message}</p>}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="form__input">
              <label className="form__label" htmlFor="quantityChecker">
                Checker
              </label>
              <div className="form__input-wrapper">
                <input
                  type="number"
                  autoComplete="off"
                  id="quantityChecker"
                  placeholder="Enter quantity..."
                  className="input__field"
                  {...register('quantityChecker')}
                />
              </div>
              {errors.quantityChecker && (
                <p className="form__err">{errors.quantityChecker.message}</p>
              )}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="form__input">
              <label className="form__label" htmlFor="quantityLastChecker">
                Checker
              </label>
              <div className="form__input-wrapper">
                <input
                  type="number"
                  autoComplete="off"
                  id="quantityLastChecker"
                  placeholder="Enter quantity..."
                  className="input__field"
                  {...register('quantityLastChecker')}
                />
              </div>
              {errors.quantityLastChecker && (
                <p className="form__err">{errors.quantityLastChecker.message}</p>
              )}
            </div>
          </Grid>
        </Grid>
        <div className="form__input">
          <Stack direction="row" alignItems="center">
            <div style={{ flex: '1' }}>
              <label className="form__label" htmlFor="startTime">
                Start time
              </label>
              <div className="form__input-wrapper">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDateTimePicker
                    // className={styles.input}
                    views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
                    value={valueDay}
                    onChange={handleChangeDay}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div style={{ flex: '1' }}>
              <label className="form__label" htmlFor="startTime">
                End time
              </label>
              <div className="form__input-wrapper">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDateTimePicker
                    // className={styles.input}
                    views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
                    value={valueDay}
                    onChange={handleChangeDay}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </Stack>
        </div>
        <Stack direction="row" alignItems="center" justifyContent="space-between" columnGap={2}>
          <button
            onClick={handleClickancel}
            style={{ cursor: 'pointer', flex: '1' }}
            className="btn__auth disable"
          >
            Cancel
          </button>
          <button type="submit" className="btn__auth" style={{ flex: '1' }}>
            Create taks
          </button>
        </Stack>
      </form>
    </WrapperForm>
  );
}
