import WrapperForm from '@/components/Common/WrapperForm/WrapperForm';
import { useLocalStorage } from '@/hooks';
import { SCHEMA_CREATE_PROJECT } from '@/lib/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import Link from 'next/link';
import { Stack } from '@mui/material/';
import { useRouter } from 'next/navigation';
interface IFormInputs {
  name: string;
  description: string;
}

interface IProps {
  handleNextStep : () => void;
}

export default function CreateProject( { handleNextStep } : IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SCHEMA_CREATE_PROJECT),
  });
  const [file, setFile] = useState('');
  const router = useRouter();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const getFile: any = acceptedFiles.map((file: any) => URL.createObjectURL(file));
      setFile(getFile[0]);
    },
  });

  // const thumbs = files.map((file) => (
  //   <div key={file.name}>
  //     <div>
  //       <Image
  //         src={file.preview}
  //         onLoad={() => {
  //           URL.revokeObjectURL(file.preview);
  //         }}
  //       />
  //     </div>
  //   </div>
  // ));

  // useEffect(() => {
  //   return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  // }, [files]);
  const storage = useLocalStorage('projects');

  const onSubmit = async (data: IFormInputs) => {
    // const convertData = {
    //   ...data,
    //   slug: 'project-name-' + Math.floor(Math.random() * 100),
    //   image: file,
    // };
    // storage.push(convertData);
    // localStorage.setItem('projects', JSON.stringify(storage));
    handleNextStep();
    // router.back();
  };


  return (
      <form onSubmit={handleSubmit(onSubmit)} className="form__app-container">
        <div className="form__input">
          <label className="form__label" htmlFor="name">
            Project name
          </label>
          <div className="form__input-wrapper">
            <input
              autoComplete="off"
              id="name"
              placeholder="Enter project name"
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
          <label className="form__label" htmlFor="image">
            Banner
          </label>
          <div className="form__input-wrapper">
            <div {...getRootProps({ className: 'dropzone' })}>
              <input id="image" {...getInputProps()} />
              <p>Drag drop some files here, or click to select files</p>
            </div>
            {file && (
              <Image
                src={file}
                alt="img"
                width={`600`}
                height={`300`}
                style={{ objectFit: 'cover', marginTop: '20px', borderRadius: '10px' }}
              ></Image>
            )}
            {/* {errors.image && <p className="form__err">{errors.image.message}</p>} */}
          </div>
        </div>
        <Stack direction="row" alignItems="center" justifyContent="space-between" columnGap={2}>
          <Link href="/project" style={{ display: 'block', flex: '1' }}>
            <button style={{ cursor: 'pointer' }} className="btn__auth disable">
              Cancel
            </button>
          </Link>
          <button type="submit" className="btn__auth" style={{ flex: '1' }} >
            Next Step
          </button>
        </Stack>
      </form>
  );
}
