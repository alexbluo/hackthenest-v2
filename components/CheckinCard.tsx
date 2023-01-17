interface Props {
  firstName: string;
  lastName: string;
  school: string;
  email: string;
  role: string;
  shirt: string;
}

const CheckinCard = ({
  firstName,
  lastName,
  school,
  email,
  role,
  shirt,
}: Props) => {
  // first name, last name, school, email, role, shirt size
  // action: bind + checkin -> modal with qr input
  return <div>{firstName}, {lastName}</div>;
};

export default CheckinCard;
