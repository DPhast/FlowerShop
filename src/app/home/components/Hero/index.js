import { getHeroes } from "@/services"; 

export default async function Hero() {
    const heroes = await getHeroes();
    if (!heroes || heroes.length === 0) {
        return (
            <section className="p-10 bg-gray-100">
                <p>Đang tải dữ liệu hoặc không có hero nào...</p>
            </section>
        );
    }

    return (
        <section className="hero-container p-10">
            <div style={{color:"blue"}}>test</div>
        </section>
    );
}