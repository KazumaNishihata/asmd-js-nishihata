export async function GET() {
    // レスポンスを5秒遅らせる
    await new Promise(resolve => setTimeout(resolve, 5000));
    return Response.json({ items: ["ニュース1です", "ニュース2です"] });
}