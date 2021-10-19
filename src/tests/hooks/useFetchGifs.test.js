import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Tests on custom hook useFetchGifs', () => {
	test('Should return the initial state', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs());
		const { data, loading } = result.current;

		await waitForNextUpdate;

		expect(data).toEqual([]);
		expect(loading).toBe(true);
	});

	test('Should return an array with images and loading on false', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs('warcraft')
		);
		await waitForNextUpdate();

		const { data, loading } = result.current;

		expect(data.length).toBe(10);
		expect(loading).toBe(false);
	});
});
