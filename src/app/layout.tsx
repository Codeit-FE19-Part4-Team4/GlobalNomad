import { Noto_Sans_KR } from 'next/font/google';

import ModalContainer from '@/components/modal/ModalContainer';
import './globals.css';
import ModalProvider from '@/components/modal/ModalProvider';
import { ToastProvider } from '@/components/toast/ToastProvider';

/**
 * Noto Sans KR 폰트 설정
 * - next/font/google을 사용해 Google Fonts에서 자동으로 최적화된 폰트 로드
 * - Turbopack 환경에서도 안정적으로 작동
 * - Windows/Mac 모두 동일한 폰트 렌더링 보장
 */
const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <ModalProvider>
        <body className={notoSansKR.className}>
          <ToastProvider>
            <div className="page-wrapper">{children}</div>
            <ModalContainer />
            <div id="modal-root" />
          </ToastProvider>
        </body>
      </ModalProvider>
    </html>
  );
}
