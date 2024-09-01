import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from 'entities/Article';
import {
    ArticleSortField,
    ArticleType,
} from 'entities/Article/model/types/article';
import { fetchNextArticlePage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

jest.mock('../fetchArticlesList/fetchArticlesList.ts');

const articleData = {
    page: 1,
    ids: [],
    entities: {},
    limit: 5,
    isLoading: false,
    hasMore: true,
    order: 'asc',
    search: '',
    view: ArticleView.BIG,
    sort: ArticleSortField.CREATED,
    type: ArticleType.ALL,
    _inited: false,
} as ArticlesPageSchema;

describe('fetchNextArticlePage', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: articleData,
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalled();
    });

    test('fetchArticleList not called due to hasMore', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: { ...articleData, hasMore: false },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('fetchArticleList not called due to isLoading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: { ...articleData, isLoading: true },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
