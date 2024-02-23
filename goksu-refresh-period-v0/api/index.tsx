import { Button, Frog } from 'frog';
import { handle } from 'frog/vercel';

export const app = new Frog({ basePath: '/api', verify: false });

app.frame('/', () => {
  return {
    imageOptions: {
      headers: {
        'content-type': 'image/png',
        'cache-control': 'public, immutable, no-transform, max-age=0',
      },
    },
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {new Date().toUTCString()}
        </div>
      </div>
    ),
    intents: [<Button value="ping">Ping</Button>],
  };
});

export const GET = handle(app);
export const POST = handle(app);
