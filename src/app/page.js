import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";



export default function Home() {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Hidekipo.com</h1>
        <p className="mb-2">
          This is Kipo's personal website where I share my thoughts, projects, and more.
        </p>
        <p>
          Feel free to explore the site using the navigation menu above!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 m-4">
        <Card>
          <CardHeader>
            <CardTitle>本サイトについて</CardTitle>
            <CardDescription className="line-clamp-3">
              目的：技術ブログ、ポートフォリオとしての役割とともに、コメント機能等を介して多くの読者と交流し、開発者同士で情報交換し合うハブとすること。
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>製作者プロフィール</CardTitle>
            <CardDescription>
              名前：きぽ
              仕事：求職中
              スキル：JavaScript、Python、React、Node.jsなど
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ブログ</CardTitle>
            <CardDescription>
              記事一覧へのリンクです。
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ピックアッププロジェクト</CardTitle>
            <CardDescription>
              代表的なプロジェクトの紹介です。
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>お問い合わせ</CardTitle>
            <CardDescription>
              連絡先情報やお問い合わせフォームへのリンクです。
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ご支援を頂ける方へ</CardTitle>
            <CardDescription>
              サイト運営のための支援方法についての案内です。
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
