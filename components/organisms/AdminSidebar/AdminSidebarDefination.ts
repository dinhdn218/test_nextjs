import { AdminSidebarType } from './AdminSidebarType'

export const adminSidebar: AdminSidebarType[] = [
  {
    path: '/matching',
    optionalClass: 'matching',
    src: '/matching.png',
    featureList: [
      { label: 'ダッシュボード', path: '/' },
      { label: '求人管理一覧', path: '/' },
    ],
  },
  {
    path: '/video',
    optionalClass: 'video',
    src: '/video.png',
    featureList: [
      { label: 'ダッシュボード', path: '/' },
      { label: '動画一覧', path: '/' },
      { label: '動画投稿', path: '/' },
      { label: '記事一覧', path: '/' },
      { label: '記事投稿', path: '/' },
    ],
  },
  {
    path: '/user',
    optionalClass: 'user',
    src: '/user.png',
    featureList: [
      { label: '歯科医院一覧', path: '/' },
      { label: '歯科医院新規作成', path: '/' },
      { label: '歯科衛生士・歯科助手一覧', path: '/' },
      { label: 'お知らせ一覧', path: '/' },
      { label: 'お問い合わせ一覧', path: '/' },
      { label: '権限管理一覧', path: '/' },
      { label: '通報ユーザー一覧', path: '/' },
      { label: '請求金額', path: '/' },
    ],
  },
]
