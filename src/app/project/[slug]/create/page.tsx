'use client';

import WrapperForm from '@/components/Common/WrapperForm/WrapperForm';
import { useLocalStorage } from '@/hooks';
import { SCHEMA_CREATE_JOB } from '@/lib/constants';
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
interface IFormInputs {
  name: string;
  description: string;
  quantityWorker: number;
}

export default function CreateJob() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SCHEMA_CREATE_JOB),
  });
  const [valueDay, setValueDay] = useState<Dayjs | null>(dayjs(new Date()));
  const router = useRouter();
  const storage = useLocalStorage('jobs');
  const onSubmit = async (data: IFormInputs) => {
    storage.push(data);
    localStorage.setItem('jobs', JSON.stringify(storage));
    alert('Create job successfully');
    router.back();
  };
  const handleChangeDay = (newValue: Dayjs | null) => {
    setValueDay(newValue);
  };
  return (
    <WrapperForm title="Create new Job">
      <form onSubmit={handleSubmit(onSubmit)} className="form__app-container">
        <div className="form__input">
          <label className="form__label" htmlFor="name">
            Job name
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="off"
              id="name"
              placeholder="Enter job name"
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
        <div className="form__input">
          <label className="form__label" htmlFor="quantityWorker">
            Quantity Worker
          </label>
          <div className="form__input-wrapper">
            <input
              type="number"
              autoComplete="off"
              id="quantityWorker"
              placeholder="Enter quantity worker..."
              className="input__field"
              {...register('quantityWorker')}
            />
          </div>
          {errors.quantityWorker && <p className="form__err">{errors.quantityWorker.message}</p>}
        </div>
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
          <Link href="/project/project-name-68" style={{ display: 'block', flex: '1' }}>
            <button style={{ cursor: 'pointer' }} className="btn__auth disable">
              Cancel
            </button>
          </Link>
          <button type="submit" className="btn__auth" style={{ flex: '1' }}>
            Create job
          </button>
        </Stack>
      </form>
    </WrapperForm>
  );
}
