'use client';
import CardItem from '@/components/Common/CardItem/CardItem';
import EmptyData from '@/components/Common/EmptyData';
import { useLocalStorage } from '@/hooks';
import { Grid, Stack, Pagination } from '@mui/material';
import Link from 'next/link';
import './project.module.css';

export default function Project() {
  const storage = useLocalStorage('projects');
  if (storage === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className="wrapper__content">
      <div className="main__content-heading">
        <Link className="link" href="/project/create">
          <button className="button">New Project</button>
        </Link>
      </div>
      {storage.length > 0 ? (
        <>
          <Grid container spacing={2}>
            {storage.map((item: any, index: number) => (
              <Grid key={index} item xs={4}>
                <CardItem
                  slug={`project/${item.slug} `}
                  cardName={item.name}
                  cardImage={item.image}
                  cardDescription={item.description}
                ></CardItem>
              </Grid>
            ))}
          </Grid>
          <Stack sx={{ marginTop: '50px' }} alignItems="center" spacing={2}>
            <Pagination size="medium" count={10} variant="outlined" shape="rounded" />
          </Stack>
        </>
      ) : (
        <EmptyData></EmptyData>
      )}
    </div>
  );
}
