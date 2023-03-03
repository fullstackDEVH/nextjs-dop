const regexEmail = (email: string) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(regex)) return true;
  return false;
};
export default regexEmail;
