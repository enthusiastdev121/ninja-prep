import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import LockIcon from '@material-ui/icons/Lock';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';

export const LockedIcon = styled(LockIcon)`
  color: black;
`;

export const AcceptedIcon = styled(CheckCircleIcon)`
  color: green;
`;

export const FreeUnlockedIcon = styled(LockOpenIcon)`
  color: #ee953d;
`;
