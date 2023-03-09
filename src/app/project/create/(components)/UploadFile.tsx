import { Button } from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import styles from './upload.module.css';
import Progress from './Progress';

interface IProps {
  handleNextStep : () => void;
  handlePreStep : () => void;
}


const UploadFiles = ( { handleNextStep, handlePreStep } : IProps) => {
  return (
    <div className={styles.upload__form}>
      <div className={styles.upload__form__contain}>
        <h3>3. Upload Files</h3>

        <Button sx={{ fontSize : "1.4rem", fontWeight: "600"}} variant="contained">Upload Files</Button>
        <div className={styles.upload__form__contain_rectangle}>
          <div className={styles.upload__form__contain_rectangle__item}>
            <div className={styles.upload__form__contain_rectangle__item__title}>
              <InsertDriveFileOutlinedIcon />
              <p>huy.pdf</p>
            </div>
            <Progress />
          </div>

          <div className={styles.upload__form__contain_rectangle__item}>
            <div className={styles.upload__form__contain_rectangle__item__title}>
              <InsertDriveFileOutlinedIcon />

              <p>huy.pdf</p>
            </div>
            <Progress />
          </div>

          <div className={styles.upload__form__contain_rectangle__item}>
            <div className={styles.upload__form__contain_rectangle__item__title}>
              <InsertDriveFileOutlinedIcon />

              <p>huy.pdf</p>
            </div>
            <Progress />
          </div>
        </div>

        <div className={styles.upload__form__contain__btns}>
          <Button sx={{ fontSize : "1.2rem", fontWeight: "600"}} variant="outlined" onClick={handlePreStep}>Previous</Button>
          <Button sx={{ fontSize : "1.2rem", fontWeight: "600"}} variant="contained" onClick={handleNextStep}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default UploadFiles;
