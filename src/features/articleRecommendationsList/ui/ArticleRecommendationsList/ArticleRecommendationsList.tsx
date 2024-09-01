import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { ArticleList } from 'entities/Article';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('article');
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(3);

        if (isLoading || error) {
            return null;
        }

        return (
            <VStack gap="8" className={classNames('', {}, [className])}>
                <Text size={TextSize.L} title={t('recommend')} />
                <ArticleList articles={articles} target="_blank" />
            </VStack>
        );
    },
);
