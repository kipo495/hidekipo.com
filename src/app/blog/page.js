// app/blog/page.js
import Link from "next/link";
import Image from "next/image";
import { getBlogList } from "@/lib/microcms";

export default async function BlogPage() {
    let data = null;
    try {
        data = await getBlogList();
    } catch (err) {
        console.error(err);
        return <p>ブログデータの取得に失敗しました。</p>;
    }
    const blogs = data.contents;
    console.log(blogs.map(blog => blog.title));

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">ブログ一覧</h1>
            <ul className="grid md:grid-cols-2 gap-6">
                {blogs.map((blog) => {
                    // HTMLを削除してテキストのみ抜き出し
                    const plainText = blog.content.replace(/<[^>]+>/g, "");
                    const shortText = plainText.length > 120
                        ? plainText.slice(0, 120) + "..."
                        : plainText;

                    return (
                        <li key={blog.id} className="border rounded-xl p-4 hover:shadow-md transition">
                            <Link href={`/blog/${blog.id}`}>
                                <h2 className="text-xl font-semibold mb-2 hover:underline">
                                    {blog.title}
                                </h2>

                                {/* サムネイル */}
                                {blog.thumbnail?.url && (
                                    <Image
                                        src={blog.thumbnail.url}
                                        alt={blog.title}
                                        width={600}
                                        height={315}
                                        className="rounded-md mb-2"
                                    />
                                )}

                                {/* 日付 */}
                                {blog.date?.name && (
                                    <p className="text-gray-500 text-sm mb-3">
                                        {blog.date.name}
                                    </p>
                                )}

                                {/* 抜粋（本文の冒頭だけ） */}
                                <p className="text-gray-800 line-clamp-3">{shortText}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
