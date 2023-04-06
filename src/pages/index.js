import Link from 'next/link'
export default function Home({ colors }) {
  return (
    <div>
      {colors.length &&
        colors.map((color, index) => (
          <Link
            href={{
              pathname: `/${color.name}&${color.hex}`,
            }}
            key={index}
          >

            <h2>{color.name}</h2>
          </Link>
        ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  let res = await fetch("http://localhost:3000/api/colors", {
    method: "GET",
    header: {
      "Content-Type": "application/json"
    },
  });
  let colors = await res.json();
  return {
    props: { colors },
  };
};