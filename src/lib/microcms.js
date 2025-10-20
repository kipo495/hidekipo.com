export async function getBlogList() {
    const domain = process.env.MICROCMS_SERVICE_DOMAIN;
    const apiKey = process.env.MICROCMS_API_KEY;
    console.log(domain, apiKey)

    const url = `https://${domain}.microcms.io/api/v1/blogs`;
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "X-MICROCMS-API-KEY": apiKey,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
    }

    console.log('Fetching from:', `https://${domain}.microcms.io/api/v1/blogs`);
    return res.json();
}
