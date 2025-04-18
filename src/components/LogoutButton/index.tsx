'use client';

import { useTranslations } from 'next-intl';
import Icon from '../Icon';
import Button from '../common/Button';

const LogoutButton = (props: any) => {
  const t = useTranslations('common');
  return (
    <Button
      variant="outlined"
      color="error"
      startIcon={<Icon name="logout" />}
      {...props}
    >
      {t('logout')}
    </Button>
  );
};

export default LogoutButton;
