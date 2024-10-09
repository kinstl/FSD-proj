import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation('admin');

    return <Page>{t('adminPanel')}</Page>;
};

export default AdminPanelPage;
