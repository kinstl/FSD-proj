import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from '@/entities/Article';
import {
    ArticleSortField,
    ArticleType,
} from '@/entities/Article/model/consts/articleConsts';
import { initArticlesPage } from './initArticlesPage';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

const searchParams = new URLSearchParams(window.location.search);

const articleData = {
    page: 2,
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

describe('initArticlesPage', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: articleData,
        });

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(4);
    });

    test('inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: { ...articleData, _inited: true },
        });

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(2);
    });
});
