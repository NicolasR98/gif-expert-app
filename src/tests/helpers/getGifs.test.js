import { getGifs } from '../../helpers/getGifs';

describe('Tests on getGifs', () => {
	test('getGifs - should return 10 elements', async () => {
		const gifs = await getGifs('warcraft');

		expect(gifs.length).toBe(10);
	});

	test('getGifs - should return empty array if not category given', async () => {
		const gifs = await getGifs('');

		expect(gifs.length).toBe(0);
	});
});
