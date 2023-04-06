import { useEffect } from "react";
export default function Color({ color }) {
    const postColor = async () => {
        await fetch("http://localhost:3000/api/colors", {
            method: "POST",
            body: JSON.stringify({
                name: color.name,
                hex: color.hex,
            }),
        });
    };
    useEffect(() => {
        postColor();
    }, []);

    return (
        <div className="color-page" style={{ backgroundColor: color.hex }}>
            <h1>{color.name}</h1>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    let name = context.params.color.split("&")[0];
    let hex = context.params.color.split("&")[1];
    return {
        props: {
            color: { name, hex }
        },
    };
};
