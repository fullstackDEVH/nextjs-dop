import Image from 'next/image';
import React from 'react';
import styles from './carditem.module.css';
import { Stack, Typography, Avatar } from '@mui/material/';
import Link from 'next/link';
interface Props {
  cardName: string;
  cardImage: string;
  cardDescription: string;
  slug: string;
}

const CardItem = ({ cardName, cardImage, cardDescription, slug }: Props) => {
  const AUTHOR_NAME = 'David';
  return (
    <Link href={`/${slug}`} className={styles.link}>
      <div className={styles.container}>
        <Image className={styles.img} src={cardImage} alt="Image" width={256} height={120}></Image>
        <div className={styles.name}>
          <Typography
            sx={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1A1A1A',
            }}
            variant="h5"
          >
            {cardName}
          </Typography>
        </div>
        <span className={styles.description}>{cardDescription}</span>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
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
      </div>
    </Link>
  );
};

export default CardItem;
