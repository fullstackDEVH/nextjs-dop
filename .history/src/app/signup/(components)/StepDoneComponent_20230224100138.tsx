import Link from 'next/link';

interface Props {
  data: any;
}

export default function StepDoneComponent({ data }: Props) {
  console.log(data);
  return (
    <div>
      <h3>Done Signup</h3>
      <div>
        You can login here
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
