'use client';
import { Stack, Typography, Grid, Pagination } from '@mui/material';
import Image from 'next/image';
import styles from './task.module.css';
import GroupIcon from '@mui/icons-material/Group';
import Link from 'next/link';
import TaskItem from './TaskItem';
import { useLocalStorage } from '@/hooks';
import EmptyData from '@/components/Common/EmptyData';
export default function Task() {
  const storage = useLocalStorage('tasks');
  if (storage === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.wrapper}>
      {storage.length > 0 ? (
        <>
          <Image
            src="/card_img.jpg"
            alt="card"
            height={180}
            width={1018}
            style={{ objectFit: 'cover', borderRadius: '5px' }}
          ></Image>
          <div className={styles.heading}>
            <Typography
              sx={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '5px',
              }}
              variant="h4"
            >
              Job Name
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <p className={styles.text__heading}>
                  Lorem ipsum dolor sit amet consectetur pellentesque.
                </p>
              </Grid>
              <Grid item xs={3}>
                <Stack direction="row" alignItems="center" columnGap={1}>
                  <span
                    style={{
                      flexBasis: '30%',
                    }}
                    className={styles.text__heading}
                  >
                    Start time
                  </span>
                  <span>:</span>
                  <span className={styles.text__heading}>24/02/2023</span>
                </Stack>
                <Stack direction="row" alignItems="center" columnGap={1}>
                  <span
                    style={{
                      flexBasis: '30%',
                    }}
                    className={styles.text__heading}
                  >
                    End time
                  </span>
                  <span>:</span>
                  <span className={styles.text__heading}>25/02/2023</span>
                </Stack>
              </Grid>
              <Grid item xs={3} display="flex" alignItems="center" flexDirection="column">
                <span className={styles.text__heading}>Quantity</span>
                <Stack direction="row" alignItems="center" columnGap={1}>
                  <span className={styles.text__heading}>20</span>
                  <GroupIcon style={{ fontSize: '2rem' }} />
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Link href="tasks/create">
                  <button className="btn__auth">New Task</button>
                </Link>
              </Grid>
            </Grid>
          </div>
          <div className={styles.content}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25);',
                margin: '30px 200px',
              }}
            >
              <div className={`${styles.filter__item} ${styles.active}`}>
                <span>Level 1</span>
              </div>
              <div className={styles.filter__item}>
                <span>Level 3</span>
              </div>
              <div className={styles.filter__item}>
                <span>Level 5</span>
              </div>
              <div className={styles.filter__item}>
                <span>Level 7</span>
              </div>
            </Stack>
            <div className={styles.tasks}>
              <Grid container spacing={2}>
                {storage.map((item: any, index: number) => (
                  <Grid key={index} item xs={4}>
                    <TaskItem
                      slug={item.slug}
                      taskName={item.name}
                      taskImage={item.image}
                      taskDescription={item.description}
                      quantity={
                        +item.quantityEntry + +item.quantityChecker + +item.quantityLastChecker
                      }
                      status={item.status}
                      startTime={item.startTime}
                      endTime={item.endTime}
                    ></TaskItem>
                  </Grid>
                ))}
              </Grid>
              <Stack sx={{ marginTop: '50px' }} alignItems="center" spacing={2}>
                <Pagination size="medium" count={10} variant="outlined" shape="rounded" />
              </Stack>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link href="tasks/create">
            <button className="btn__auth">New Task</button>
          </Link>
          <EmptyData></EmptyData>
        </>
      )}
    </div>
  );
}
