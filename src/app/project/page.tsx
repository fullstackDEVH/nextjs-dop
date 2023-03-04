'use client';
import CardItem from '@/components/Common/CardItem/CardItem';
import { useLocalStorage } from '@/hooks';
import { Grid, Stack, Pagination } from '@mui/material';
import './project.module.css';

export default function Project() {
  const storage = useLocalStorage('projects');
  console.log(storage);
  return (
    <div className="wrapper__content">
      <Grid container spacing={2}>
        {storage.map((item: any, index: number) => (
          <Grid key={index} item xs={4}>
            <CardItem
              slug={item.slug}
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
    </div>
  );
}
