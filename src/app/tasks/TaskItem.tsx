import Image from 'next/image';
import React from 'react';
import styles from './task.module.css';
import { Stack, Typography, Avatar } from '@mui/material/';
import Link from 'next/link';
import GroupIcon from '@mui/icons-material/Group';
interface Props {
  taskName: string;
  taskImage?: string;
  taskDescription: string;
  slug: string;
  quantity: number;
  status: string;
  startTime: string;
  endTime: string;
}

const TaskItem = ({
  taskName,
  taskImage = '/card_img.jpg',
  taskDescription,
  slug,
  quantity,
  status = 'Active',
  startTime = '24/02/2023',
  endTime = '28/02/2023',
}: Props) => {
  const AUTHOR_NAME = 'David';
  return (
    <Link href={`/${slug}`} className={styles.link}>
      <div className={styles.container}>
        <div>
          <Image
            className={styles.img}
            src={taskImage}
            alt="Image"
            width={256}
            height={120}
          ></Image>
          <span className={styles.status}>{status}</span>
        </div>
        <Stack direction="row" justifyContent="space-between">
          <div>
            <div className={styles.name}>
              <Typography
                sx={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: '#1A1A1A',
                }}
                variant="h5"
              >
                {taskName}
              </Typography>
            </div>
            <p className={styles.description}>{taskDescription}</p>
          </div>
          <Stack>
            <p className={styles.text__main}>Quantity</p>
            <Stack
              marginTop="10px"
              direction="row"
              alignItems="center"
              justifyContent="center"
              columnGap={1}
            >
              <span className={styles.text__main}>{quantity}</span>
              <GroupIcon className={styles.text__main}></GroupIcon>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center" columnGap={1}>
            <span className={styles.text__main}>{startTime}</span> -{' '}
            <span className={styles.text__main}>{endTime}</span>
          </Stack>
          <Stack direction="row" alignItems="center" columnGap={1}>
            <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="/card_img.jpg" />
            <Typography
              sx={{
                fontSize: '1.4rem',
                fontWeight: '400',
                color: '#1A1A1A',
              }}
              variant="subtitle2"
            >
              {AUTHOR_NAME}
            </Typography>
          </Stack>
        </Stack>
      </div>
    </Link>
  );
};

export default TaskItem;
