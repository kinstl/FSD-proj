import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
    AutoSizer,
    List,
    ListRowProps,
    WindowScroller,
} from 'react-virtualized';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { PAGE_ID } from 'widgets/Page/Page';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));
};

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;
    const { t } = useTranslation('article');

    const isBig = view === ArticleView.BIG;

    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig
        ? articles.length
        : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
        const items = [];

        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    className={cls.card}
                    article={articles[i]}
                    view={view}
                    target={target}
                    key={articles[i].id}
                />,
            );
            console.log(articles[i]);
        }

        return (
            <div className={cls.row} key={key} style={style}>
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size={TextSize.L} title={t('notFoundList')} />
            </div>
        );
    }

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                width,
                height,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop,
            }) => (
                <div
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <List
                        height={height ?? 700}
                        rowCount={rowCount}
                        rowHeight={isBig ? 700 : 330}
                        rowRenderer={rowRender}
                        width={width ? width - 80 : 700}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
