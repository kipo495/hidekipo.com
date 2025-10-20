import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Hidekipo.com</h1>
        <p className="mb-2 text-center p-2">
          This is Kipo&apos;s personal website where I share my thoughts, projects, and more.
          <br></br>
          Feel free to explore the site using the cards below!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 m-4">
        <Card>
          <CardHeader>
            <CardTitle>本サイトについて</CardTitle>
            <CardDescription className="line-clamp-3">
              このサイトの目的や内容の紹介です。
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>プロフィール</CardTitle>
            <CardDescription className="line-clamp-3">
              名前、経歴、スキルの紹介です。
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ブログ</CardTitle>
            <CardDescription className="line-clamp-3">
              記事一覧へのリンクです。
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>プロジェクト</CardTitle>
            <CardDescription className="line-clamp-3">
              代表的なプロジェクトの紹介です。
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>おすすめ動画紹介</CardTitle>
            <CardDescription className="line-clamp-3">
              開発を行う上で参考にした動画や、プログラマー必見の動画などをご紹介。
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>宣伝</CardTitle>
            <CardDescription className="line-clamp-3">
              私が関わっているサービスや商品の紹介です。
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>お問い合わせ</CardTitle>
            <CardDescription className="line-clamp-3">
              連絡先やお問い合わせフォームへのリンクです。
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ご支援を頂ける方へ</CardTitle>
            <CardDescription className="line-clamp-3">
              サイト運営のための支援方法についての案内です。
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
