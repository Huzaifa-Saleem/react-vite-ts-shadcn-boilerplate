import { Navigate, useParams } from 'react-router-dom';
import { getPath } from '@routes/paths';

// ----------------------------------------------------------------------
type Props = { to: string };
// ----------------------------------------------------------------------
export default function DefaultNavigate({ to }: Props) {
  const params = useParams();
  return <Navigate to={getPath(to, params)} replace />;
}
