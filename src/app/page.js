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
            <CardDescription className="line">目的：技術ブログ、ポートフォリオとしての役割とともに、コメント機能等を介して多くの読者と交流し、開発者同士で情報交換し合うハブとすること。
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
