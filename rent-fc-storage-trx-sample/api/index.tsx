import { ButtonProps, Frog } from 'frog';
import { handle } from 'frog/vercel';
import { HtmlEscapedString } from 'hono/utils/html';

export const app = new Frog({
  basePath: '/api',
});

type ButtonTxProps = ButtonProps & {
  target: string;
};
ButtonTx.__type = 'button';
export function ButtonTx({ children, index = 1, target }: ButtonTxProps) {
  return [
    <meta
      property={`fc:frame:button:${index}`}
      content={children}
      data-value="_m"
    />,
    <meta property={`fc:frame:button:${index}:action`} content="tx" />,
    <meta property={`fc:frame:button:${index}:target`} content={target} />,
  ] as unknown as HtmlEscapedString;
}

// app.get('/trx', (c) => {
//   return c.json({
//     description: 'Rent 1 Farcaster storage unit',
//     to: '0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D',
//     data: '0x783a112b0000000000000000000000000000000000000000000000000000000000000e250000000000000000000000000000000000000000000000000000000000000001',
//     value: '984316556204476',
//     chainId: '10',
//   });
// });

app.frame('/', () => {
  return {
    // imageOptions: {
    //   headers: {
    //     'content-type': 'image/png',
    //     'cache-control': 'public, immutable, no-transform, max-age=0',
    //   },
    // },
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
          Farcaster Storage
        </div>
      </div>
    ),
    intents: [
      <ButtonTx target="https://api.warpcast.com/v2/rent-transaction-intent?fid=6841&units=1">
        Rent
      </ButtonTx>,
    ],
  };
});

export const GET = handle(app);
export const POST = handle(app);
