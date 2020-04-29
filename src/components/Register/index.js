import React, { useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import { useHistory, Link } from 'react-router-dom';
import { RouteList } from 'lib/routes';
import useResponseData from '../../utils/hooks/useResponseData';
import { responseSheets } from '../../lib/sheets';
import { UserContext } from 'utils/context/UserContextProvider';
import getUserInfo from 'utils/getUserInfo';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import useSearchParams from 'utils/hooks/useSearchParams';
import ContentBox from 'components/layout/ContentBox';
import image from 'assets/illustrations/illustration 2.png';

import styles from './Register.module.scss';

const cx = classNames.bind(styles);

const Register = () => {
  const history = useHistory();
  const { setUserData } = useContext(UserContext);
  const { responses } = useContext(SpreadsheetContext);
  const query = useSearchParams();
  const userEmail = query?.get('email');
  const userType = query?.get('type');
  const { data } = useResponseData(userEmail, responseSheets[userType]);

  useEffect(() => {
    const existingEmail = window.localStorage.getItem('email');

    // Typeform returns email as  _____ for existing user flow
    const requestEmail = userEmail === '_____' ? existingEmail : userEmail;

    if (!existingEmail) {
      window.localStorage.setItem('email', requestEmail);
      const userInfo = getUserInfo(responses, requestEmail);
      setUserData(userInfo);
    }
  }, [userEmail, userType, history, data, setUserData, responses]);

  return (
    <ContentBox theme="none" className={cx('register')} isTop>
      <div className={cx('register-wrapper')}>
        <div className={cx('register-content')}>
          <h3 className={cx('register-title')}>
            Thanks for signing up! You’ll receive an email from us once we find
            a match.
          </h3>
          <Link className={cx('link')} to={`${RouteList.help}?as=${userType}`}>
            Continue
          </Link>
        </div>
        <div className={cx('image-wrapper')}>
          <img className={cx('image')} src={image} alt="" />
        </div>
      </div>
    </ContentBox>
  );
};

export default Register;
