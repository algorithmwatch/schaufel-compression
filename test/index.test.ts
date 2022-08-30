import { a, b } from '../src';

const arr = [
  {
    result: {
      id: '7108640878507445509',
      desc: 'IG Sophianinette.official',
      createTime: '1655109441',
      author: 'sophianinette',
      nickname: 'Sophianinette',
      authorId: '6738799894414853126',
      video: {
        duration: 17,
      },
      stats: {
        diggCount: 143400,
        shareCount: 3298,
        commentCount: 2251,
        playCount: 2200000,
      },
      music: {
        id: '7108640849231170309',
        title: 'Originalton',
        authorName: 'Sophianinette',
        original: true,
      },
      diversificationLabels: ['Pets', 'Animals', 'Nature'],
    },
    scrapedAt: 1661272256896,
    error: null,
  },
  {
    result: {
      id: '7101684839933414661',
      desc:
        '😂😂😂 #fy #fyp #viral #meme #ausraster #tvtotal #fyyyyyyyyyyyyyyyy #raab #stefanraab',
      createTime: '1653489855',
      author: 'salver.dog',
      nickname: 'salver.dog',
      authorId: '7037238689685160965',
      video: {
        duration: 116,
      },
      stats: {
        diggCount: 187900,
        shareCount: 2036,
        commentCount: 626,
        playCount: 3500000,
      },
      music: {
        id: '6886912570821707777',
        title: 'Calm LoFi song(882353)',
        authorName: 'S_R',
        original: false,
      },
      diversificationLabels: [
        'Celebrity Clips & Variety Show',
        'Entertainment Culture',
        'Entertainment',
      ],
    },
    scrapedAt: 1661272259615,
    error: null,
  },
];

describe('filter8000 dump from 22-07-2022', () => {
  test('information gets removed', () => {
    const object = arr[0];

    const encoded = a(object);
    const decoded = b(encoded);

    expect(decoded).toStrictEqual(object);
  });
});
