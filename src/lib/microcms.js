export async function getBlogList() {
    const domain = process.env.MICROCMS_SERVICE_DOMAIN;
    const apiKey = process.env.MICROCMS_API_KEY;

    const res = await fetch(`https://${domain}.microcms.io/api/v1/blogs`, {
        headers: { 'X-MICROCMS-API-KEY': apiKey },
        cache: 'no-store', // 毎回最新データを取得
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
    }

    return res.json();
}
