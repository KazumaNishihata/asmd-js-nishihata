
export default async function NewsItem() {
    const data = await fetch("http://localhost:3000/api");
    const { items } = await data.json();
    return (
        <ul className="border-t">
            {items.map((item: string) => (
                <li className="py-2 border-b pl-2" key={item}>{item}</li>
            ))}
        </ul>
    )
}