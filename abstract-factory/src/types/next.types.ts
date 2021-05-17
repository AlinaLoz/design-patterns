import { NextComponentType } from 'next';
import { NextPageContext } from 'next/dist/next-server/lib/utils';

export type Page<P = Record<string, unknown>, IP = P> = NextComponentType<NextPageContext, IP, P> & {
  allowWithoutAuth?: boolean;
}
